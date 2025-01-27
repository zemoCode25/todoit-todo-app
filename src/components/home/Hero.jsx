import { Content } from "./hero_components/Content";
import { Headline } from "./hero_components/Headline";
import { Review } from "./hero_components/Review";
import { Templates } from "./hero_components/Templates";
import { CTA } from "./hero_components/CTA";
import { Footer } from "./hero_components/Footer";

export function Hero() {
  return (
    <div className="max-w-[1280px] mx-auto px-12 mt-24">
      <Headline />
      <Review />
      <Content />
      <Templates />
      <CTA />
      <Footer />
    </div>
  );
}
