import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="rounded-lg img-box w-9 h-9">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Pramod portrait"
                className="image-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              CSE @ DSATM
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch]] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10">
            Beyond code, I dream of entrepreneurship
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="https://drive.google.com/file/d/1SSok6oZs07DYBOhGQTpZJgrXGJAgmgbC/view?usp=drive_link"
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="pause-on-hover relative w-[400px] h-[500px] ml-auto">
            {/* Rotating conic gradient border */}
            <div className="absolute inset-0 z-0 p-[2px] rounded-[60px] spin-smooth bg-[conic-gradient(from_0deg,#38bdf8,#0f172a,#38bdf8)] shadow-[0_0_10px_#38bdf8]/20">
              <div className="w-full h-full rounded-[58px] bg-zinc-900"></div>
            </div>

            {/* Image Layer with background gradient and blend */}
            <figure className="absolute inset-0 z-10 rounded-[58px] overflow-hidden shadow-2xl">
              {/* Background gradient for soft splash */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white via-sky-100 to-sky-300 opacity-70 z-0"></div>

              {/* Blue overlay */}
              <div className="absolute inset-0 bg-sky-500 mix-blend-overlay opacity-10 z-10"></div>

              {/* Profile image */}
              <img
                src="/images/hero-baner.jpg"
                alt="PRAMOD B M"
                className="relative z-20 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
