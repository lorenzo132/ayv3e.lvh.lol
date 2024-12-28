import { Card, CardContent } from "@/components/ui/card";
import { Gem, Flame, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#1A1F2C]">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-[#6E59A5]/10 border-[#8B5CF6] backdrop-blur-sm">
          <CardContent className="p-6 text-white">
            <p className="text-lg mb-8 leading-relaxed">
              Hi, I'm AYV3E! I'm a Twitch streamer with a passion for gaming, Skylanders, and, of course, worstenbroodjes. 
              When I'm not exploring virtual worlds, I'm probably snacking on my favorite Dutch treat or diving into the lore 
              of my favorite Skylanders characters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FunFact icon={<Gem />} text="Loves Skylanders and collects them" />
              <FunFact icon={<Flame />} text="Favorite snack: worstenbroodjes" />
              <FunFact icon={<Star />} text="Streams a mix of games but has a soft spot for nostalgic titles" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const FunFact = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-3 p-4 bg-[#7E69AB]/20 rounded-lg hover:bg-[#7E69AB]/30 transition-colors">
    <div className="text-[#FEC6A1]">{icon}</div>
    <p className="text-sm">{text}</p>
  </div>
);

export default AboutSection;