// import React from "react";
import { useEffect } from "react";

import img from "../../../public/images/img(1).jpg";
import img2 from "../../../public/images/img(2).jpg";
import img3 from "../../../public/images/img(3).jpg";
import img4 from "../../../public/images/img(4).jpg";
import img5 from "../../../public/images/img(5).jpg";
import img6 from "../../../public/images/img(6).jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

import "./main.scss";

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: "清水",
        location: "京都",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: "五稜郭",
        location: "北海道",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "東京駅",
        location: "東京",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: "みなとみらい",
        location: "横浜",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: "富士山",
        location: "山梨",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: "名古屋城",
        location: "名古屋",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    },

    // {
    //     id: 7,
    //     imgSrc: img7,
    //     destTitle: "Bora Bora",
    //     location: "New Zealand",
    //     grade: "CULTURAL RELAX",
    //     fees: "$700",
    //     description:
    //         "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    // },

    // {
    //     id: 8,
    //     imgSrc: img,
    //     destTitle: "Bora Bora",
    //     location: "New Zealand",
    //     grade: "CULTURAL RELAX",
    //     fees: "$700",
    //     description:
    //         "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    // },

    // {
    //     id: 9,
    //     imgSrc: img,
    //     destTitle: "Bora Bora",
    //     location: "New Zealand",
    //     grade: "CULTURAL RELAX",
    //     fees: "$700",
    //     description:
    //         "The epitome of romance, Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities. ",
    // },
];

export const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="main container section">
            <div data-aos="fade-right" className="secTitle">
                <h3 className="title">Most visited destinations</h3>
            </div>

            <div className="secContent grid">
                {Data.map(
                    ({
                        id,
                        imgSrc,
                        destTitle,
                        location,
                        grade,
                        fees,
                        description,
                    }) => {
                        return (
                            <div
                                key={id}
                                data-aos="fade-up"
                                className="singleDestination"
                            >
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>

                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small>+1</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DERAILS
                                        <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};
