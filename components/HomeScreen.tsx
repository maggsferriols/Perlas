
import React from 'react';
import Header from './Header';

const QuickAction: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
    <h3 className="font-bold text-perlas-blue">{title}</h3>
    <p className="text-sm text-perlas-text">{description}</p>
  </div>
);

const NewsItem: React.FC<{ title: string; source: string; time: string; imageUrl: string; }> = ({ title, source, time, imageUrl }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex items-center space-x-4 hover:bg-slate-50 transition-colors cursor-pointer">
        <img src={imageUrl} alt={title} className="w-24 h-24 object-cover"/>
        <div className="p-2 flex-1">
            <h4 className="font-semibold text-perlas-text leading-tight">{title}</h4>
            <div className="text-xs text-slate-500 mt-1">
                <span>{source}</span> &bull; <span>{time}</span>
            </div>
        </div>
    </div>
);


const HomeScreen: React.FC = () => {
  return (
    <div>
      <Header title="PERLAS" username="Juana" />
      <div className="p-4 space-y-6">
        
        <div className="bg-perlas-blue-light text-white p-4 rounded-xl shadow-lg text-center">
            <h2 className="font-bold text-lg">Daily Check-in</h2>
            <p className="text-sm mt-1">Let your family and agency know you're safe.</p>
            <button className="mt-3 bg-perlas-gold text-perlas-blue font-bold py-2 px-6 rounded-full hover:bg-perlas-gold-light transition-colors active:scale-95">
                I'm Safe
            </button>
        </div>

        <section>
          <h2 className="text-lg font-bold text-perlas-text mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <QuickAction title="Send Money" description="Fast & secure remittance" />
            <QuickAction title="Pay Bills" description="Utilities in the Philippines" />
            <QuickAction title="Buy Load" description="For your family's mobile" />
            <QuickAction title="Marketplace" description="Pay later for your loved ones" />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-perlas-text mb-3">News & Advisories</h2>
          <div className="space-y-4">
            <NewsItem title="New POEA Guidelines for OFWs in the Middle East" source="POEA News" time="2h ago" imageUrl="https://picsum.photos/200/200?random=1" />
            <NewsItem title="Embassy Advisory: Holiday Schedule for October" source="PH Embassy" time="1d ago" imageUrl="https://picsum.photos/200/200?random=2" />
            <NewsItem title="Financial Literacy Webinar for OFWs" source="BDO Community" time="3d ago" imageUrl="https://picsum.photos/200/200?random=3" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
