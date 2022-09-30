import React from "react";
import { Carousel } from 'antd';
import './ActivityImageView.css';

export default function ActivityImageView(props) {

    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };

    let pictures = props.pictures;
    if (!pictures) {
      pictures = []
    }

    function getActivityPictures() {
      if (activity) return activity["photos"];
      return [];
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