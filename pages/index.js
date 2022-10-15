import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import { humanize, markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <Base title={"Legendrix home"}>
      <section className="section">
      <div className="container">
        {markdownify('About us', "h1", "h2 mb-8 text-center")}
        <div className="aboutUs">
        {`Legendrix is a sports brand managed by elite professionals with over 15 years of experience, now storming into sports.
    The brand is bound to soar high in a short span of time as the experienced bunch has got exceptional creative minds that will result in innovative and futuristic products at very cost effective prices.\n
    We believe in ethical business and our focus is to provide the product of the best quality and of the latest trend and style to our customers.`}
        </div>

        </div>

      </section>
    </Base>
  );
};

export default Categories;

export const getStaticProps = () => {

  return {
    props: {
     
    },
  };
};
