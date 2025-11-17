import { ChatContainer } from "@/components/ChatContainer";
import { MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[600px] bg-card rounded-2xl shadow-lg border border-border overflow-hidden flex flex-col">
        {/* App Header */}
        <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3">
          <MessageSquare className="w-6 h-6" />
          <div>
            <h1 className="text-xl font-bold">CodeAlpha Chatbot</h1>
            <p className="text-sm opacity-90">AI-Powered Retrieval-Based Assistant</p>
          </div>
        </div>

        {/* Chat Container */}
        <ChatContainer />
      </div>
    </div>
  );
};

export default Index;
