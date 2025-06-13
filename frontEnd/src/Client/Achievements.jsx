import { useMemo, useState } from "react";
import { Trophy, ArrowUpCircle, ArrowDownCircle, Search } from "lucide-react";

/* ───── Replace this with real data from your backend ───── */
const stats = [
  { id: "u1", name: "Ace", shots: 78, wins: 20 },
  { id: "u2", name: "Blaze", shots: 51, wins: 12 },
  { id: "u3", name: "Clutch", shots: 34, wins: 5 },
  { id: "u4", name: "Dart", shots: 22, wins: 3 },
  { id: "u5", name: "Echo", shots: 15, wins: 1 },
];

/* ───── Component ───── */
export const Achievements = () => {
  const [query, setQuery] = useState("");

  /* Filter by search text */
  const filtered = useMemo(() => {
    if (!query) return stats;
    return stats.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  /* Helpers */
  const mostShots = [...stats].sort((a, b) => b.shots - a.shots)[0];
  const leastShots = [...stats].sort((a, b) => a.shots - b.shots)[0];
  const mostWins = [...stats].sort((a, b) => b.wins - a.wins)[0];
  const leastWins = [...stats].sort((a, b) => a.wins - b.wins)[0];

  return (
    <div className="bg-[#FEFAE0] min-h-screen rounded-2xl m-4 p-6 flex flex-col gap-6">
      {/* ─── Header & search ─── */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-[#283618] flex items-center gap-2">
          <Trophy size={28} /> Leaderboard
        </h1>

        <div className="relative w-full sm:w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#BC6C25]"
          />
          <input
            type="text"
            placeholder="Search player…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-full border border-[#BC6C25]/40 focus:border-[#BC6C25] outline-none bg-transparent text-[#283618] placeholder:text-[#BC6C25]/60"
          />
        </div>
      </header>

      {/* ─── Stats summary ─── */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard
          label="Most shots"
          player={mostShots}
          icon={<ArrowUpCircle size={20} />}
        />
        <SummaryCard
          label="Least shots"
          player={leastShots}
          icon={<ArrowDownCircle size={20} />}
        />
        <SummaryCard
          label="Most wins"
          player={mostWins}
          icon={<ArrowUpCircle size={20} />}
        />
        <SummaryCard
          label="Least wins"
          player={leastWins}
          icon={<ArrowDownCircle size={20} />}
        />
      </section>

      {/* ─── Full ranking table ─── */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[#283618] border-b border-[#BC6C25]/40">
            <th className="py-2 pr-4">#</th>
            <th className="py-2 pr-4">Player</th>
            <th className="py-2 pr-4 text-right">Shots</th>
            <th className="py-2 text-right">Wins</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((p, idx) => (
            <tr
              key={p.id}
              className={`border-b border-[#BC6C25]/20 ${
                idx === 0 ? "bg-[#BC6C25]/10" : ""
              }`}
            >
              <td className="py-2 pr-4">{idx + 1}</td>
              <td className="py-2 pr-4">{p.name}</td>
              <td className="py-2 pr-4 text-right">{p.shots}</td>
              <td className="py-2 text-right">{p.wins}</td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td
                colSpan="4"
                className="py-4 text-center italic text-[#283618]/60"
              >
                No players found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

/* ───── Small helper card ───── */
const SummaryCard = ({ label, player, icon }) => (
  <div className="p-4 rounded-lg border border-[#BC6C25]/30 bg-white flex flex-col gap-1">
    <span className="text-xs font-medium text-[#283618]/60 flex items-center gap-1">
      {icon} {label}
    </span>
    <span className="text-lg font-semibold text-[#283618]">{player.name}</span>
    <span className="text-sm text-[#283618]/80">
      {label.includes("shots")
        ? `${player.shots} shots`
        : `${player.wins} wins`}
    </span>
  </div>
);
