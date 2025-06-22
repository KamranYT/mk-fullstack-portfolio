"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Loader2, Send, X, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatWidget() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (mounted) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, mounted]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      let errorMessage = "Sorry, I couldn't process your message. Please try again.";
      
      if (err instanceof Error) {
        if (err.message.includes("GROQ_API_KEY")) {
          errorMessage = "Chat service is not configured. Please check the API configuration.";
        } else if (err.message.includes("Failed to get response")) {
          errorMessage = "Unable to connect to chat service. Please try again later.";
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 z-50 group"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="fixed bottom-24 right-6 w-[380px] h-[500px] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 backdrop-blur-sm"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat with Kamran</h3>
                    <p className="text-blue-100 text-sm">Ask me anything about my portfolio</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            </div>

            {/* Messages Area */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
              {messages.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="font-medium mb-2">Start a conversation!</p>
                    <p className="text-sm">Ask me about my skills, projects, or experience</p>
                  </div>
                </motion.div>
              ) : (
                messages.map((msg, index) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start gap-3 max-w-[80%] ${msg.isUser ? "flex-row-reverse" : ""}`}>
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.isUser 
                          ? "bg-gradient-to-r from-blue-500 to-purple-500" 
                          : "bg-gradient-to-r from-gray-500 to-gray-600"
                      }`}>
                        {msg.isUser ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      
                      {/* Message Bubble */}
                      <div
                        className={`rounded-2xl px-4 py-3 shadow-sm ${
                          msg.isUser
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            : "bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200"
                        }`}
                      >
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        </div>
                        <div
                          className={`text-xs mt-2 ${
                            msg.isUser ? "text-blue-100" : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
              
              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Typing...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-3 rounded-xl text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    {error}
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 min-h-[80px] flex items-end">
              <div className="flex gap-3 w-full">
                <input
                  className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !isLoading && sendMessage()
                  }
                  placeholder="Type your message..."
                  disabled={isLoading}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span className="hidden sm:inline">Send</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}