import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-[#1A1F2C] text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#FEF7CD]">
          Thanks for stopping by, Portal Master! Ready to join the adventure?
        </h2>
        <Button
          className="bg-[#F97316] hover:bg-[#F97316]/80 animate-pulse"
          onClick={() => window.open("https://www.twitch.tv/ayv3e", "_blank")}
        >
          Join the Adventure!
        </Button>
      </div>
    </footer>
  );
};

export default Footer;