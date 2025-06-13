import { useState } from "react";
import { UserPlus, Search, Check, Clock } from "lucide-react";

// Mock data for demo (replace with real API/Supabase results)
const suggestions = [
  { id: "u1", name: "Ace", status: "none" },
  { id: "u2", name: "Blaze", status: "pending" },
  { id: "u3", name: "Clutch", status: "added" },
  { id: "u4", name: "Dart", status: "none" },
];

export const AddFriend = () => {
  const [query, setQuery] = useState("");
  const [requests, setRequests] = useState(suggestions);

  const handleAdd = (id) => {
    setRequests((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, status: "pending" } : user
      )
    );
  };

  const filtered = requests.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-[#FEFAE0] min-h-screen rounded-2xl m-4 p-6 flex flex-col gap-6">
      {/* ─── Header ─── */}
      <h1 className="text-3xl font-bold text-[#283618]">Add Friends</h1>

      {/* ─── Search Box ─── */}
      <div className="relative w-full sm:w-96">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#BC6C25]"
        />
        <input
          type="text"
          placeholder="Search users…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-full border border-[#BC6C25]/40 focus:border-[#BC6C25] outline-none bg-transparent text-[#283618] placeholder:text-[#BC6C25]/60"
        />
      </div>

      {/* ─── Results ─── */}
      <ul className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <li className="text-[#283618]/60 italic">No users found.</li>
        ) : (
          filtered.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#BC6C25]/30 bg-white"
            >
              <span className="text-[#283618] font-medium">{user.name}</span>
              {user.status === "none" && (
                <button
                  onClick={() => handleAdd(user.id)}
                  className="flex items-center gap-1 text-sm text-[#BC6C25] font-semibold hover:scale-105 transition-transform"
                >
                  <UserPlus size={16} /> Add
                </button>
              )}
              {user.status === "pending" && (
                <span className="flex items-center gap-1 text-sm text-yellow-600">
                  <Clock size={16} /> Pending
                </span>
              )}
              {user.status === "added" && (
                <span className="flex items-center gap-1 text-sm text-green-600">
                  <Check size={16} /> Added
                </span>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
