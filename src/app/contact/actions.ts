'use server'

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Here you would typically integrate with an email service
  // like SendGrid, AWS SES, or similar
  console.log('Form submission:', { name, email, message });

  // For now, we'll just return a success message
  return { success: true, message: 'Message sent successfully!' };
} 