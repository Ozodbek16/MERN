import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className="container">
                <div className={classes.row}>
                    <div className={classes.logo}>
                        <Link to={"/"}>Linklarim</Link>
                    </div>
                    <div className={classes.signBox}>
                        <Link className={classes.in} to={"/sign-in"}>Sign-in</Link>
                        <Link className={classes.up} to={"/sign-up"}>Sign-up</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav