import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style.css"
import { userContext } from '../Utils/UserContext'

const About = () => {
    const username = useContext(userContext)
    console.log(username, "username--")

    const username1 = useContext(userContext)
    console.log(username1.user, "username--")
    const [loginValue, setLoginValue] = useState('I love you')
    const ChangeLoginValue = (e) => {
        setLoginValue(e.target.value)
    }
    const login = () => {
        console.log(username1.user, loginValue, "check")
        username1.setUser(loginValue)
        if (loginValue === "") username1.setUser(username1.user)
    }

    return (
        <div className='about'>
            <header>
                <ul className='navbar'>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>HOME</li></Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>ABOUT</li></Link>
                </ul>
                <div className='user'>
                    <div className='search-wrapper'>
                        <input type="search" className='search-box' placeholder='search' value={loginValue} onChange={ChangeLoginValue} />
                        <button onClick={login}>Login</button>
                    </div>
                    <h3> {`Hello ${username1.user}`}</h3>
                </div>
            </header>
            <h4>About us</h4>
            <div className='about-desc'>
                Ipsum qui non non incididunt. Mollit sunt exercitation in laboris cupidatat do sint officia. Est anim nostrud veniam qui ipsum id enim adipisicing.

                Amet laboris dolor voluptate ad ut labore aliqua Lorem nulla cupidatat ad dolore anim dolor. Consectetur deserunt deserunt exercitation reprehenderit in quis quis duis ea ex adipisicing officia. Laboris quis non culpa ut anim ut deserunt tempor do sint consectetur esse elit. Consectetur elit quis veniam irure aliquip cillum ipsum aliquip culpa nisi pariatur dolore. Excepteur aliquip voluptate amet quis esse nisi aliqua sint amet labore.

                Reprehenderit aliquip veniam voluptate exercitation duis laborum. Adipisicing esse enim nulla voluptate velit non elit. Ea consequat velit mollit laborum velit qui velit eu aliquip irure aliquip. Cupidatat magna in aliqua cillum.

                Laborum nisi ex id enim incididunt fugiat occaecat proident ut est ullamco id. Est eu officia excepteur consectetur. Est elit ex Lorem adipisicing deserunt nostrud incididunt. Non tempor commodo culpa qui est ut culpa consequat proident minim. Nulla nulla ea veniam pariatur ipsum amet eu nulla id consectetur.
            </div>
        </div>
    )
}

export default About
