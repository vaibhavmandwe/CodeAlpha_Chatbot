export const chatResponses: Record<string, string> = {
  "hi": "Hello! How can I assist you today?",
  "hello": "Hi there! Hope you're doing great!",
  "hey": "Hey! What can I help you with?",
  "greetings": "Welcome! I'm here to help you with any questions you have.",
  "good morning": "Good morning! How may I assist you today?",
  "good afternoon": "Good afternoon! What can I do for you?",
  "good evening": "Good evening! How can I help you?",
  "help": "Sure! Tell me what problem you're facing and I'll do my best to assist you.",
  "support": "Our support team is available 24/7 to help you. Contact us at support@company.com or ask me anything!",
  "assistance": "I'm here to provide assistance! Please let me know what you need help with.",
  "price": "Our pricing details are available on our official website. We offer flexible plans to suit different needs.",
  "pricing": "We have competitive pricing with various plans. Visit our website for detailed information.",
  "plans": "We offer multiple subscription plans including Basic, Professional, and Enterprise options. Each plan is designed to meet specific needs.",
  "cost": "For detailed cost information and pricing options, please visit our pricing page or contact our sales team.",
  "contact": "You can contact us at support@company.com. We're here to help!",
  "email": "Reach us via email at support@company.com. We typically respond within 24 hours.",
  "phone": "For phone support, please visit our contact page for regional phone numbers.",
  "reach": "You can reach us through email at support@company.com or use this chat for immediate assistance.",
  "about": "We are CodeAlpha, a leading technology company dedicated to providing excellent service and innovative solutions to all our users.",
  "info": "CodeAlpha specializes in delivering cutting-edge technology solutions with a focus on customer satisfaction and reliability.",
  "company": "CodeAlpha is a trusted technology partner committed to excellence and innovation in everything we do.",
  "who are you": "I'm CodeAlpha Assistant, your intelligent chatbot here to help answer questions and provide support!",
  "what is your name": "My name is CodeAlpha Assistant. I'm here to make your experience smooth and helpful!",
  "what is this": "This is an AI-powered chatbot system designed to provide instant assistance and answer your questions efficiently.",
  "features": "We offer 24/7 support, instant responses, personalized assistance, secure communication, and seamless integration with our services.",
  "services": "Our services include customer support, technical assistance, product information, account management, and general inquiries.",
  "capabilities": "I can help you with information about our company, pricing, support, features, and answer general questions you might have.",
  "what can you do": "I can assist you with questions about our services, pricing, support options, company information, and more. Just ask!",
  "hours": "We're available 24/7 to assist you! Our support never sleeps.",
  "availability": "Our team and chatbot are available around the clock, every day of the year.",
  "location": "We operate globally and serve customers worldwide with localized support in multiple regions.",
  "where are you located": "We have a global presence with offices and support teams distributed across multiple countries.",
  "thank you": "You're welcome! Feel free to ask if you need anything else.",
  "thanks": "You're welcome! Happy to help!",
  "appreciate": "It's my pleasure! Don't hesitate to reach out if you need more assistance.",
  "bye": "Goodbye! Have a great day!",
  "goodbye": "See you later! Take care!",
  "exit": "Thank you for chatting with us! Feel free to return anytime you need help.",
  "see you": "See you soon! Have a wonderful day!",
  "how are you": "I'm doing great! Thanks for asking. How can I help you today?",
  "how do you do": "I'm functioning perfectly and ready to assist you! What can I help you with?",
  "status": "All systems are operational and I'm ready to help you with your questions!"
};

export const fallbackResponse = "Sorry, I didn't understand that. Can you try something else?";

export function getChatResponse(userMessage: string): string {
  const normalizedMessage = userMessage.toLowerCase().trim();
  return chatResponses[normalizedMessage] || fallbackResponse;
}
