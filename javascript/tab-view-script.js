const sidebar = document.querySelector(".side-nav-bar .side-nav-container");
console.log(sidebar);

const leftContainer = document.querySelector(".left-container");

// sidebar.style.width = "100px";
sidebar.addEventListener("mouseover", ()=>{
    // console.log("success");

    if(window.innerWidth > 700 && window.innerWidth < 949)leftContainer.style.display = "block";
})

sidebar.addEventListener("mouseout", ()=>{
   
    if(window.innerWidth > 700 && window.innerWidth < 949)leftContainer.style.display = "none";
});
