let product = document.getElementById("Products")
let about = document.getElementById("about")
let home = document.getElementById("home")
let main = document.getElementById("main")
let asession = document.getElementById("about-section")
let addvertsiment = document.getElementById("advertisment")
let offer = document.getElementById("offer")
let sign = document.getElementById("sign")
let time = document.getElementById("clock")
let signin = document.getElementById("signin")
let signup = document.getElementById("signup")
let button = document.getElementById("register")
function clocks(){
    let timedate = new Date;
    let hour = timedate.getHours().toString().padStart(2,"0");
    let minutes =timedate.getMinutes().toString().padStart(2,"0");
    let seconds = timedate.getSeconds() .toString().padStart(2,"0");
    strings = hour +":"+minutes+":"+seconds;
    time.textContent = strings;
}
let myinterval =  setInterval(clocks,1000);
about.addEventListener("click",function(){
    main.style.display ="none";
    asession.style.display ="block"
    time.style.display ="none"
    sign.style.display ="none"
    signup.style.display ="none"
})
home.addEventListener("click",function(){
      main.style.display ="block";
      asession.style.display ="none";
      addvertsiment.style.display ="block";
      time.style.display ="none"
      sign.style.display ="none"
      signup.style.display ="none"
})
product.addEventListener("click",function(){
     asession.style.display ="none";
    addvertsiment.style.display ="none";
    main.style.display ="block"
    time.style.display ="none" 
    sign.style.display ="none"
     signup.style.display ="none"
})
offer.addEventListener("click",function(){
     asession.style.display ="none";
      main.style.display ="none";
      time.style.display ="block"
      sign.style.display ="none"
       signup.style.display ="none"
})
signin.addEventListener("click",function(){
     asession.style.display ="none";
      main.style.display ="none";
      time.style.display ="none"
      sign.style.display ="block"
       signup.style.display ="none"
})
button.addEventListener("click",function(){
     asession.style.display ="none";
      main.style.display ="none";
      time.style.display ="none"
      sign.style.display ="none"
       signup.style.display ="block"
})

