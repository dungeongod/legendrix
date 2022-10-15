import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage } from "@lib/contentParser";

const notFound = ({ data }) => {
  return (
    <Base>
    Not Found
    </Base>
  );
};

// get 404 page data
export const getStaticProps = async () => {
  const notFoundData =  getRegularPage();
  return {
    props: {
    },
  };
};

export default notFound;
