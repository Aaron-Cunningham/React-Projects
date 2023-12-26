import { FaStar } from "react-icons/fa";


export default function AddCard(props){
  let badgeText

  if(props.openSpots === 0){
    badgeText = "Sold out"
  }else if(props.country === "Online"){
    badgeText = "Online"
  }
  else{
    badgeText = null;
  }

    return(
      <div className='card'>
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.img} alt='holiday' className='card--img'/>
        <div className='card-stats'>
          <FaStar color='orange'/>  
          <span>{props.stats.rating}</span>
          <span>{"("+props.stats.reviews+")"} • </span>
          <span> {props.location} </span>
        </div>
        <p>{props.text}</p>
        <p><span className='bold'>From ${props.price}  pp</span></p>
    </div>
    );
  }