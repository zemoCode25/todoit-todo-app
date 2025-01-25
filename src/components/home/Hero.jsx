import { Content } from "./hero_components/Content";
import { Headline } from "./hero_components/Headline";

export function Hero() {
  return (
    <div className="max-w-[1280px] mx-auto px-12 mt-24 pb-64">
      <Headline />
      <Content />
    </div>
  );
}
