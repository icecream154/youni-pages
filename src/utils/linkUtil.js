const devEnv = "dev";
const testEnv = "test";
const prodEnv = "prod";

let currentEnv = prodEnv;

export function setServerEnv(env) {
    if (env !== devEnv && env !== testEnv && env !== prodEnv) {
        return false;
    }
    currentEnv = env;
    return true;
}

export function getServerEnv() {
    return currentEnv;
}

/*
    根据服务端环境获取api基准地址
*/
export function getServerBaseUrl(env, serverName) {
    if (env === devEnv) {
        let localBase = "http://localhost";
        if (serverName === "acc") {
            localBase += ":20201/";
        } else if (serverName === "sys") {
            localBase += ":20202/";
        } else if (serverName === "activity") {
            localBase += ":20203/";
        } else if (serverName === "content") {
            localBase += ":20205/"
        }
        return localBase;

    } else if (env === testEnv) {
        return "http://120.55.170.127/"
    } else if (env === prodEnv) {
        return "http://39.100.120.238/"
    }
    return ""
}

/*
    内容链接原始数据格式：内容id + “@” + 环境参数("dev"/"test"/"prod")
*/
export function decodeContentUrl(identification) {
    let data = window.atob(identification);
    let atIndex = data.indexOf('@');
    if (atIndex === -1 || atIndex === 0 || atIndex === identification.length - 1) {
        return [false, 0, "unkown"];
    }

    let idStr = data.substring(0, atIndex);
    let env = data.substring(atIndex + 1, identification.length);

    if (env !== devEnv && env !== testEnv && env !== prodEnv) {
        return [false, 0, "unkown"];
    }

    return [true, parseInt(idStr, 10), env];
}

export function encodeContentUrl(contentId, env) {
    if (env !== devEnv && env !== testEnv && env !== prodEnv) {
        return [false, ""];
    }
    return window.btoa(contentId + "@" + env);
}

/*
    用户链接原始数据格式：accId + "#" + accType + "#" + relatedId + “@” + 环境参数("dev"/"test"/"prod")
*/
export function decodePersonUrl(identification) {
    let data = window.atob(identification);
    let atIndex = data.indexOf('@');
    if (atIndex === -1 || atIndex === 0 || atIndex === identification.length - 1) {
        return [false, 0, 0, 0, "unkown"];
    }

    let idStr = data.substring(0, atIndex);
    let env = data.substring(atIndex + 1, identification.length);

    if (env !== devEnv && env !== testEnv && env !== prodEnv) {
        return [false, 0, 0, 0, "unkown"];
    }

    let sharpIndex = idStr.indexOf('#');
    if (sharpIndex === -1 || sharpIndex === 0 || atIndex === idStr.length - 1) {
        return [false, 0, 0, 0, "unkown"];
    }
    let accId = parseInt(idStr.substring(0, sharpIndex), 10);
    idStr = idStr.substring(sharpIndex + 1, idStr.length);

    sharpIndex = idStr.indexOf('#');
    if (sharpIndex === -1 || sharpIndex === 0 || atIndex === idStr.length - 1) {
        return [false, 0, 0, 0, "unkown"];
    }
    let accType = parseInt(idStr.substring(0, sharpIndex), 10);
    let relatedId = parseInt(idStr.substring(sharpIndex + 1, idStr.length), 10);

    return [true, accId, accType, relatedId, env];
}

export function encodePersonUrl(accId, accType, relatedId, env) {
    if (env !== devEnv && env !== testEnv && env !== prodEnv) {
        return [false, ""];
    }
    return window.btoa(accId + "#" + accType + "#" + relatedId + "@" + env);
}

/*
    活动链接原始数据格式：活动id + “@” + 环境参数("dev"/"test"/"prod")
*/
export function decodeActivityUrl(identification) {
    let data = window.atob(identification);
    let atIndex = data.indexOf('@');
    if (atIndex === -1 || atIndex === 0 || atIndex === identification.length - 1) {
        return [false, 0, "unkown"];
    }

    let idStr = data.substring(0, atIndex);
    let env = data.substring(atIndex + 1, identification.length);

    if (env !== devEnv && env !== testEnv && env !== prodEnv) {
        return [false, 0, "unkown"];
    }

    return [true, parseInt(idStr, 10), env];
}

export function encodeActivityUrl(activityId, env) {
    if (env !== devEnv && env !== testEnv && env !== prodEnv) {
        return [false, ""];
    }
    return window.btoa(activityId + "@" + env);
}

export function jumpToContentPage(contentId) {
    window.location.href = "/share/content/" + encodeContentUrl(contentId, getServerEnv());
}

export function jumpToPersonalPage(accId, accType, relatedId) {
    window.location.href = "/share/person/" + encodePersonUrl(accId, accType, relatedId, getServerEnv());
}

export function jumpToActivityPage(activityId) {
    window.location.href = "/share/activity/" + encodeActivityUrl(activityId, getServerEnv());
}

console.log(encodePersonUrl(3,2,3,"prod"))
console.log(encodeContentUrl(18,"prod"))