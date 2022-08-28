import React from "react";
import pngGrid from "../imgs/info.png"

export default function Hero() {
    return (
        <div className="hero">
            <img src={pngGrid} className="hero--grid"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--intro"> Join Unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}