// components/ChatWidget.tsx
"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hi! I'm Yuan's AI assistant. Ask me about his projects!" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setMessages((prev) => [...prev, { role: "ai", content: data.message.content }]);
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="bg-[#2a2a2a] border border-gray-600 w-80 h-96 rounded-2xl mb-4 shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-[#383838] text-gray-200 p-3 text-sm font-bold">Chat with Yuan's AI</div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg text-sm ${m.role === 'user' ? 'bg-emerald-600' : 'bg-[#404040] text-gray-200'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-xs text-gray-500 animate-pulse">AI is thinking...</div>}
          </div>

          <div className="p-3 border-t border-gray-600 flex gap-2">
            <input 
              className="bg-[#1f1f1f] border border-gray-600 text-gray-200 rounded-md px-2 py-1 text-sm flex-1 focus:outline-none focus:border-emerald-500 placeholder:text-gray-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
            />
            <button onClick={handleSend} className="bg-emerald-500 hover:bg-emerald-400 text-black px-3 py-1 rounded-md text-sm font-bold">Send</button>
          </div>
        </div>
      )}

      <button
        className="bg-emerald-500 hover:bg-emerald-400 text-black w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "AI"}
      </button>
    </div>
  );
}