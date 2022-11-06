import Image from "next/image";
import { useEffect } from "react";

const Modal = ({ openModal, modalData, category }) => {
   
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    new Zoomist('#my-zoomist'),{
        maxRatio: 1,
        height: '60%',
        // if you need silder
        // if you need zoomer
        zoomer: true,
        draggable: true,
        pinchable: true,
        slider: {
            el: null,
            direction: 'vertical',
            maxRatio: 2
          },
        // event
    }

//   const zoomScreen = document.querySelector(".productImageImg");
//   let zoom = 1;
//   const zoomingSpeed = 0.1;

//   document.addEventListener("wheel", (e)=> {
//       if (e.deltaY > 0) {
//         console.log('out')
//         if(zoom <= 0.1) return;
//           zoomScreen.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
//         } else {
//             if(zoom <= 0.1) return;
//           zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;
//       }
//   }) 
    return (() => {
        document.body.style.overflow = ''
       
    })
},[])
  return (
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
      <div id="my-zoomist" data-zoomist-src={`/images/products/${category.toLowerCase()}/${modalData.image}`}></div>
        {/* <img
                src={`/images/products/${category.toLowerCase()}/${modalData.image}`}
                
                alt={'close'}
                className="productImageImg rounded-lg"
          /> */}
      </div>
    </div>
</div>
  );
};

export default Modal;
