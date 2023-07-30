import React from 'react'
import '../index.css'

const Carousel = () => {
    return (
        <>
            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: false; animation: push" uk-slideshow="autoplay: true"   >

                <ul className="uk-slideshow-items">

                    <li>
                        <img src="https://wallpapercave.com/wp/uw9hpu5.jpg" alt="" uk-cover />
                    </li>
                    <li>
                        <img src="https://wallpapercave.com/wp/uw9hpu5.jpg" alt="" uk-cover />
                    </li>
                    <li>
                        <img src="https://wallpapercave.com/wp/uw9hpu5.jpg" alt="" uk-cover />
                    </li>
                </ul>

                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

            </div>
        </>
    )
}

export default Carousel
