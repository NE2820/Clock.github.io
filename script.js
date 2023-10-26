//Get References to DOM elements
const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
miniteHand = document.querySelector(".minite"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
     body.classList.toggle("dark");
     const isDarkMode = body.classList.contains("dark");
     console.log(isDarkMode);
     modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
     localStorage.setItem("mode", isDarkMode ? "Light Mode" : "Dark Mode");
});

const updateTime = () => {
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12) * 360;
    
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    miniteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};
//call updateTime to set closk hands every second
setInterval(updateTime, 1000);

updateTime();