import React, { useState } from 'react'
import Card from './Card'
import "../style.css"

const data = [
    {
        name: "Margherita",
        desc: "Classic delight with 100% real mozzarella cheese",
        size: ["small", "medium", "large"],
        img: "https://images.dominos.co.in/new_margherita_2502.jpg"
    },
    {
        name: "Indi Tandoori Paneer",
        desc: "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo",
        size: ["small", "medium", "large"],
        img: "https://images.dominos.co.in/IndianTandooriPaneer.jpg"
    },
    {
        name: "Mexican Green Wave",
        desc: "Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
        size: ["small", "medium", "large"],
        img: "https://images.dominos.co.in/new_mexican_green_wave.jpg"
    },
    {
        name: "Veggie Paradise",
        desc: "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
        size: ["small", "medium", "large"],
        img: "https://images.dominos.co.in/new_veggie_paradise.jpg"
    },
    {
        name: "The Unthinkable Pizza",
        desc: "Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza",
        size: ["small", "medium", "large"],
        img: "https://images.dominos.co.in/PIZ0167.jpg"
    }
]

const Main = () => {
    const [searchvalue, setSearchvalue] = useState("test")
    const searchpizza = (e) => {
        setSearchvalue(e.target.value)
        console.log(data.filter((item) => item.name.includes(e.target.value)))
        console.log(data.map((item) => item.name.includes(e.target.value)))
    }
    return (
        <div className='main-wrapper'>
            <div className='search-wrapper'>
                <input type="search" className='search-box' placeholder='search' value={searchvalue} onChange={searchpizza} />
                <button>Search</button>
            </div>
            {/* <div className='card-wrapper'>
                {data.map((item) => {
                    return < Card info={item} />
                })}
            </div> */}
            <div className='card-wrapper'>
                {data.map((item) => {
                    return < Card {...item} />
                })}
            </div>
        </div>
    )
}

export default Main
