import Rated from "./components/rated";
import Card from "./components/card";

import AnneProfile from "./assets/image-anne.jpg";
import ColtonProfile from "./assets/image-colton.jpg";
import IreneProfile from "./assets/image-irene.jpg";

import BgPatternTopDesktop from "./assets/bg-pattern-top-desktop.svg";
import BgPatternBottomDesktop from "./assets/bg-pattern-bottom-desktop.svg";
import BgPatternTopMobile from "./assets/bg-pattern-top-mobile.svg";
import BgPatternBottomMobile from "./assets/bg-pattern-bottom-mobile.svg";

const App = () => {
  const buyers = [
    {
      img: ColtonProfile,
      name: "Colton Smith",
      subtitle: "Verified Buyer",
      opinion:
        " We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ",
    },
    {
      img: IreneProfile,
      name: "Irene Roberts",
      subtitle: "Verified Buyer",
      opinion:
        " Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    },
    {
      img: AnneProfile,
      name: "Anne Wallace",
      subtitle: "Verified Buyer",
      opinion:
        " Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ",
    },
  ];

  return (
    <>
      <div
        role="application"
        className="min-h-screen flex flex-col items-center justify-center font-[Spartan] py-[85px] px-[25px] lg:pl-[165px] min-w-[375px] lg:min-w-[1440px]"
      >
        <img
          src={BgPatternTopMobile}
          alt="Background pattern top"
          className="fixed left-0 top-0 -z-10 lg:hidden"
        />
        <img
          src={BgPatternBottomMobile}
          alt="Background pattern bottom"
          className="fixed right-0 bottom-0 -z-10 lg:hidden"
        />

        <img
          src={BgPatternTopDesktop}
          alt="Background pattern top"
          className="fixed left-0 top-0 -z-10 hidden lg:block"
        />
        <img
          src={BgPatternBottomDesktop}
          alt="Background pattern bottom"
          className="fixed right-0 bottom-0 -z-10 hidden lg:block"
        />

        <div className="flex flex-col items-center lg:flex-row">
          <div className="text-center lg:text-left lg:mt-[40px] w-[330px] lg:w-[700px]">
            <h1 className="text-[2.1rem] tracking-tighter font-bold leading-[33px] lg:leading-[51px] text-[#501F50] lg:text-[3rem] lg:tracking-[-0.1rem] lg:pr-[70px]">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[15px] mt-[19.2px] leading-[25px] tracking-tight text-[#937B91] font-[500] lg:pr-[10px] lg:mt-[10px]">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>

          <div className="flex flex-col gap-7 w-full mt-[45px] lg:mt-[40px] lg:pr-[0px] lg:gap-[12px] lg:pl-[3px] items-center">
            <Rated title="Reviews" _style="lg:pr-[90px] lg:ml-[-110px]" />
            <Rated
              title="Report Guru"
              _style="lg:ml-[50px] lg:pr-[70px] lg:ml-[-10px]"
            />
            <Rated title="BestTech" _style="lg:ml-[95px] lg:pr-[100px]" />
          </div>
        </div>

        <div className="mt-[50px] flex flex-col gap-[16px] lg:flex-row lg:pr-[140px] lg:gap-[40px] lg:mt-[70px]">
          <Card
            img={buyers[0].img}
            name={buyers[0].name}
            subtitle={buyers[0].subtitle}
            opinion={buyers[0].opinion}
            _style="lg:h-[235px]"
          />
          <Card
            img={buyers[1].img}
            name={buyers[1].name}
            subtitle={buyers[1].subtitle}
            opinion={buyers[1].opinion}
            _style="lg:mt-[17px] lg:h-[235px]"
          />
          <Card
            img={buyers[2].img}
            name={buyers[2].name}
            subtitle={buyers[2].subtitle}
            opinion={buyers[2].opinion}
            _style="lg:mt-[33px] lg:h-[235px]"
          />
        </div>
      </div>
    </>
  );
};

export default App;
