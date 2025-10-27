
import React, { useState } from 'react';
import Header from './Header';

const SafetyFeature: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
        <h3 className="font-semibold text-perlas-blue">{title}</h3>
        <p className="text-sm text-perlas-text mt-1">{description}</p>
    </div>
);

const SafetyScreen: React.FC = () => {
  const [sosActivated, setSosActivated] = useState(false);

  const handleSosClick = () => {
    setSosActivated(true);
    // In a real app, this would trigger API calls.
    setTimeout(() => setSosActivated(false), 5000); // Reset after 5 seconds
  };

  return (
    <div>
      <Header title="Safety Center" username="Juana" />
      <div className="p-4 flex flex-col items-center space-y-8">

        <div className="w-64 h-64 rounded-full flex items-center justify-center p-4 bg-red-100 transition-all duration-300">
          <button 
            onClick={handleSosClick}
            className={`w-full h-full rounded-full flex flex-col items-center justify-center text-white shadow-2xl transition-transform duration-200 active:scale-90 ${sosActivated ? 'bg-green-500' : 'bg-red-600 hover:bg-red-700'}`}
            disabled={sosActivated}
          >
            {sosActivated ? (
              <>
                <span className="text-2xl font-bold">Alert Sent!</span>
                <span className="text-sm text-center mt-1 px-4">Help is on the way. Your contacts have been notified.</span>
              </>
            ) : (
              <>
                <span className="text-5xl font-bold">SOS</span>
                <span className="text-sm text-center mt-2 px-4">Press and hold in case of emergency</span>
              </>
            )}
          </button>
        </div>
        
        <div className="w-full text-center">
             <p className="text-perlas-text">This will instantly alert your emergency contacts, agency, and the nearest embassy with your location.</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <SafetyFeature title="Real-Time Locator" description="Share your live location with trusted contacts." />
          <SafetyFeature title="Incident Report" description="Discreetly report abuse or contract violations." />
          <SafetyFeature title="Verified Employers" description="Check agency and employer credentials." />
          <SafetyFeature title="Attendance Tracker" description="View your check-in history for peace of mind." />
        </div>

      </div>
    </div>
  );
};

export default SafetyScreen;
