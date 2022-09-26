import React from "react";
import { Carousel } from 'antd';
import './activityImageView.css';

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
        <div key={idx} className="activityImageView--container">
          <img className="activityImageView--img" key={idx} src={src} alt=""></img>
        </div>
      )
    })

    return (
        <div className="activityImageView">
    <Carousel afterChange={onChange}>
      {imgList}
    </Carousel>
        </div>
    )
}