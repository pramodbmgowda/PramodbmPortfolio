import { useRef } from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 6,
  },
  {
    label: "Years of experience",
    number: 0,
  },
];

const About = () => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // rewind to start
      audioRef.current.play();
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="mb-4 text-zinc-300 md:mb-8 md:text-xl md:max-w-[60ch]">
            Computer Science undergrad with hands-on experience in AI/ML, LLMs, NLP,
workflow automation, data structures, and prompt engineering. Adept at technical documentation
and Agile/Scrum methodologies. Seeking to deliver innovative agentic automation for enterprise
solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="font-semibold text-sky-400 md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            {/* Clickable Logo with Sound */}
            <img
              src="/images/logoo.png"
              alt="Logo"
              width={30}
              height={30}
              onClick={playSound}
              className="ml-auto cursor-pointer md:w-[40px] md:h-[40px]"
            />

            {/* Hidden audio element */}
            <audio ref={audioRef} src="/images/ReelAudio.mp3" preload="auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
