import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { readFileSync } from 'fs';
import path from 'path';

interface PortfolioProject {
  title: string;
  description: string;
  techStack: string[];
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

// Fallback responses for off-topic questions
const FALLBACK_RESPONSES = [
  "I'm focused on answering questions about Kamran's portfolio. Could you ask something about his skills, projects, or experience?",
  "I'd be happy to tell you about Kamran's work and projects. What would you like to know?",
  "I'm here to help you learn about Kamran's portfolio. Feel free to ask about his skills, projects, or background!"
];

export async function POST(req: Request) {
  console.log('📥 [POST] Chat request received');
  
  // Check if API key is configured
  if (!process.env.GROQ_API_KEY) {
    console.error('❌ GROQ_API_KEY is not configured in environment variables');
    const fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    return NextResponse.json({ reply: fallbackResponse }, { status: 500 });
  }

  console.log('🔑 API Key configured:', process.env.GROQ_API_KEY ? 'Yes' : 'No');
  
  try {
    const { message } = await req.json();
    console.log('📦 Message received:', message);

    if (!message) {
      console.error('❌ No message provided');
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Read portfolio JSON
    const filePath = path.join(process.cwd(), 'public', 'portfolio.json');
    console.log('📂 Reading portfolio from:', filePath);
    
    let portfolioData;
    try {
      const fileContent = readFileSync(filePath, 'utf-8');
      portfolioData = JSON.parse(fileContent);
      console.log('✅ Portfolio data loaded successfully');
    } catch (error) {
      console.error('❌ Error reading portfolio:', error);
      return NextResponse.json({ error: "Failed to load portfolio data" }, { status: 500 });
    }

      const context = `
Portfolio Information:
-------------------
Name: ${portfolioData.name}
About: ${portfolioData.about}

Technical Skills:
${portfolioData.skills.map((skill: string) => `- ${skill}`).join('\n')}

Projects:
${portfolioData.projects.map((p: PortfolioProject) => `- ${p.title}: ${p.description} (Tech: ${p.techStack.join(', ')})`).join('\n')}

Experience:
${portfolioData.experience?.map((exp: Experience) => `- ${exp.role} at ${exp.company} (${exp.duration}): ${exp.description}`).join('\n') || 'None'}

Certifications:
${portfolioData.certifications?.map((cert: Certification) => `- ${cert.title}, ${cert.issuer} (${cert.year})`).join('\n') || 'None'}

Resume Summary:
${portfolioData.resume?.summary || 'Not provided'}
Available Formats: ${portfolioData.resume?.availableFormats?.join(', ') || 'None'}

Contact Information:
Email: ${portfolioData.contact.email}
LinkedIn: ${portfolioData.contact.linkedin}
GitHub: ${portfolioData.contact.github}
Twitter: ${portfolioData.contact.twitter}
`;

    console.log('🤖 Sending request to Groq...');
    console.log('📝 Using model: llama3-70b-8192');
    
    const openai = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1"
    });
    
    const completion = await openai.chat.completions.create({
      model: 'llama3-70b-8192',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant that helps visitors learn about Kamran's portfolio website. 
          Guidelines:
          1. Keep responses concise but informative
          2. Format contact information cleanly without markdown brackets or parentheses
          3. Use simple bullet points for lists
          4. If the question is off-topic, politely redirect to portfolio-related topics
          5. Highlight key skills and achievements
          6. Be friendly and professional
          
          For contact information, format it like this:
          Email: youremail@example.com
          LinkedIn: https://linkedin.com/in/your-profile
          
          Context:\n${context}`
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const reply = completion.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      const fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      return NextResponse.json({ reply: fallbackResponse });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('❌ Top-level error:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    // Select a random fallback response
    const fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    
    return NextResponse.json(
      { reply: fallbackResponse },
      { status: 500 }
    );
  }
}