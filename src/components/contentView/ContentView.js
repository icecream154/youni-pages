import React from "react";
import At from "./at/At";
import Label from "./label/Label";
import PublishInfo from "./publishInfo/PublishInfo";
import Author from "./author/Author";
import Content from "./content/Content";
import './ContentView.css'

export default function ContentView() {

    const authorAvatar = 'https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMzAxMzczNTE1XzBfMA==.png';
    const authorName = '澳洲袋鼠';
    const authorCollege = '墨尔本大学';
    const authorCert = true;

    const contentTitle = '家境一般，如何出国留学？这些小tips你需要知道';
    const contentParagraphs = ['出国留学对一个普通家庭来说是一笔很高昂的费用，不仅学费很贵，吃穿住行都需要花很多钱～', '我留学墨尔本，目前pr申请中，今天我想给大家分享几个可以“免费出国留学”的干货。'];

    const contentAts = ['留学大牛', 'Youni小助手', 'FDU&SJTU', '测试用户1', '测试用户2', '测试用户3', '测试用户4', '测试用户5'];
    const contentLabels = ['夏天来了','留学','留学奖金申请','SJTU','复旦迷惑行为大赏','五台山甄嬛传出家修行计划'];

    const contentPublishTime = '2021-10-03T15:44:05+08:00';
    const contentPublishCity = '北京';
    const contentPublishLocationDetail = '北京出入境管理局';

    const contentLikerAvatarList = ['https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTY1NTYyODQ2Ni41MTU1MTAyXzBfMA==.png','https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMzAwOTUxNjhfMF8w.png','https://xinlikj.oss-cn-shanghai.aliyuncs.com/MTYzMzA4NzA5ODEzXzBfMA==.png'];
    const contentTotalLikers = 486;

    return (
        <main className="contentView">
            <Author avatar={authorAvatar} name={authorName} college={authorCollege} cert={authorCert} />
            <Content title={contentTitle} paragraphs={contentParagraphs} />
            <At atList={contentAts} />
            <Label labelList={contentLabels}/>
            <PublishInfo publishTime={contentPublishTime} publishCity={contentPublishCity} publishLocationDetail={contentPublishLocationDetail}/>
        </main>
    )
}