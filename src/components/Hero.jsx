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

        <div className="pause-on-hover relative w-[280px] h-[350px] mx-auto">
          {/* Rotating border */}
          <div className="absolute inset-0 z-0 p-[1.5px] rounded-[30px] spin-smooth bg-[conic-gradient(from_0deg,theme(colors.sky.500),theme(colors.black),theme(colors.sky.500))]">
            <div className="w-full h-full rounded-[28px] bg-zinc-900"></div>
          </div>

          {/* Image */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-[28px]">
            <img
              src="/images/hero-baner.jpg"
              alt="Rotating"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
