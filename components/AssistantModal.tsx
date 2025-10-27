
import React, { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PerlasAssistantIcon, SendIcon } from './Icons';

interface AssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const AssistantModal: React.FC<AssistantModalProps> = ({ isOpen, onClose, messages, setMessages }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponseText = await getAssistantResponse(messages, input);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiResponseText };
      setMessages([...newMessages, aiMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I encountered an error. Please try again." };
      setMessages([...newMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 max-w-sm mx-auto h-[100dvh] bg-perlas-gray shadow-2xl flex flex-col font-sans">
        <header className="bg-perlas-blue text-white p-4 flex justify-between items-center shadow-md">
          <div className="flex items-center space-x-3">
            <PerlasAssistantIcon className="w-8 h-8 text-perlas-gold"/>
            <div>
              <h2 className="text-lg font-bold">PERLAS Assistant</h2>
              <p className="text-xs text-perlas-gold-light">Your helpful guide</p>
            </div>
          </div>
          <button onClick={onClose} className="text-2xl font-bold">&times;</button>
        </header>
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-3 rounded-xl max-w-xs lg:max-w-md ${msg.sender === 'user' ? 'bg-perlas-blue-light text-white' : 'bg-white text-perlas-text shadow-sm'}`}>
                {/* A basic markdown-like renderer for newlines */}
                {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
           {isLoading && (
            <div className="flex justify-start">
               <div className="p-3 rounded-xl bg-white text-perlas-text shadow-sm">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="flex-1 p-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-perlas-blue"
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading} className="bg-perlas-blue text-white p-3 rounded-full hover:bg-perlas-blue-light disabled:bg-slate-400 active:scale-95 transition-transform">
              <SendIcon className="w-6 h-6"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantModal;
