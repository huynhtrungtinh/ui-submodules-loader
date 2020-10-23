function b64DecodeUnicode(str:string):string {
    return decodeURIComponent(atob(str).split('').map((c)=>{
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
function b64EncodeUnicode(str:string):string {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(("0x" + p1) as any);
        }));
}
export {
    b64DecodeUnicode,
    b64EncodeUnicode
}