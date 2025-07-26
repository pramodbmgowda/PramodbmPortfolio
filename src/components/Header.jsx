import { useRef, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-gradient-to-b from-zinc-900 to-transparent">
      <div className="relative flex items-center justify-between w-full h-full px-4 mx-auto max-w-screen-2xl md:px-6">
        {/* Left: Logo + Text + Car Icon */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/images/logoo.png"
              width={40}
              height={40}
              alt="PRAMOD B M Logo"
              className="object-contain"
            />
            <h1 className="text-2xl text-white md:text-2xl font-semibold">
              PRAMOD B M
            </h1>

            {/* 🚗 Car icon that plays MP3 on hover */}
            <img
              src="/images/rangerove.png"
              width={38}
              height={38}
              alt="Car Icon"
              className="object-contain cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </a>

          {/* 🔊 Hidden audio element */}
          <audio ref={audioRef} src="/images/horn2.wav" preload="auto" />
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" className="hidden md:inline-flex btn btn-secondary">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
