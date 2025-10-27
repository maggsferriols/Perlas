
import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeScreen from './components/HomeScreen';
import SafetyScreen from './components/SafetyScreen';
import WalletScreen from './components/WalletScreen';
import CommsScreen from './components/CommsScreen';
import AssistantModal from './components/AssistantModal';
import { Screen, ChatMessage } from './types';
import { PerlasAssistantIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<Screen>('Home');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Hello! I'm PERLAS, your personal assistant. How can I help you today? You can ask me about your rights, financial services, or safety procedures.",
    },
  ]);

  const renderScreen = () => {
    switch (activeScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Safety':
        return <SafetyScreen />;
      case 'Wallet':
        return <WalletScreen />;
      case 'Comms':
        return <CommsScreen />;
      case 'More':
        // For simplicity, 'More' screen can be a placeholder
        return <div className="p-6 text-center"><h1 className="text-2xl font-bold text-perlas-blue">More Options</h1><p className="text-perlas-text mt-2">Settings, Profile, and Help Center will be here.</p></div>;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-sm mx-auto h-[100dvh] bg-perlas-gray shadow-2xl flex flex-col font-sans relative overflow-hidden">
      <main className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </main>

      <div className="fixed bottom-24 right-4 z-20">
         <button onClick={() => setIsAssistantOpen(true)} className="bg-perlas-gold p-4 rounded-full shadow-lg hover:bg-perlas-gold-light active:scale-95 transition-transform">
             <PerlasAssistantIcon className="w-8 h-8 text-white"/>
         </button>
      </div>
      
      <BottomNav activeScreen={activeScreen} setActiveScreen={setActiveScreen} />

      {isAssistantOpen && (
        <AssistantModal
          isOpen={isAssistantOpen}
          onClose={() => setIsAssistantOpen(false)}
          messages={messages}
          setMessages={setMessages}
        />
      )}
    </div>
  );
};

export default App;
