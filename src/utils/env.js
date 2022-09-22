export default function getEnv() {
    if (
        navigator.userAgent.match(/Mobi/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i)
    ) {
        return "mobile";
    }
    return "pc";
}

export function isIOS() {
    return navigator.userAgent.match(/iPhone/i);
}

export function isAndroid() {
    return navigator.userAgent.match(/Android/i);
}