import { useState } from "react";
import { ArrowUp, ArrowDown, Play } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

/**
 * Props (all optional)
 * ────────────────────
 * initialPlayers  Array<{ id, name }>   starting order (max 6)
 * initialCards    number                starting cards-per-player (1–6, default 5)
 * isHost          boolean               enables editing if true (default true)
 */
export const Lobby = ({
  initialPlayers = [
    { id: "u1", name: "Ace" },
    { id: "u2", name: "Blaze" },
    { id: "u3", name: "Clutch" },
  ],
  initialCards = 5,
  isHost = true,
}) => {
  const MAX_PLAYERS = 6;
  const MAX_CARDS = 6; // ← NEW constant (upper limit)

  /* ─── State ─── */
  const [players, setPlayers] = useState(initialPlayers);
  const [cards, setCards] = useState(
    Math.min(Math.max(initialCards, 1), MAX_CARDS)
  );

  /* ─── Helpers ─── */
  const lobbyURL = window.location.href;
  const canStart = players.length >= 2;

  /** swap two players by index */
  const swap = (i, j) => {
    setPlayers((prev) => {
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };

  /* Pad to 6 seats for consistent UI */
  const seats = [
    ...players,
    ...Array.from({ length: MAX_PLAYERS - players.length }),
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#283618] p-4">
      <section className="w-full max-w-md bg-[#FEFAE0] rounded-2xl shadow-xl p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-[#283618]">Lobby</h1>

        {/* Cards per player – editable number input, max 6 */}
        <label className="flex items-center gap-3 text-sm font-medium text-[#283618]">
          Cards per player:
          {isHost ? (
            <input
              type="number"
              min="1"
              max={MAX_CARDS} /* ← max = 6 */
              value={cards}
              onChange={(e) =>
                setCards(
                  Math.min(Math.max(Number(e.target.value || 1), 1), MAX_CARDS)
                )
              }
              className="w-16 px-2 py-1 rounded-md border border-[#BC6C25]/40 focus:border-[#BC6C25] bg-transparent text-center"
            />
          ) : (
            <span className="text-[#BC6C25]">{cards}</span>
          )}
        </label>

        {/* Break / shoot order list (unchanged) */}
        <ol className="flex flex-col gap-3">
          {seats.map((p, idx) =>
            p ? (
              <li
                key={p.id}
                className={`flex items-center px-4 py-2 rounded-lg border ${
                  idx === 0
                    ? "border-[#BC6C25] bg-[#BC6C25]/10"
                    : "border-[#BC6C25]/30"
                }`}
              >
                <span className="font-semibold text-[#283618] w-5">
                  {idx + 1}.
                </span>
                <span className="flex-1 ml-3 text-[#283618]">{p.name}</span>
                {idx === 0 && (
                  <span className="text-xs font-medium text-[#BC6C25] mr-3">
                    Breaks&nbsp;first
                  </span>
                )}
                {isHost && (
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => swap(idx, idx - 1)}
                      disabled={idx === 0}
                      className="disabled:opacity-30"
                      title="Move up"
                    >
                      <ArrowUp size={16} />
                    </button>
                    <button
                      onClick={() => swap(idx, idx + 1)}
                      disabled={idx === players.length - 1}
                      className="disabled:opacity-30"
                      title="Move down"
                    >
                      <ArrowDown size={16} />
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li
                key={`empty-${idx}`}
                className="px-4 py-2 rounded-lg border border-dashed border-[#BC6C25]/30 text-[#283618]/40 italic flex items-center"
              >
                <span className="w-5">{idx + 1}.</span>&nbsp;(empty)
              </li>
            )
          )}
        </ol>

        {/* Start button */}
        <button
          onClick={() =>
            alert(
              `Starting game with ${players.length} players, ${cards} cards each!`
            )
          }
          disabled={!canStart}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#283618] text-[#FEFAE0] font-semibold hover:scale-105 active:scale-95 transition-transform disabled:opacity-40"
        >
          <Play size={18} /> Start game
        </button>

        {/* QR code */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="text-sm text-[#283618] font-medium">Share lobby:</p>
          <QRCodeSVG
            value={lobbyURL}
            size={128}
            fgColor="#283618"
            bgColor="#FEFAE0"
            level="H"
          />
        </div>
      </section>
    </div>
  );
};
