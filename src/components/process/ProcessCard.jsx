const ProcessCard = (props) => {
  return (
    // <div className="space-y-2">
    //       <p>{props.data.para}</p>

    //   <h3 className="font-semibold text-lg">{props.data.title}</h3>
    //   <p className="text-gray-600 text-sm leading-relaxed">{props.data.desc}</p>
    // </div>

    <div className='mb-20 w-[38%] md:w-[42%] '>
        <h3 className='py-5 text-xl lg:text-2xl font-medium' >{props.data.title}</h3>
        <p className='text-gray-600'>{props.data.desc}</p>
    </div>
  );
};

export default ProcessCard;
