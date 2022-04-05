const Card = (props) => {
  return (
    <>
      <div className="bg-[#501F50] rounded-lg flex flex-col pl-[30px] pr-[33.5px] pt-[43px] pb-[33px]">
        <div className="flex gap-[25px]">
          <img
            src={props.img}
            alt="Profile"
            className="block rounded-full w-[40px] h-[40px]"
          />
          <div>
            <p className="text-white font-bold text-[0.85rem]">{props.name}</p>
            <p className="text-[#EE67A4] text-[0.80rem]">{props.subtitle}</p>
          </div>
        </div>

        <p className="text-[#F7F2F7] text-[0.85rem] font-[500] mt-[28px] tracking-tighter leading-[21.5px]">
          &#8220;{props.opinion}&#8221;
        </p>
      </div>
    </>
  );
};

export default Card;
