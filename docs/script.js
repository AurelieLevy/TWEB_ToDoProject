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

// https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

setLoginLink();

let code = findGetParameter("code");
alert("LE code à envoyer au serveur est :" + code);