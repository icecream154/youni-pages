import getEnv, { isAndroid, isIOS } from "./env";

export function openApp(pageType, pageInfo) {
    if (!pageType || !pageInfo) {
        return
    }

    let hrefStr = "";
    switch (pageType) {
        case "content":
            let contentId = pageInfo["content_id"];
            if (!contentId) {
                return
            }
            if (isAndroid()) {
                hrefStr = "contentscheme://com.xinli.younishare/contentDetail?id=" + contentId
            } else if (isIOS()) {
                hrefStr = "https://static.theyouni.com/appForward/content/" + window.btoa("" + contentId)
            }
            break;
        case "person":
            let accId = pageInfo["acc_id"];
            let accType = pageInfo["acc_type"];
            let relatedId = pageInfo["related_id"];
            if (accId === undefined || accType === undefined|| relatedId === undefined) {
                return
            }
            if (isAndroid()) {
                hrefStr = "infoscheme://com.xinli.younishare/othersInfo?" +
                "id=" + accId + "&account_type=" +accType + "&related_id=" + relatedId
            } else if (isIOS()) {
                hrefStr = "https://static.theyouni.com/appForward/person/" +
                 window.btoa("" + accId + "#" + accType + "#" + relatedId)
            }
            break;
        case "activity":
            let activityId = pageInfo["activity_id"];
            if (!activityId) {
                return
            }
            if (isAndroid()) {
                hrefStr = "activityscheme://com.xinli.younishare/acDetail?id=" + activityId
            } else if (isIOS()) {
                hrefStr = "https://static.theyouni.com/appForward/activity/" + window.btoa("" + activityId)
            }
            break;
        default:
            return
    }

    if (getEnv() === "pc") {
        hrefStr = "https://www.theyouni.com/"
    }

    alert(hrefStr);
    window.location.href = hrefStr;
}