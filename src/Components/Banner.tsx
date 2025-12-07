import { TbTruckDelivery } from "react-icons/tb";
import { SiFampay } from "react-icons/si";

const Banner = () => {
  return (
    <div className=" relative h-screen">
      <div className="parallax h-4/5 w-full">
        
        <div className="absolute  top-20 mx-4 md:mx-20">
          <h1 className=" md:text-6xl text-4xl  font-bold   ">
            <span className="md:text-[#a2f217] text-white">Organic Food </span>
            <h1 className="py-4 text-white ">Delivery Service</h1>
          </h1>
          <p className="text-md">
            Fresh and Healthy . <br />A delicious journey built on healthy
            choices and natural goodness .
          </p>
        </div>
      </div>
      <div className="md:flex bg-white shadow-2xl items-center rounded-xl  top-96 absolute mx-4 md:mx-20">
        <div className="p-12 flex items-center gap-6">
          <TbTruckDelivery size={40} color="green"></TbTruckDelivery>
          <div>
            <h1 className="text-2xl font-bold">Free delivery</h1>
          <p>
            Stay home and eat smart
            <br /> delicious & healthy meals with free delivery
          </p>
          </div>
        </div>
        <div className="bg-[#a2f217] flex items-center gap-6 p-12">
          <SiFampay size={40} color="white"></SiFampay>
          <div><h1 className="text-white font-bold text-2xl">Easy Payment</h1>
          <p>
            Pay easily, enjoy instantly. <br /> Simple, fast and secure payments
          </p></div>
        </div>
        <div className="bg-black p-12 md:rounded-r-xl rounded-b-xl flex items-center gap-6 text-white">
          <div>
          
            <img className="w-16" src="calculator.png" alt="" />
          </div>
          <div>
            
            <h1 className="font-bold text-white text-2xl">Exact calories</h1>
            <p>Know It, Eat It</p>
            <p>Track exact calories. 
                enjoy every bite.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
