import { MoveDown } from "lucide-react";

export const CTA = () => {
  return (
    <div className="mt-[10rem]  m-[2rem] p-2 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#FEFAE0] text-center text-outline-BC6C25 ">
        Draw your fate, take your aim, win the game.
      </h1>
      <br />
      <p className="text-[#FEFAE0] text-lg text-center max-w-[600px]  ">
        Real billiards, random numbers, live tracking. Invite friends and
        compete in style.
      </p>

      <button
        className="bg-[#BC6C25] text-[#FEFAE0] py-2 px-4 rounded-md cursor-pointer
             hover:bg-[#FEFAE0] hover:text-[#606C38]
             transition-all duration-300 ease-in-out
             transform hover:scale-105 mt-10"
      >
        Start the Game
      </button>

      {/* <div className=" mt-4  text-[#FEFAE0]">
        <MoveDown />
      </div> */}
    </div>
  );
};
