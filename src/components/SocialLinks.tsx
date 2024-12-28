import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "Twitch", url: "https://www.twitch.tv/ayv3e", color: "#9b87f5" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCLwhaHlGnBNt1_DlWdHb34A", color: "#F97316" },
  { name: "Instagram", url: "https://www.instagram.com/ilovechromebook/", color: "#D946EF" },
  { name: "TikTok", url: "https://www.tiktok.com/@ayv3e", color: "#0EA5E9" },
  { name: "Discord", url: "https://discord.gg/KvnVu5Mw6t", color: "#8B5CF6" }
];

const SocialLinks = () => {
  return (
    <section className="py-16 px-4 bg-[#1A1F2C]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className="w-full hover:scale-105 transition-transform"
                style={{ backgroundColor: link.color }}
              >
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;