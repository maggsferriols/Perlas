
import React from 'react';
import Header from './Header';

const WalletAction: React.FC<{ title: string; icon: string; }> = ({ title, icon }) => (
    <div className="flex flex-col items-center space-y-2 text-center cursor-pointer p-2 rounded-lg hover:bg-perlas-blue-light/10">
        <div className="bg-perlas-blue-light text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl">
            {icon}
        </div>
        <span className="text-sm font-semibold text-perlas-text">{title}</span>
    </div>
);

const TransactionItem: React.FC<{ title: string; date: string; amount: string; isCredit: boolean }> = ({ title, date, amount, isCredit }) => (
    <div className="flex justify-between items-center py-3 border-b border-slate-200">
        <div>
            <p className="font-semibold text-perlas-text">{title}</p>
            <p className="text-sm text-slate-500">{date}</p>
        </div>
        <p className={`font-bold ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
            {isCredit ? '+' : '-'} {amount}
        </p>
    </div>
);

const WalletScreen: React.FC = () => {
  return (
    <div>
      <Header title="My Wallet" username="Juana" />
      <div className="p-4 space-y-6">

        <div className="bg-gradient-to-br from-perlas-blue to-perlas-blue-light text-white p-6 rounded-2xl shadow-xl text-center">
          <p className="text-sm text-perlas-gold-light font-semibold">AVAILABLE BALANCE</p>
          <p className="text-4xl font-bold mt-2">₱ 25,680.50</p>
          <p className="text-sm opacity-80 mt-1">~ $435.80</p>
        </div>

        <div className="grid grid-cols-4 gap-2">
            <WalletAction title="Send" icon="💸" />
            <WalletAction title="Request" icon="📨" />
            <WalletAction title="Pay Bills" icon="💡" />
            <WalletAction title="Add Cash" icon="🏦" />
        </div>

        <div>
            <h2 className="text-lg font-bold text-perlas-text mb-2">Recent Transactions</h2>
            <div className="bg-white p-4 rounded-xl shadow-md">
                <TransactionItem title="Remittance to Family" date="Oct 26, 2023" amount="₱15,000.00" isCredit={false} />
                <TransactionItem title="Salary - October" date="Oct 25, 2023" amount="₱40,680.50" isCredit={true} />
                <TransactionItem title="Marketplace Purchase" date="Oct 22, 2023" amount="₱2,500.00" isCredit={false} />
                 <TransactionItem title="Meralco Bill Payment" date="Oct 20, 2023" amount="₱1,250.00" isCredit={false} />
            </div>
        </div>

      </div>
    </div>
  );
};

export default WalletScreen;
