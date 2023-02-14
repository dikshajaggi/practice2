import React from 'react'
import "../style.css"

const Card = (props) => {
    console.log(props)
    const { name, img, desc, size } = props
    return (
        // <div className='card'>
        //     <img className="pizzaImg" src={props.info.img} />
        //     <h4>{props.info.name}</h4>
        //     <h6>{props.info.desc}</h6>
        //     <h6>{props.info.size.join(" , ")}</h6>
        // </div>
        <div className='card'>
            <img className="pizzaImg" src={img} />
            <h4>{`${name} pizza`}</h4>
            <h6>{desc}</h6>
            <h6>{size.join(" , ")}</h6>
        </div>
    )
}

export default Card
