import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import useAvailable from "../hooks/useAvailable"
import { userContext } from '../Utils/UserContext'

const Specific = () => {
    const rest_id = useParams()
    const [info, setInfo] = useState({})
    console.log(rest_id, "params")

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${rest_id.id}&submitAction=ENTER`).then((item) => {
            console.log(item)
            setInfo(item.data.data.cards[0].card.card.info)
            // setPizzaData(data?.data?.data?.cards)
        })
    }

    const avail = useAvailable(info?.availability?.opened)
    const username = useContext(userContext)
    console.log(username, "username--")
    return (
        <>
            <header>
                <ul className='navbar'>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>HOME</li></Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>ABOUT</li></Link>
                </ul>
            </header>
            <div className='specific-card'>
                <h2 className='specifc-heading'>{info?.name}</h2>
                <h2>{`Cuisines: ${info?.cuisines}`}</h2>
                <h2>{`Area: ${info?.areaName}`}</h2>
                <h2>{`Avg. Rating: ${info?.avgRating}`}</h2>
                <h2>{`Availability: ${avail}`}</h2>

                {/* {otherInfo?.map(dish => (
                // dish.card?.card?.itemCards?.map(specific => console.log(specific.card.info.name, "title"))
                <h2 className='additional' > {dish?.card?.card?.title}</h2>
            ))} */}
            </div >
        </>

    )
}

export default Specific