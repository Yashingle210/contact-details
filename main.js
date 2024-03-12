
function insertValue(){
    console.log("Function called");
    fname = document.getElementById("fname");
    var fnameValue = fname.value;
    lname = document.getElementById("lname");
    var lnameValue = lname.value;
    pnumber = document.getElementById("pnumber");
    var pnumberValue = pnumber.value;
    email = document.getElementById("email");
    var emailValue = email.value;
    console.log(fnameValue,lnameValue, pnumberValue, emailValue);
    var personDetails = [fnameValue, lnameValue, pnumberValue, emailValue];
    localStorage.setItem(fnameValue, personDetails);
}

function getValue(){
    var keys = Object.keys(localStorage);
    let cContainer = document.getElementById("c_container");
    for(var i=0; i<keys.length; i++){
        cContainer.innerHTML += `<p><a id="style" href='details.html?key=${keys[i]}'>${keys[i]}</a></p>`;
    }
}
function showDetails()
{
    param = new URLSearchParams(document.location.search);
    key=param.get("key");
    contactdetails=localStorage.getItem(key);
    var arr = contactdetails.split(",");
    document.getElementById("fullName").innerHTML = arr[0]+" "+arr[1];
    document.getElementById("phoneNo").innerHTML = arr[2];
    document.getElementById("email").innerHTML = arr[3];
}

function deleteDetails()
{
    param = new URLSearchParams(document.location.search);
    key=param.get("key");
    contactdetails=localStorage.getItem(key);
    var arr = contactdetails.split(",");
    localStorage.removeItem(arr[0]);
}