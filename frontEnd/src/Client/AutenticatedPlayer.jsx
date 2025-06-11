import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { LogOut, Trophy, Gamepad2, User } from "lucide-react";
import { Menu, X } from "lucide-react";

export const AutenticatedPlayer = () => {
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);
  const [Hamburger, setHamburgerOpen] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);

    // Simulate 3-second smooth loading before signing out
    setTimeout(async () => {
      await supabase.auth.signOut();
      navigate("/");
    }, 3000); // 3 seconds
  };

  if (loggingOut) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#606C38] text-[#FEFAE0] text-xl font-semibold">
        <div className="animate-pulse">Logging out...</div>
      </div>
    );
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!Hamburger);
  };

  return (
    <div className="min-h-screen bg-[#283618]  flex flex-col sm:flex-row">
      {/* ==== Sidebar Navigation (Desktop) ==== */}
      <aside className="bg-[#FEFAE0] justify-between rounded-2xl m-[1rem]  hidden sm:flex sm:flex-col  sm:w-[13rem] pt-[5rem] p-[1rem]  ">
        <div className="flex flex-col items-center p-[0.2rem]">
          {/* Brand Name */}
          <Link className="text-[#BC6C25] text-2xl font-bold text-outline-283618">
            Lucky Pockets
          </Link>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-4 mt-8">
            <Link
              className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
              to="/Autenticated-Player/achievements"
            >
              Achievements
            </Link>
            <Link
              className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
              to="/Autenticated-Player/create-lobby"
            >
              Create Lobby
            </Link>
            <Link
              className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
              to="/Autenticated-Player/New-friends"
            >
              Add Friends
            </Link>
            <Link
              className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
              to="/Autenticated-Player/history"
            >
              History
            </Link>
          </nav>
        </div>

        {/* Logout Button (Bottom of Sidebar) */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-300 hover:text-red-500 transition-colors cursor-pointer "
          title="Log Out"
          aria-label="Log Out"
        >
          <LogOut size={20} />
          Log Out
        </button>
      </aside>

      {/* ==== Top Navigation (Mobile) ==== */}
      <header className="bg-[#FEFAE0] w-100% h-[4rem] m-[1rem] rounded-full flex justify-around items-center sticky top-2 z-50  sm:hidden">
        {/* Brand Name */}
        <Link className="text-[#BC6C25] text-2xl font-bold text-outline-283618">
          Lucky Pockets
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          className="md:hidden text-[#BC6C25] text-2xl relative w-8 h-8 cursor-pointer"
          onClick={toggleHamburger}
        >
          {/* Hamburger Icon */}
          <div
            className="absolute inset-0 transition-transform duration-300 ease-in-out transform"
            style={{
              transform: Hamburger ? "rotate(180deg)" : "rotate(0deg)",
              opacity: Hamburger ? 0 : 1,
            }}
          >
            <Menu size={32} />
          </div>

          {/* Close Icon */}
          <div
            className="absolute inset-0 transition-transform duration-300 ease-in-out transform"
            style={{
              transform: Hamburger ? "rotate(0deg)" : "rotate(-180deg)",
              opacity: Hamburger ? 1 : 0,
            }}
          >
            <X size={32} />
          </div>
        </button>

        {/* ==== Hamburger Menu (Mobile Only) ==== */}
        {Hamburger && (
          <div className="absolute top-[4.2rem] right-0 bg-[#FEFAE0] rounded-lg shadow-lg p-4 md:hidden">
            <nav className="flex flex-col gap-2">
              <Link
                className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
                to="/Autenticated-Player/achievements"
                onClick={() => setHamburgerOpen(false)}
              >
                Achievements
              </Link>
              <Link
                className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
                to="/Autenticated-Player/create-lobby"
                onClick={() => setHamburgerOpen(false)}
              >
                Create Lobby
              </Link>
              <Link
                className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110"
                to="/Autenticated-Player/New-friends"
                onClick={() => setHamburgerOpen(false)}
              >
                Add Friends
              </Link>
              <Link
                className="text-[#BC6C25] text-[1.2rem] hover:text-[#283618] transition-transform duration-300 ease-in-out hover:scale-110 "
                to="/Autenticated-Player/history"
                onClick={() => setHamburgerOpen(false)}
              >
                History
              </Link>
            </nav>

            {/* Logout Button in Mobile Menu */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-300 hover:text-red-500 transition-colors cursor-pointer mt-4"
              title="Log Out"
              aria-label="Log Out"
            >
              <LogOut size={20} />
              Log Out
            </button>
          </div>
        )}
      </header>

      <main className="m-[1rem]">
        <Outlet />
      </main>
    </div>
  );
};
