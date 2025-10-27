
import React from 'react';
import Header from './Header';

const MessageItem: React.FC<{ name: string; message: string; time: string; unread: number; avatar: string; }> = ({ name, message, time, unread, avatar }) => (
    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-100 cursor-pointer">
        <div className="relative">
            <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover" />
            {unread > 0 && 
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {unread}
                </span>
            }
        </div>
        <div className="flex-1">
            <div className="flex justify-between">
                <h3 className="font-bold text-perlas-text">{name}</h3>
                <p className="text-xs text-slate-500">{time}</p>
            </div>
            <p className="text-sm text-slate-600 truncate">{message}</p>
        </div>
    </div>
);

const CommsScreen: React.FC = () => {
  return (
    <div>
      <Header title="Messages" username="Juana" />
      <div className="p-2">
         <div className="bg-perlas-gold-light p-3 rounded-lg text-center mb-4">
            <h3 className="font-bold text-perlas-blue">Official Announcements</h3>
            <p className="text-sm text-perlas-text">Latest updates from your agency and the embassy.</p>
        </div>
        <div className="space-y-1">
            <MessageItem name="Mama" message="Anak, natanggap na namin ang padala mo. Salamat..." time="5m ago" unread={2} avatar="https://picsum.photos/200/200?random=10" />
            <MessageItem name="Work Agency" message="Reminder: Please submit your updated medical certificate." time="2h ago" unread={1} avatar="https://picsum.photos/200/200?random=11" />
            <MessageItem name="Philippine Embassy" message="Advisory: Consular services outreach on Nov 5." time="1d ago" unread={0} avatar="https://picsum.photos/200/200?random=12" />
            <MessageItem name="Juan Dela Cruz" message="Hi, musta? Got your number from Pedro." time="3d ago" unread={0} avatar="https://picsum.photos/200/200?random=13" />
        </div>
      </div>
    </div>
  );
};

export default CommsScreen;
