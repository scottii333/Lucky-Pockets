import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient.js";
import { useEffect, useState } from "react";
import { MoveDown } from "lucide-react";

export const CTA = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Check if user is authenticated on component mount
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setCheckingAuth(false);
    };

    getUser();
  }, []);

  const handleStartGame = async () => {
    setButtonLoading(true); // show loading state on click

    if (!user) {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${import.meta.env.VITE_SITE_URL}/Autenticated-Player`,
        },
      });
      if (error) {
        console.error("Google sign-in failed:", error.message);
        setButtonLoading(false);
      }
    } else {
      // Simulate a short delay (optional UX)
      setTimeout(() => {
        navigate("/Autenticated-Player");
      }, 500);
    }
  };

  return (
    <div className="mt-[10rem] m-[2rem] p-2 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#FEFAE0] text-center text-outline-BC6C25">
        Draw your fate, take your aim, win the game.
      </h1>
      <br />
      <p className="text-[#FEFAE0] text-lg text-center max-w-[600px]">
        Real billiards, random numbers, live tracking. Invite friends and
        compete in style.
      </p>

      <button
        onClick={handleStartGame}
        disabled={buttonLoading || checkingAuth}
        className={`mt-10 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out transform ${
          buttonLoading || checkingAuth
            ? "bg-[#A5A58D] text-[#FEFAE0] cursor-not-allowed"
            : "bg-[#BC6C25] text-[#FEFAE0] hover:bg-[#FEFAE0] hover:text-[#606C38] hover:scale-105"
        }`}
      >
        {checkingAuth || buttonLoading ? "Loading..." : "Start the Game"}
      </button>

      {/* Optional: Animated down arrow */}
      {/* <div className="mt-4 text-[#FEFAE0] animate-bounce">
        <MoveDown />
      </div> */}
    </div>
  );
};
