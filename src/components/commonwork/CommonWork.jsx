const CommonWork=(props)=>{
    return(
        <>
        <div>
            <h2>{props.data.id}</h2>
            <img src={props.data.img} alt="work"></img>
            <h3>{props.data.title}</h3>
            <p>{props.data.text}</p>
        </div>
        
        </>
    )

}
export default CommonWork;