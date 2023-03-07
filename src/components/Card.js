import React from 'react'
import "../style.css"

const Card = (props) => {
    const { name, cloudinaryImageId, desc, size } = props
    return (
        // <div className='card'>
        //     <img className="pizzaImg" src={props.info.img} />
        //     <h4>{props.info.name}</h4>
        //     <h6>{props.info.desc}</h6>
        //     <h6>{props.info.size.join(" , ")}</h6>
        // </div>
        <div className='card'>
            <img className="pizzaImg" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` + cloudinaryImageId} />
            <h4>{`${name} pizza`}</h4>
            {/* <h6>{desc}</h6>
            <h6>{size.join(" , ")}</h6> */}
        </div>
    )
}

export default Card
