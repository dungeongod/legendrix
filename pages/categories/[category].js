import Base from "@layouts/Baseof";
import Image from "next/image";
import product from '@json/product.json'
import { useEffect, useState } from "react";
import Link from "next/link";
// category page
const Category = ({ category,categories }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModaldata] = useState();
  const openModal = (data) => {
    if(modalOpen){
      setModalOpen(false);
      setModaldata();
    }
    else {
      setModalOpen(true);
      setModaldata(data);
    }
  }
  useEffect(() => {

  },[])
  return (
    <Base title={category}>
      <div className="section">
        <div className="container text-center">
        <ul className="space-x-4 mb-8">
            {categories.map((cat, i) => (
              <li key={`category-${i}`} className="inline-block">
                <Link href={`/categories/${cat}`} passHref>
                  <a className={`sub-category bg-theme-light rounded-lg px-4 py-2 text-dark transition hover:bg-primary hover:text-white ${cat == category && 'selected'}`}>
                    &#8226; {cat}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="h2 mb-8 text-center">
            Showing posts from <span className="sub-cat text-primary ">{category}</span>{" "}
            category
          </div>
          <div className="productsContainer">
            {product[category]?.map((data) => (
              <div key={data.id} className="productContainer" onClick={() => openModal(data)}>
                <div className="title">
                  {data.title}
                </div>
                <div className="image">
                  <Image
                    src={`/images/products/${category.toLowerCase()}/${data.image}`}
                    width={250}
                    height={250}
                    alt={data.title}
                    className="rounded-lg"
                  />
                </div>
              </div>
            )
              
            )}
          </div>
        </div>
        {modalOpen && 
        <div className="modalWrapper">
            <div className="modalContainer">
              <div className="detail">
                <div className="modalTitle">
                    {modalData.title}
                  </div>
                <div className="close" onClick={() => openModal()}>
                  <Image
                        src={`/images/cross.svg`}
                        width={18}
                        height={18}
                        alt={'close'}
                        className="rounded-lg"
                  />
                </div>
              </div>
              <div className="productImage">
                <img
                        src={`/images/products/${category.toLowerCase()}/${modalData.image}`}
                        
                        alt={'close'}
                        className="rounded-lg"
                  />
              </div>
            </div>
        </div>
         
        }
      </div>
    </Base>
  );
};

export default Category;

// category page routes
export const getStaticPaths = () => {
  const allCategories =['Men', 'Women','Kids'];

  const paths = allCategories.map((category) => ({
    params: {
      category: category,
    },
  }));

  return { paths, fallback: false };
};

// category page data
export const getStaticProps = ({ params }) => {
 
  return {
    props: {  category: params.category,
      categories: ['Men', 'Women','Kids'] },
  };
};
