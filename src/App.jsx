import RatedComponent from "./components/rated-component";

import AnneProfile from "./assets/image-anne.jpg";
import ColtonProfile from "./assets/image-colton.jpg";
import IreneProfile from "./assets/image-irene.jpg";

const App = () => {
  return (
    <>
      <div
        role="application"
        className="min-h-screen flex flex-col items-center font-[Spartan] py-[85px] px-[25px]"
      >
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-[2.1rem] tracking-tighter font-bold leading-[33px] text-[#501F50]">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[15px] mt-[19.2px] leading-[25px] tracking-tight">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>

          <div className="flex flex-col gap-7 w-full mt-[45px]">
            <RatedComponent title="Reviews" />
            <RatedComponent title="Report Guru" />
            <RatedComponent title="BestTech" />
          </div>
        </div>

        <div>
          <div>First Card</div>
          <div>Second Card</div>
          <div>Third Card</div>
        </div>
      </div>
      {/* <div className="w-[400px] h-[400px] bg-red-600 mx-auto mt-[100px] rounded-xl shadow-[-20px_20px_5px_0px_rgba(0,0,0,1)]"></div>

      <Icon className="w-[600px] h-[600px] mx-auto drop-shadow-[0px_70px_0px_rgba(0,0,0,0.2)]" /> */}
    </>
  );
};

export default App;
