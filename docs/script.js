function makerandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 30; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function setLoginLink() {
    let randString = makerandom();

    document.getElementById("loginLink")
        .setAttribute("href", "https://www.wunderlist.com/oauth/authorize?client_id=706ea3bc47cae388cb26&redirect_uri=" 
        + window.location.href + "&state=" + randString);
}

function getCodeFromUrl(url){
    urlObject = new URL(url);
    let code = urlObject.searchParams.get("code");
    console.log(code);
    return code;
}

setLoginLink();

let code = getCodeFromUrl(window.location.href);