import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import testimonialData from '@json/testimonials.json'
const Testimonials = ({ }) => {
  // destructuring items from config object

  return (
    <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
       
    >
        {
          testimonialData.map((testimonial) => 
            <div id={testimonial.id}>
              <img src={`/images/testimonial/${testimonial.image}`} />
              <div className="myCarousel">
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.position}</h4>
                <p>
                 {testimonial.data}
                </p>
              </div>
            </div>  
          )
        }
      </Carousel>
  );
};

export default Testimonials;
