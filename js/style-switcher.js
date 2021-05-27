//-------------------------------------togglee style switcher-------------------------------------
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click" , () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


// hide style on scrool

window.addEventListener("scroll" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//--------------------------theme color--------------------
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    localStorage.setItem("color",color);
    changeColor();
}

function changeColor()
{
    alternateStyles.forEach((style) => {
    if(localStorage.getItem("color") === style.getAttribute("title")){
        style.removeAttribute("disabled");
    }
    else
    {
        style.setAttribute("disabled", "true");
    }
    })  
}

if(localStorage.getItem("color") !== null)
{
    changeColor();
}


//--------------------------theme light n dark --------------------------


const dayNight = document.querySelector(".day-night");
const logoChange = document.querySelector(".logo");

          

console.log(logoChange);
dayNight.addEventListener("click" , () =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
        localStorage.setItem("theme" , "dark");
    }
    else
    {
        localStorage.setItem("theme" , "light");
    }
    updateIcon();
 })


 function themeMode()
 {
    if(localStorage.getItem("theme") !== null)
    {
        if(localStorage.getItem("theme") === "light")
        {
            document.body.classList.remove("dark");
        }
        else
        {
            document.body.classList.add("dark");
        }
    }
    updateIcon();
 }
 themeMode();

 function updateIcon()
 {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
        logoChange.querySelector("a").classList.add("active"); 
    }
    else
    {   
        logoChange.querySelector("a").classList.remove("active");
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
 }
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("i").classList.add("fa-sun");
//         logoChange.querySelector("a").classList.add("active");   
//     }
//     else
//     {
//         dayNight.querySelector("i").classList.add("fa-moon");
//         logoChange.querySelector("a").classList.remove("active");  
        
//     }
// })


