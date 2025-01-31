import { Content } from "./hero_components/Content";
import { Headline } from "./hero_components/Headline";
import { Review } from "./hero_components/Review";
import { Templates } from "./hero_components/Templates";
import { CTA } from "./hero_components/CTA";
import { Footer } from "./hero_components/Footer";
import PropTypes from "prop-types";

export function Hero({ directTodo }) {
  return (
    <div className="mx-auto mt-24 max-w-[1280px] px-12">
      <Headline directTodo={directTodo} />
      <Review />
      <Content />
      <Templates />
      <CTA directTodo={directTodo} />
      <Footer />
    </div>
  );
}

Hero.propTypes = {
  directTodo: PropTypes.func.isRequired,
};
