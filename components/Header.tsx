
import React from 'react';

interface HeaderProps {
  title: string;
  username: string;
}

const Header: React.FC<HeaderProps> = ({ title, username }) => {
  const userInitial = username.charAt(0).toUpperCase();

  return (
    <header className="bg-perlas-blue text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-10">
        <div>
            <h1 className="text-xl font-bold tracking-tight">{title}</h1>
            <p className="text-sm text-perlas-gold-light">Welcome, {username}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-perlas-gold flex items-center justify-center font-bold text-perlas-blue text-xl border-2 border-white">
            {userInitial}
        </div>
    </header>
  );
};

export default Header;
