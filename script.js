document.getElementsByTagName("h1")[0].style.fontSize = "3vw";
document.getElementsByTagName("h2")[0].style.fontSize = "2vw";

const domain = window.location.origin;

function redirect(path) {
    const url = domain + path;
    console.log( url );
    //window.location.href = url;  // open in existing window
    window.open( url, '_blank' );  // open in new window
}