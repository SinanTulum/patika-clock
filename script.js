let userName = prompt("Lütfen İsminizi Giriniz: ");
// Taking userName from User

let myName = document.querySelector("#myName");
// userName's write to document

if (userName.length > 0) {
    //Chacking the userName
    myName.innerHTML = `${userName}`;
}else{
    alert("Lütfen İsminizi Doğru Giriniz.")
    location.reload(); 
    // Refresh Web Site
}

// showTime Function is here because we need to show the time when the user entered
function showTime(){
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);

    document.querySelector("#myClock").innerHTML = `${h}: ${m}: ${s}  ${d}`;
    setTimeout(showTime, 1000);
}

showTime();

function checkTime(i){
    if(i<10){
        i = "0"+i
    }
    return i;
}

// Sinan Tulum \\