import config from "@config/config.json";
import Base from "@layouts/Baseof";
import { humanize } from "@lib/utils/textConverter";
import Link from "next/link";

const Categories = ({ categories }) => {
  return (
    <Base title={"categories"}>
      <section className="section">
        <div className="container text-center">
          <ul className="space-x-4">
            {categories.map((category, i) => (
              <li key={`category-${i}`} className="inline-block">
                <Link href={`/categories/${category}`} passHref>
                  <a className="bg-theme-light rounded-lg px-4 py-2 text-dark transition hover:bg-primary hover:text-white">
                    &#8226; {category}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Base>
  );
};

export default Categories;

export const getStaticProps = () => {

  return {
    props: {
      categories: ['Men', 'Women','Children'],
    },
  };
};
