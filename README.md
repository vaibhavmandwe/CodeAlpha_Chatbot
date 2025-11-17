# CodeAlpha Chatbot System

🤖 **AI-Powered Retrieval-Based Chatbot** | CodeAlpha Internship Task 4

A modern, responsive chatbot application built with React, TypeScript, and Tailwind CSS. Features instant responses, smooth animations, and an intuitive chat interface.

---

## 📋 Project Overview

This is a complete implementation of an AI Chatbot System that uses a retrieval-based approach to provide instant responses. The chatbot matches user input against predefined responses and delivers relevant answers in real-time with a beautiful, modern UI.



---

## ✨ Features

✅ **Retrieval-Based Response System**
- Instant responses using predefined response database
- Case-insensitive message matching
- Intelligent fallback for unrecognized inputs

✅ **Modern Chat Interface**
- Beautiful bubble-style messages (user on right, bot on left)
- Smooth message animations with slide-in effects
- Auto-scroll to latest messages
- Responsive design for all screen sizes

✅ **Enhanced User Experience**
- "Bot typing..." animation indicator
- Message timestamps
- User and bot avatars
- Disabled input during bot response
- Clean, professional design

✅ **Technical Implementation**
- Built with React 18 & TypeScript
- Styled with Tailwind CSS
- Component-based architecture
- Type-safe response system
- Optimized performance

---

## 🛠 Tech Stack

**Frontend:**
- React 18.3
- TypeScript
- Tailwind CSS
- Vite (Build tool)
- Lucide React (Icons)

**UI Components:**
- Custom chat components
- Shadcn UI components
- Responsive layout system

**Architecture:**
- Component-based design
- TypeScript interfaces
- Centralized response data
- Modern React hooks

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ChatContainer.tsx    # Main chat logic & state
│   ├── ChatMessage.tsx       # Individual message bubbles
│   ├── ChatInput.tsx         # Message input with send button
│   ├── TypingIndicator.tsx   # Bot typing animation
│   └── ui/                   # Reusable UI components
├── data/
│   └── responses.ts          # Response database & matching logic
├── pages/
│   └── Index.tsx             # Main page layout
└── index.css                 # Design system & theme
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+ and npm installed
- Git installed

### Installation Steps

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
Navigate to: http://localhost:8080
```

The app will automatically reload when you make changes!

---

## 💬 Sample Conversations

Try these messages to see the chatbot in action:

**Greetings:**
- "Hi", "Hello", "Hey"

**Getting Help:**
- "Help", "Support"

**Information Requests:**
- "Price", "Pricing"
- "Contact", "Email"
- "Features", "Services"
- "Hours", "Location"

**Casual Chat:**
- "How are you"
- "What is your name"
- "Thank you"
- "Bye"

---

## 🎨 Customization

### Adding New Responses

Edit `src/data/responses.ts`:

```typescript
export const chatResponses: Record<string, string> = {
  "your trigger": "Your bot response here",
  "another trigger": "Another response",
  // Add more...
};
```

### Changing Colors

Modify the design system in `src/index.css`:

```css
:root {
  --primary: 217 91% 60%;        /* Main blue color */
  --chat-user-bg: 217 91% 60%;   /* User message background */
  --chat-bot-bg: 0 0% 100%;      /* Bot message background */
}
```

---

## 📱 Responsive Design

The chatbot is fully responsive and works perfectly on:
- 💻 Desktop computers
- 📱 Mobile phones
- 📟 Tablets
- 🖥 Large screens

---

## 🔧 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

---

## 🌐 Deployment

This project is ready to deploy on:
- **Lovable** (One-click deployment)
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy on Lovable:
1. Open your project on Lovable
2. Click "Share" → "Publish"
3. Your chatbot is live!

---

## 📖 How It Works

1. **User Input:** User types a message and clicks send
2. **Message Processing:** Input is converted to lowercase and trimmed
3. **Response Matching:** System checks the response database for matching keywords
4. **Bot Response:** 
   - If match found → Returns predefined response
   - If no match → Returns fallback message
5. **UI Update:** Messages appear with smooth animations

---

## 👨‍💻 Developer Notes

### Key Components

**ChatContainer:** 
- Manages message state
- Handles user input
- Coordinates typing indicators
- Auto-scrolls to new messages

**ChatMessage:**
- Renders individual messages
- Displays user/bot avatars
- Shows timestamps
- Applies appropriate styling

**TypingIndicator:**
- Animated dots while bot "thinks"
- Smooth fade-in/fade-out

**responses.ts:**
- Centralized response database
- getChatResponse() matching function
- Easy to extend and maintain

---

## 🎯 CodeAlpha Internship - Task 4

**Task:** Build an AI Chatbot System  
**Type:** Retrieval-Based Chatbot  
**Status:** ✅ Completed  

**Requirements Met:**
- ✅ Retrieval-based response system
- ✅ Instant responses from predefined data
- ✅ Case-insensitive matching
- ✅ Fallback for unknown inputs
- ✅ Modern, responsive UI
- ✅ Chat bubble design
- ✅ Smooth animations
- ✅ Auto-scroll functionality
- ✅ Typing indicator
- ✅ Professional codebase
- ✅ Full documentation

---

## 📄 License

This project is created for the CodeAlpha Internship program.

---

## 🤝 Support

For questions or issues:
- 📧 Email: support@company.com
- 💬 Use the chatbot itself to test functionality!

---

**Built with ❤️ for CodeAlpha Internship Program**

*Modern React Architecture | TypeScript | Tailwind CSS | Production-Ready*
