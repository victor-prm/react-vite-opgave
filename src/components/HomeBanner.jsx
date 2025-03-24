import { useState } from 'react'
import { getCurrentPath } from "../helpers";
import earbuds from "../assets/earbuds.jpg"


function HomeBanner(props) {
    const [count, setCount] = useState(0)
    const cname = props.cname;

    return (
        <>
            <section className={cname}>
                <hgroup className={`${cname}__hgroup`}>
                    <h2 className={`${cname}__welcome-text`}>Welcome Tina!</h2>
                    <button className={`${cname}__search-btn`}><i className="fa fa-search"></i></button>
                </hgroup>
                <div className={`${cname}__ad`}>
                    <img className={`${cname}__ad-bg`} src={earbuds} alt=""/>
                        <div className={`${cname}__ad-text`}>
                            <p className={`${cname}__ad-title`}>Get your favourite Gadgets cheaper than before</p>
                            <small className={`${cname}__ad-subtitle`}>15% Off on your first purchase</small>
                            <em className={`${cname}__ad-code`}>Use code: IOU2025</em>
                        </div>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
