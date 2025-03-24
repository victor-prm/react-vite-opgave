export function getCurrentPath(){
    let pathname = window.location.pathname
    if(pathname === "/")pathname = "index";
    return pathname
}