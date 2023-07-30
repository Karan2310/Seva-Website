import React from 'react'

const ServicesCard = () => {

    const cards = [
        {
            img: "./assets/test.jpg",
            title: "Card 1",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            img: "./assets/test.jpg",
            title: "Card 1",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            img: "./assets/test.jpg",
            title: "Card 1",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            img: "./assets/test.jpg",
            title: "Card 1",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            img: "./assets/test.jpg",
            title: "Card 1",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            img: "./assets/test.jpg",
            title: "Card 1",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
    ]

    return (
        <>
            <div className="pro-con container-fluid py-4 px-2 px-md-4 bg-light">
                <h1 className="text-center">Our Services</h1>
                <div className="row px-4 px-lg-5 mt-4 mt-md-0">

                    {cards.map((e) => {
                        const { img, title, des } = e;
                        return (
                            <div className="col-lg-4 col-md-6 pro-cards">
                                <div class="uk-card uk-card-hover uk-card-default my-4 mx-md-2 m-lg-5">
                                    <div class="uk-card-media-top">
                                        <img src={img} alt="" />
                                    </div>
                                    <div class="uk-card-body">
                                        <h3 class="uk-card-title">{title}</h3>
                                        <p>{des}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>

        </>
    )
}

export default ServicesCard
