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
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = days[today.getDay()];
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    document.querySelector('#myClock').innerHTML = `${hours}: ${minutes}: ${seconds} ${day}`;
    setTimeout(showTime,1000);
}

showTime();

function checkTime(i) {
    if(i<10){
        i = "0"+i
    }
    return i;
}

// Sinan Tulum \\
