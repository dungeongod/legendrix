import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import { humanize } from "@lib/utils/textConverter";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <Base title={"categories"}>
     <Contact/>
    </Base>
  );
};

export default Categories;

export const getStaticProps = () => {

  return {
    props: {
      categories: ['Men', 'Women','Kids'],
    },
  };
};
