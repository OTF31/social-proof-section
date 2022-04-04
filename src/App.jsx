import { ReactComponent as Icon } from "./assets/illustration-woman-online-mobile.svg";

const App = () => {
  return (
    <>
      <div
        role="application"
        className="min-h-screen flex flex-col items-center"
      >
        <div className="flex flex-col">
          <div className="text-center">
            <h1>10,000+ of our users love our products.</h1>
            <p>
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>

          <div>
            <div>Rated 1</div>
            <div>Rated 2</div>
            <div>Rated 3</div>
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
