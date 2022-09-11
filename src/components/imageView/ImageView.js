import React from "react";
import { Carousel } from 'antd';
import './ImageView.css'

export default function ImageView() {

    const imageSrc = [
      "https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMjk5NTc4MzNfMF8w.png",
      "https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMjk5NTc3OTNfMF8w.png",
      "https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMjk5NTc4MTNfMF8w.png",
      "https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMjk5NTc4MDNfMF8w.png",
      "https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMjk5NTc4MjNfMF8w.png"

    ];

    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };
    
    const imgList = imageSrc.map((src, idx) => {
      return (
        <div className="imageView--container">
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