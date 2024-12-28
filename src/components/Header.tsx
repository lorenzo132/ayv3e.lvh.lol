import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="relative w-full min-h-[400px] bg-gradient-to-b from-[#9b87f5] to-[#7E69AB] flex flex-col items-center justify-center text-white p-8">
      <div className="absolute inset-0 bg-[url('/portal-bg.svg')] opacity-10 animate-spin-slow"></div>
      <Avatar className="w-32 h-32 mb-6 ring-4 ring-[#FEC6A1] hover:scale-105 transition-transform">
        <AvatarImage src="/lovable-uploads/26923e16-4cff-402b-83ae-0c0042de6a1a.png" alt="AYV3E" />
        <AvatarFallback>AYV3E</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-[#FEF7CD] drop-shadow-lg">
        Welcome to the Portal of Power!
      </h1>
    </div>
  );
};

export default Header;