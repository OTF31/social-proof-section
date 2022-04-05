const Card = (props) => {
  return (
    <>
      <div className="bg-[#501F50]">
        <img src={props.img} />
        <p>{props.name}</p>
        <p>{props.subtitle}</p>
        <p>{props.opinion}</p>
      </div>
    </>
  );
};

export default Card;
