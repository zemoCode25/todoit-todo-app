import { Content } from "./hero_components/Content";
import { Headline } from "./hero_components/Headline";
import { Review } from "./hero_components/Review";
import { Templates } from "./hero_components/Templates";
import { CTA } from "./hero_components/CTA";

export function Hero() {
  return (
    <div className="max-w-[1280px] mx-auto px-12 mt-24 pb-64">
      <Headline />
      <Review />
      <Content />
      <Templates />
      <CTA />
    </div>
  );
}
