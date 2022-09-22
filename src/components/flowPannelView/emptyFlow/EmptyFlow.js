import React from "react";
import emptyPublishImg from "../../../assets/empty/empty_mine_publish@3x.png";
import emptyCollectImg from "../../../assets/empty/empty_mine_collect@3x.png";
import closeCollectImg from "../../../assets/empty/empty_mine_collect@3x.png";
import emptyActivityImg from "../../../assets/empty/empty_activity_activity@3x.png";
import './EmptyFlow.css'

export default function EmptyFlow(props) {

    let emptyType = props.emptyType;
    if (!emptyType) emptyType = "publish";

    function getEmptyImg(emptyType) {
        switch (emptyType) {
            case "publish": return emptyPublishImg;
            case "collect": return emptyCollectImg;
            case "closeCollect": return closeCollectImg;
            case "activity": return emptyActivityImg;
        }
        return emptyPublishImg;
    }

    function getEmptyHintText(emptyType) {
        switch (emptyType) {
            case "publish": return ["暂无内容", "作者还在努力构思中～"];
            case "collect": return ["作者还没有收藏~"];
            case "closeCollect": return ["作者未公开收藏~"];
            case "activity": return ["暂无活动", "作者还在努力构思中～"];
        }
        return emptyPublishImg;
    }

    return (
        <div className="emptyFlow">
            <img className="emptyFlow--img" alt="" src={getEmptyImg(emptyType)}></img>
            {getEmptyHintText(emptyType).map((obj, idx) => {
                return (
                    <div className="emptyFlow--hint_text_container">
                        <span key={idx} className="emptyFlow--hint_text">{obj}</span>
                    </div>
                )
            })}
        </div>
    )
}