import React from "react";
import { Clock, Users, Crown, Calendar } from "lucide-react";

// Replace this mock data with real game history from your backend
const gameHistory = [
  {
    id: 1,
    date: "2025-06-12",
    players: ["Ace", "Blaze", "Clutch"],
    winner: "Ace",
    totalShots: 47,
    cards: 5,
  },
  {
    id: 2,
    date: "2025-06-10",
    players: ["Blaze", "Dart", "Echo"],
    winner: "Echo",
    totalShots: 62,
    cards: 7,
  },
  {
    id: 3,
    date: "2025-06-08",
    players: ["Ace", "Echo"],
    winner: "Ace",
    totalShots: 33,
    cards: 5,
  },
];

export const History = () => {
  return (
    <div className="bg-[#FEFAE0] min-h-screen rounded-2xl m-4 p-6 flex flex-col gap-6">
      {/* ── Header ── */}
      <h1 className="text-3xl font-bold text-[#283618] flex items-center gap-2">
        <Clock size={28} />
        Match History
      </h1>

      {/* ── Game list ── */}
      <section className="flex flex-col gap-4">
        {gameHistory.map((game) => (
          <div
            key={game.id}
            className="rounded-xl border border-[#BC6C25]/30 bg-white p-4 flex flex-col gap-2"
          >
            {/* Date & Players */}
            <div className="flex items-center justify-between text-sm text-[#283618]/80">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {new Date(game.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Users size={16} />
                {game.players.length} players
              </span>
            </div>

            {/* Players List */}
            <div className="flex flex-wrap gap-2 text-sm">
              {game.players.map((name) => (
                <span
                  key={name}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    name === game.winner
                      ? "bg-[#BC6C25]/80 text-[#FEFAE0]"
                      : "bg-[#283618]/10 text-[#283618]"
                  }`}
                >
                  {name}
                  {name === game.winner && (
                    <Crown size={14} className="inline ml-1 mb-0.5" />
                  )}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm mt-1 text-[#283618]/80">
              <span>Shots: {game.totalShots}</span>
              <span>Cards: {game.cards}</span>
            </div>
          </div>
        ))}
      </section>

      {gameHistory.length === 0 && (
        <p className="text-[#283618]/60 italic">No match history yet.</p>
      )}
    </div>
  );
};
