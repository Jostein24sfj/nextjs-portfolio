export default function Projects() {
  return (
    <>
      <div>
        <h2 className="flex justify-center p-20 pt-40 text-3xl">
          Some of my projects
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-22 md:gap-42 text-2xl">
        <div className="flex flex-col border rounded-xl overflow-hidden bg-zinc-900 opacity-90">
          <a
            className="flex justify-center font-medium text-2xl cursor-pointer hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            href="https://gym-tracker-sooty.vercel.app/">
            Gym Tracker
          </a>
          <img src="/gymTracker.png" alt="En gym nettside" className="h-34" />
        </div>
        <div className="flex flex-col border rounded-xl overflow-hidden bg-zinc-900 opacity-90">
          <a
            className="flex justify-center font-medium text-2xl cursor-pointer hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwind-first-test-project.vercel.app/">
            Headlight on scroll
          </a>
          <img
            src="/headlightOnScroll.png"
            alt="En nettside der lysene på bilen skrur seg på når man scroller"
            className="h-34"
          />
        </div>
        <div className="flex flex-col border rounded-xl overflow-hidden bg-zinc-900 opacity-90">
          <a
            className="flex justify-center font-medium text-2xl cursor-pointer hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
            href="https://rpg-boardgame.vercel.app/">
            RPG Boardgame{" "}
          </a>
          <img
            src="/rpgBoardgame.png"
            alt="En nettside med ett rpg brettspill"
            className="h-34"
          />
        </div>
      </div>
    </>
  );
}
