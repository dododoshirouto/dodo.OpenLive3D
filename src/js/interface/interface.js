// interface

function getSavedConfig(){
    return document.cookie;
}
function setSavedConfig(saveString){
    let date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000 - 1)); // 7日 - 1ms
    let expires = "expires=" + date.toUTCString();
    document.cookie = "config=" + saveString + "; " + expires + "; path=/";
}


function setLogAPI(saveString){
    try{
        let request = new XMLHttpRequest();
        request.open('POST', 'https://2bbb76lqd1.execute-api.us-east-1.amazonaws.com/dev/openlive3d_s3_put_log', false);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(saveString);
        request.onreadystatechange=function(){
            console.log(request);
        }
    }catch(err){
        console.log("API Call Error");
    }
}

function onKeyUpHook(f){
    document.addEventListener("keyup", f);
}
