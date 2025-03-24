import { useState } from 'react'
import { getCurrentPath } from "../helpers";


function Footer(props) {
    const [count, setCount] = useState(0)
    const cname = props.cname;

    return (
        <>
            <footer className={cname}>
                <nav className={`${cname}__nav`}>
                    <ul className={`${cname}__link-list`}>
                        <li className={`${cname}__link-item`}>
                            <a href="#" className={`${cname}__link`}><i className="fa fa-heart"></i></a>
                        </li>
                        <li className={`${cname}__link-item`}>
                            <a href="#" className={`${cname}__link`}><i className="fas fa-home"></i></a>
                        </li>
                        <li className={`${cname}__link-item`}>
                            <a href="#" className={`${cname}__link`}><i className="fas fa-bell"></i></a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer
