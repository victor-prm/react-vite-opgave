import { useState } from 'react'
import { getCurrentPath } from "../helpers";
import { Link } from "react-router";


function Header(props) {
    const [count, setCount] = useState(0)
    const cname = props.cname;

    return (
        <>
            <header className={cname}>
                <nav className={`${cname}__nav`}>
                    {createLeftButton(cname)}
                    <div className={`${cname}__company-name__wrapper`}>
                        <h1 className={`${cname}__company-name`}>GoGoGadget</h1>
                    </div>
                    <div className={`${cname}__cart-btn__wrapper`}>
                        <button className={`${cname}__cart-btn`}><i className="fa fa-shopping-cart"></i></button>
                    </div>
                </nav>
            </header>
        </>
    )
}

function createLeftButton(_cname) {
    if (getCurrentPath() === "index") {
        return (
            <div className={`${_cname}__profile-pic__wrapper`}>
                <img className={`${_cname}__profile-pic`} src="https://picsum.photos/40/40" alt="" />
            </div>
        );
    } else {
        return (
            <div className={`${_cname}__back-button-wrapper`}>
                <Link to="/">
                    <button className={`${_cname}__back-button`}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                </Link>
            </div>
        );
    }
}

export default Header
