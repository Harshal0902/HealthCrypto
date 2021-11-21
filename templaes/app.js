// get the url 
var url = window.location.href;
//getting the access token from url 
var access_token = url.split("#")[1].split("=")[1].split("&")[0]; 
// get the userid 
var userId = url.split("#")[1].split("=")[2].split("&")[0]; 
console.log(access_token); 
console.log(userId);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.fitbit.com/1/user/' + userId + '/activities/heart/date/today/1w.json');
xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(xhr.responseText)
    }
};
xhr.send()