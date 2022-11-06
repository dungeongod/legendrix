import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { IoLogoWhatsapp, IoMailOpenOutline } from "react-icons/io5";

const Contact = ({ data }) => {

  return (
    <section className="section">
      <div className="container max-w-[700px]">
        {markdownify('Contact Us', "h1", "h2 mb-8 text-center")}
        <div className="contactWrapper">
<a target={"_blank"} href="https://wa.me/+919811547837"><IoLogoWhatsapp/>
          &nbsp;  +919811547837</a>
          <a href="mailto:Shekhar.chakravarty@gmail.com"><IoMailOpenOutline/>
          &nbsp;  Shekhar.chakravarty@gmail.com.com</a>
        </div>
        {/* <form className="contact-form">
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="name">
              Name
            </label>
            <input
              className="form-input w-full"
              name="name"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="form-input w-full"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="subject">
              Subject
            </label>
            <input
              className="form-input w-full"
              name="subject"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block" htmlFor="message">
              Message
            </label>
            <textarea className="form-textarea w-full" rows="7" />
          </div>
          <button className="btn btn-outline-primary">Submit Now</button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
