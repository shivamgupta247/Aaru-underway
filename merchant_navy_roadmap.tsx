import React, { useState } from 'react';
import { Ship, Anchor, Award, TrendingUp, Clock, DollarSign, FileText, AlertCircle } from 'lucide-react';

export default function MerchantNavyRoadmap() {
  const [selectedRank, setSelectedRank] = useState<number | null>(null);

  const ranks = [
    {
      id: 1,
      name: "Deck Cadet",
      role: "Trainee",
      description: "You are not an officer yet — you are learning how a ship actually works.",
      dailyLife: [
        "Standing lookout watch on the bridge",
        "Learning navigation basics from officers",
        "Assisting in mooring/unmooring operations",
        "Deck maintenance (painting, cleaning, rust removal)",
        "Learning charts, ropes, knots, safety equipment"
      ],
      rotation: ["Bridge", "Deck", "Safety drills"],
      hours: "8–10 hours/day (longer during port stay)",
      salary: "₹25,000 – ₹60,000 per month",
      note: "First goal is experience, not money.",
      exam: null
    },
    {
      id: 2,
      name: "Third Officer",
      role: "Junior Officer",
      description: "First official rank after training. You are now a certified officer.",
      responsibilities: {
        bridge: ["Keeps navigational watch (usually 8–12 watch)", "Monitors radar, position, traffic", "Follows Captain's and Chief Officer's instructions"],
        safety: ["In charge of lifeboats", "Fire extinguishers", "Emergency equipment"],
        paperwork: ["Safety records", "Drill reports", "Equipment maintenance logs"]
      },
      growth: "You learn confidence on the bridge and start making small decisions. Seniors closely monitor your performance.",
      salary: "₹1.8 – 3 L per month (Tankers and LNG ships pay more)",
      exam: {
        name: "OOW (Officer of the Watch – Deck)",
        timing: "2–3 years after starting training",
        purpose: "Checks if you can safely keep watch alone"
      }
    },
    {
      id: 3,
      name: "Second Officer",
      role: "Navigation Specialist",
      description: "Plans the ship's route and handles navigation responsibilities.",
      salary: "₹2.5 – 4.5 L per month",
      exam: null
    },
    {
      id: 4,
      name: "Chief Officer",
      role: "Second-in-Command",
      description: "In charge of cargo operations and deck crew management.",
      salary: "₹4 – 7 L per month",
      exam: {
        name: "Chief Mate (FG)",
        timing: "6–9 years into career",
        purpose: "Checks if you can handle cargo, stability, and crew"
      }
    },
    {
      id: 5,
      name: "Captain (Master)",
      role: "Head of the Ship",
      description: "Final authority and legal responsibility for the entire vessel.",
      salary: "₹8 – 15 L per month",
      exam: {
        name: "Master Mariner (FG)",
        timing: "10–15 years into career",
        purpose: "Checks if you can take full command of a ship"
      }
    }
  ];

  const examTimeline = [
    { stage: "Cadet → Officer", exam: "OOW (Deck)", result: "Third Officer" },
    { stage: "Officer → Senior", exam: "Chief Mate (FG)", result: "Chief Officer" },
    { stage: "Senior → Command", exam: "Master Mariner (FG)", result: "Captain" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 border-b-4 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Ship className="w-8 h-8" />
            <div>
              <h1 className="text-3xl font-bold">Merchant Navy Career Guide</h1>
              <p className="text-slate-300 text-sm">Deck Department Path</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Intro Quote */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-12">
          <p className="text-xl text-gray-800 font-medium italic">
            "The Deck Department is not about travel or glamour. It is about responsibility, leadership, and decision-making."
          </p>
        </div>

        {/* What is Deck Department */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Deck Department?</h2>
          <p className="text-lg text-gray-700 mb-6">
            The Deck Department is the command and navigation side of a merchant ship.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Deck Officers are Responsible For:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>→ Navigating the ship from one port to another</li>
                <li>→ Keeping the ship safe at sea</li>
                <li>→ Handling cargo operations</li>
                <li>→ Managing crew and emergencies</li>
              </ul>
            </div>
            
            <div className="bg-red-600 text-white p-6">
              <h3 className="text-xl font-bold mb-4">Critical Point</h3>
              <p className="text-lg">
                If something goes wrong at sea, the deck department takes responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Career Ladder */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Career Ladder</h2>
          <p className="text-gray-600 mb-8">Everyone starts at the bottom and moves up. Click any rank for details.</p>
          
          <div className="space-y-4">
            {ranks.map((rank, index) => (
              <div key={rank.id} className="border-2 border-gray-300">
                <div
                  onClick={() => setSelectedRank(selectedRank === rank.id ? null : rank.id)}
                  className="bg-gray-100 p-5 cursor-pointer hover:bg-gray-200 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">{rank.name}</h3>
                        <p className="text-gray-600 mb-2">{rank.role}</p>
                        <p className="text-gray-700">{rank.description}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm text-gray-600 mb-1">Salary</p>
                      <p className="font-bold text-green-700">{rank.salary}</p>
                    </div>
                  </div>
                  
                  {rank.exam && (
                    <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-3">
                      <p className="font-semibold text-gray-900">Required Exam: {rank.exam.name}</p>
                      <p className="text-sm text-gray-700">Timing: {rank.exam.timing}</p>
                    </div>
                  )}
                </div>
                
                {selectedRank === rank.id && (
                  <div className="p-6 bg-white border-t-2 border-gray-300">
                    {rank.id === 1 && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">Daily Duties</h4>
                          <ul className="space-y-2 text-gray-700">
                            {rank.dailyLife?.map((duty, i) => (
                              <li key={i}>• {duty}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">Rotation Areas</h4>
                          <div className="flex gap-3">
                            {rank.rotation?.map((area, i) => (
                              <span key={i} className="border-2 border-gray-300 px-4 py-2 font-medium">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-gray-700"><Clock className="w-4 h-4 inline mr-2" /><strong>Working Hours:</strong> {rank.hours}</p>
                        </div>
                        
                        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                          <p className="text-gray-800">💡 {rank.note}</p>
                        </div>
                      </div>
                    )}
                    
                    {rank.id === 2 && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">Bridge Duties</h4>
                          <ul className="space-y-2 text-gray-700">
                            {rank.responsibilities?.bridge?.map((duty, i) => (
                              <li key={i}>• {duty}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">Safety Responsibilities</h4>
                          <ul className="space-y-2 text-gray-700">
                            {rank.responsibilities?.safety?.map((duty, i) => (
                              <li key={i}>• {duty}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">Paperwork</h4>
                          <ul className="space-y-2 text-gray-700">
                            {rank.responsibilities?.paperwork?.map((duty, i) => (
                              <li key={i}>• {duty}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-100 p-4 border-l-4 border-gray-600">
                          <p className="text-gray-800 italic">{rank.growth}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Exam Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Promotion Exams Timeline</h2>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <p className="text-gray-900 font-semibold">
              Every promotion in the Deck Department requires sea experience and passing professional exams. There are no automatic promotions.
            </p>
          </div>
          
          <table className="w-full border-2 border-gray-300">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="py-3 px-4 text-left font-bold">Stage</th>
                <th className="py-3 px-4 text-left font-bold">Exam Name</th>
                <th className="py-3 px-4 text-left font-bold">Result</th>
              </tr>
            </thead>
            <tbody>
              {examTimeline.map((item, index) => (
                <tr key={index} className="border-b-2 border-gray-300">
                  <td className="py-3 px-4 text-gray-700">{item.stage}</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">{item.exam}</td>
                  <td className="py-3 px-4 font-semibold text-green-700">{item.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Journey Path */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Journey to Captain</h2>
          
          <div className="bg-slate-900 text-white p-8">
            <div className="flex items-center justify-center gap-4 flex-wrap text-center">
              <div className="border-2 border-white px-6 py-3 font-bold">
                BSc Nautical Science
              </div>
              <span className="text-orange-500 text-2xl font-bold">→</span>
              <div className="border-2 border-white px-6 py-3 font-bold">
                Ship Training
              </div>
              <span className="text-orange-500 text-2xl font-bold">→</span>
              <div className="border-2 border-white px-6 py-3 font-bold">
                Officer Ranks
              </div>
              <span className="text-orange-500 text-2xl font-bold">→</span>
              <div className="bg-orange-500 text-slate-900 px-6 py-3 font-bold">
                CAPTAIN
              </div>
            </div>
            <p className="text-center mt-6 text-lg italic text-gray-300">
              No shortcuts. Experience and exams matter.
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-100 border-t-2 border-gray-300 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Click on any rank to see detailed responsibilities and daily life</p>
        </div>
      </footer>
    </div>
  );
}