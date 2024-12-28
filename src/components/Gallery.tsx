import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <section className="py-16 px-4 bg-[#1A1F2C]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#6E59A5]/10 border-[#8B5CF6]">
            <CardContent className="p-6">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://player.twitch.tv/?channel=ayv3e&parent=ayv3e.lvh.lol&autoplay=false"
                  frameBorder="0"
                  allowFullScreen={true}
                  scrolling="no"
                  className="w-full h-full"
                  title="AYV3E Twitch Channel"
                ></iframe>
              </AspectRatio>
            </CardContent>
          </Card>
          <Card className="bg-[#6E59A5]/10 border-[#8B5CF6]">
            <CardContent className="p-6">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://player.twitch.tv/?collection=1234567890&parent=ayv3e.lvh.lol&autoplay=false"
                  frameBorder="0"
                  allowFullScreen={true}
                  scrolling="no"
                  className="w-full h-full"
                  title="AYV3E Past Broadcasts"
                ></iframe>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
