import Button from "../components/Button";
import LightRays from "../components/LightRays";
import PillNav from "../components/PillNav";
import ShinyText from "../components/ShinyText";
import ChevronDown from "../components/ChevronDown";

const Home = () => {
  return (
    <div className="relative h-screen w-full font-sans dark:bg-background text-foreground ">
      {/* background animation  */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#22C55E"
        raysSpeed={1.3}
        lightSpread={0.9}
        rayLength={1.1}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0.2}
        distortion={0.05}
        className="custom-rays"
      />

      {/* nav  */}
      <div className="w-full flex items-center justify-center z-[999]">
        <PillNav
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#fafafa"
          hoveredPillTextColor="#fafafa"
          pillTextColor="#0A0A0A"
        />
      </div>

      {/* background texts  */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col text-center">
        {/* bg not clickable button  */}
        <div>
          <button className="border-1 border-zinc-200/20 bg-zinc-400/10 py-1 px-3 rounded-full mb-3 transition-transform duration-300 ease-in-out">
            <ShinyText
              text="AI Powered Recipe Generator"
              disabled={false}
              speed={3}
              className="custom-class shiny-text text-xs capitalize md:text-sm lg:text-sm"
            />
          </button>
        </div>

        {/* bg texts  */}
        <div className="flex-wrap">
          <ShinyText
            text="Find Your Recipe"
            disabled={false}
            speed={4}
            className="custom-class shiny-text text-2xl capitalize font-bold tracking-tight md:text-8xl lg:text-8xl"
          />
          <ShinyText
            text="With Single Click"
            disabled={false}
            speed={4}
            className="custom-class shiny-text text-2xl capitalize font-bold tracking-tight  md:text-8xl lg:text-8xl"
          />
        </div>

        {/* buttons  */}
        <div className="flex items-center justify-center mt-4 gap-2 flex-col md:flex-row lg:flex-row md:gap-4 lg:gap-4">
          <Button
            text={"Get Started"}
            bgColor={"#fafafa"}
            textColor={"#0a0a0a"}
            opacity={1}
          />
          <button className="border-1 border-zinc-200/20 bg-zinc-400/10 py-2 px-4 rounded-full transition-transform duration-300 ease-in-out cursor-pointer hover:opacity-80 md:py-4 md:px-8 lg:py-4 lg:px-8">
            <ShinyText
              text="Learn More"
              disabled={false}
              speed={3}
              className="custom-class shiny-text text-lg capitalize md:text-2xl lg:text-2xl"
            />
          </button>
        </div>

        <div className="arrow">
          <button className="border-1 border-zinc-200/20 bg-zinc-400/10 py-3 px-1 rounded-full transition-transform duration-300 ease-in-out cursor-pointer hover:opacity-80">
            <ChevronDown className="text-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
