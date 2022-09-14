import React from "react";
import { Carousel } from 'antd';
import './ImageView.css'

export default function ImageView(props) {

    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };

    let pictures = props.pictures;
    if (!pictures) {
      pictures = []
    }
    
    const imgList = pictures.map((src, idx) => {
      return (
        <div key={idx} className="imageView--container">
          <img className="imageView--img" key={idx} src={src}></img>
        </div>
      )
    })

    return (
        <div className="imageView">
    <Carousel afterChange={onChange}>
      {imgList}
    </Carousel>
        </div>
    )
}