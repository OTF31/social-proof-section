import { ReactComponent as StarIcon } from "../assets/icon-star.svg";

const RatedComponent = (props) => {
  return (
    <>
      <div className="bg-[#F7F2F7] p-[10px] rounded-lg font-bold flex flex-col gap-[13px]">
        <div className="flex gap-2 justify-center">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <p className="text-center text-[12.5px] text-[#501F50]">
          Rated 5 Stars in {props.title}
        </p>
      </div>
    </>
  );
};

export default RatedComponent;
