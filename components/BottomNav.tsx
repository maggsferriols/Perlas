
import React from 'react';
import { NavItem, Screen } from '../types';
import { HomeIcon, ShieldIcon, WalletIcon, ChatIcon, MoreIcon } from './Icons';

interface BottomNavProps {
  activeScreen: Screen;
  setActiveScreen: (screen: Screen) => void;
}

const navItems: NavItem[] = [
  { id: 'Home', label: 'Home', icon: HomeIcon },
  { id: 'Safety', label: 'Safety', icon: ShieldIcon },
  { id: 'Wallet', label: 'Wallet', icon: WalletIcon },
  { id: 'Comms', label: 'Comms', icon: ChatIcon },
  { id: 'More', label: 'More', icon: MoreIcon },
];

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-slate-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveScreen(item.id)}
              className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${
                isActive ? 'text-perlas-blue' : 'text-slate-500 hover:text-perlas-blue-light'
              }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className={`text-xs font-semibold ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};

export default BottomNav;
