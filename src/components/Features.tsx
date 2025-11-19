import { useState } from 'react';

export default function Features() {
  const [activeTab, setActiveTab] = useState('sale');

  const tabs = [
    { id: 'sale', label: 'Sale' },
    { id: 'restocked', label: 'Restocked' },
    { id: 'new', label: 'New Arrivals' }
  ];

  return (
    <section className="bg-[#0a0a0a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#c19e66] text-black'
                  : 'bg-transparent text-gray-400 border border-gray-700 hover:border-[#c19e66]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
