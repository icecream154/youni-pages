import React from "react";
import defaultPersonalAvatar from "../../../assets/defaultPersonalAvatar@3x.png";
import './AvatarBlock.css'

export default function AvatarBlock(props) {

    return (
        <div className="avatarBlock">
            <img
                className="avatarBlock--avatar_img"
                alt=""
                src={props.avatarUrl === "" ? defaultPersonalAvatar : props.avatarUrl}>
            </img>
            <div className="avatarBlock--data_container">
                <div className="avatarBlock--data_item">
                    <div className="avatarBlock--data_item_number_container">
                        <span className="avatarBlock--data_item_number">{props.focusedCount}</span>
                    </div>
                    <div className="avatarBlock--data_item_desc_container">
                        <span className="avatarBlock--data_item_desc">粉丝</span>
                    </div>
                </div>
                <div className="avatarBlock--data_item">
                    <div className="avatarBlock--data_item_number_container">
                        <span className="avatarBlock--data_item_number">{props.focusCount}</span>
                    </div>
                    <div className="avatarBlock--data_item_desc_container">
                        <span className="avatarBlock--data_item_desc">关注</span>
                    </div>
                </div>
                <div className="avatarBlock--data_item">
                    <div className="avatarBlock--data_item_number_container">
                        <span className="avatarBlock--data_item_number">{props.influence}</span>
                    </div>
                    <div className="avatarBlock--data_item_desc_container">
                        <span className="avatarBlock--data_item_desc">影响力</span>
                    </div>
                </div>
            </div>
        </div>
    )
}