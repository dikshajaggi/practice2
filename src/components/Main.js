import React, { useEffect, useState } from 'react'
import Card from './Card'
import "../style.css"
import axios from "axios"
import Test from './ClassComp'

// const data = [
//     {
//         name: "Margherita",
//         desc: "Classic delight with 100% real mozzarella cheese",
//         size: ["small", "medium", "large"],
//         img: "https://images.dominos.co.in/new_margherita_2502.jpg"
//     },
//     {
//         name: "Indi Tandoori Paneer",
//         desc: "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo",
//         size: ["small", "medium", "large"],
//         img: "https://images.dominos.co.in/IndianTandooriPaneer.jpg"
//     },
//     {
//         name: "Mexican Green Wave",
//         desc: "Mexican herbs sprinkled on onion, capsicum, tomato & jalapeno",
//         size: ["small", "medium", "large"],
//         img: "https://images.dominos.co.in/new_mexican_green_wave.jpg"
//     },
//     {
//         name: "Veggie Paradise",
//         desc: "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
//         size: ["small", "medium", "large"],
//         img: "https://images.dominos.co.in/new_veggie_paradise.jpg"
//     },
//     {
//         name: "The Unthinkable Pizza",
//         desc: "Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza",
//         size: ["small", "medium", "large"],
//         img: "https://images.dominos.co.in/PIZ0167.jpg"
//     }
// ]


const Main = () => {
    //     const [pizzaData, setPizzaData] = useState(data)
    //     const [searchvalue, setSearchvalue] = useState("test")

    //     useEffect(() => {
    //         getRest()
    //     }, [searchvalue])

    //     async function getRest() {
    //         await axios.get("https://mocki.io/v1/c9e0fc9e-99d5-45e4-bde3-994ad8891b58").then((data) => console.log(data))
    //     }

    //     const searchpizza = (e) => {
    //         setSearchvalue(e.target.value)
    //         // console.log(data.filter((item) => item.name.includes(e.target.value)))
    //         // console.log(data.map((item) => item.name.includes(e.target.value)))
    //     }
    //     const search = () => {
    //         setPizzaData(pizzaData.filter((item) => item.name.toLowerCase().includes(searchvalue.toLowerCase())))
    //     }
    return (
        // <div className='main-wrapper'>
        //     <div className='search-wrapper'>
        //         <input type="search" className='search-box' placeholder='search' value={searchvalue} onChange={searchpizza} />
        //         <button onClick={search}>Search</button>
        //     </div>
        //     {/* <div className='card-wrapper'>
        //         {data.map((item) => {
        //             return < Card info={item} />
        //         })}
        //     </div> */}
        //     <div className='card-wrapper'>
        //         {pizzaData.map((item) => {
        //             return < Card {...item} />
        //         })}
        //     </div>
        // </div>
        <>
            <Test />
        </>
    )
}

export default Main
