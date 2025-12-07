import { FiClock } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";

const Article = () => {
  return (
    <div>
      <div
        className="md:flex gap-20 md:m-20 md:text-left text-center mx-4 mt-110 
        items-center "
      >
        <img
          className="md:w-1/3 shadow-2xl  rounded-xl"
          src="portrait-woman-enjoying-breakfast.jpg"
          alt=""
        />

        <div>
          <h1
            className="md:text-6xl  text-4xl my-2

           font-bold"
          >
            Healthy and tasty foods with <br />
            <span className="text-[#a2f217]">natural ingredients</span>
          </h1>
          <p className="font-light">
            Enjoy fresh, naturally prepared meals crafted to give you both great
            taste and real nutrition. Our food is made with care, using clean
            ingredients to support a healthier lifestyle. Experience balanced
            flavors, gentle seasoning, and wholesome recipes designed to make
            every bite enjoyable.
          </p>

          <div className="md:mx-0 mx-16">
            <div className="flex items-center  gap-3 my-3">
              <FiClock size={36} color="green"></FiClock>{" "}
              <p>Open Every Day : 8:00 AM – 12:00 PM</p>
            </div>
            <div className="flex items-center gap-3">
              <TbPhoneCall color="green" size={36}></TbPhoneCall>{" "}
              <p>01906053223</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
