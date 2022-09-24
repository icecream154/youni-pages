import React from "react";
import { Carousel } from 'antd';
import './ImageView.css';

export default function ImageView(props) {

    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };

    let pictures = props.pictures;
    if (!pictures) {
      pictures = []
    }

    // let containerStyle = {
    //   'padding-bottom': '0'
    // };

    // if (pictures.length > 0) {
    //   reactImageSize(pictures[0])
    //   .then(({ width, height }) => showSize(width, height))
    //   .catch((errorMessage) => console.log(errorMessage));
    // }

    // function showSize(width, height) {
    //   console.log(width + ' : ' + height);
    //   console.log("inner width: " + window.innerWidth);
    //   let calHeight = height / width * window.innerWidth;
    //   console.log(calHeight);
    //   containerStyle['padding-bottom'] = calHeight + 'px';
    // }
    
    const imgList = pictures.map((src, idx) => {
      return (
        <div key={idx} className="imageView--container">
          <img className="imageView--img" key={idx} src={src} alt=""></img>
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