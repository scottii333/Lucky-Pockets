import React from "react";
import { LogOut, Trophy, Gamepad2, User } from "lucide-react";

export const AutenticatedPlayer = () => {
  return (
    <div className="min-h-screen bg-[#283618] text-[#FEFAE0] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#606C38] p-6 flex flex-col gap-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🎮 Game Dashboard</h2>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-2 hover:text-[#BC6C25] transition-colors">
            <User size={20} />
            Profile
          </button>
          <button className="flex items-center gap-2 hover:text-[#BC6C25] transition-colors">
            <Trophy size={20} />
            Achievements
          </button>
          <button className="flex items-center gap-2 hover:text-[#BC6C25] transition-colors">
            <Gamepad2 size={20} />
            Play Game
          </button>
          <button className="flex items-center gap-2 text-red-300 hover:text-red-500 transition-colors mt-auto">
            <LogOut size={20} />
            Log Out
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome Back, Player!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FEFAE0] text-[#283618] rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold">Level</h3>
            <p className="text-2xl font-bold">14</p>
          </div>
          <div className="bg-[#FEFAE0] text-[#283618] rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold">XP</h3>
            <p className="text-2xl font-bold">8,450</p>
          </div>
          <div className="bg-[#FEFAE0] text-[#283618] rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold">Rank</h3>
            <p className="text-2xl font-bold">Gold</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Recent Matches</h2>
          <ul className="space-y-2">
            <li className="bg-[#BC6C25] p-4 rounded-lg">
              🏆 Won Match vs. AI Bot
            </li>
            <li className="bg-[#BC6C25] p-4 rounded-lg">
              ❌ Lost Match to Player123
            </li>
            <li className="bg-[#BC6C25] p-4 rounded-lg">🏆 Won Ranked Match</li>
          </ul>
        </div>
      </main>
    </div>
  );
};
