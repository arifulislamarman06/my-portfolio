
//see-more project code
let showButton = document.querySelector(".showButton");
showButton.addEventListener("click", function (){
   let show = document.querySelectorAll(".show");
   for (let i = 0; i < show.length; i++){
       show[i].classList.replace("d-none", "d-block");
   };
   showButton.style.display = "none";
});

// lightMode code 
let white = document.getElementById("white");
let lightMode = white.addEventListener("click", function(){
    const body = document.querySelector("body");
    let navLink = document.querySelectorAll('#black-color');
    for(let i = 0; i < navLink.length; i++){
        navLink[i].style.color = "black";
    }
    const resumeColorNav = document.querySelector(".color").style.color = "white";
    const img = document.getElementById("img").src="images/arman-dark.png";
    body.style.backgroundColor = "white";
    const typeJs = document.querySelector(".text").style.color = "black";
    // let lang = document.querySelectorAll(".languages");
    // for(let i = 0; i < lang.length; i++){
    //     lang[i].style.border = "1px solid red";
    // }
    let borderCss = document.querySelectorAll(".border-color");
    for(let i = 0; i < borderCss.length; i++){
        borderCss[i].style.border = "1.5px solid black";
    }
    let cardInner = document.querySelectorAll(".card-inner");
    for(let i = 0; i < cardInner.length; i++){
        cardInner[i].style.border = "1px solid red";
    }
    let cardBody = document.querySelectorAll(".card-body");
    for(let i = 0; i < cardBody.length; i++){
        cardBody[i].style.background = "white";
    }

    const y = document.querySelectorAll(".new");
        for (let i = 0; i < y.length; i++) {
            y[i].addEventListener("mouseenter", function() {
            y[i].style.color = "white";
            })
            y[i].addEventListener("mouseleave", function() {
            y[i].style.color = "black";
        })
    }

    // const navColorHover = document.querySelectorAll(".lightModeColor");
    // for (let i = 0; i < navColorHover.length; i++) {
    //     navColorHover[i].addEventListener("mouseenter", function() {
    //         navColorHover[i].style.color = "black";
    //     })
    // }

});

//dark-mode-code
let black = document.getElementById("black");
let darkMode = black.addEventListener("click", function(){
    const body = document.querySelector("body");
    let navLink = document.querySelectorAll('#black-color');
    for(let i = 0; i < navLink.length; i++){
        navLink[i].style.color = "white";
    }
    const img = document.getElementById("img").src="images/arman-white.png";
    body.style.backgroundColor = "black";
    const typeJs = document.querySelector(".text").style.color = "white";
    // let lang = document.querySelectorAll(".languages");
    // for(let i = 0; i < lang.length; i++){
    //     lang[i].style.border = "1px solid white";
    // }
    let borderCss = document.querySelectorAll(".border-color");
    for(let i = 0; i < borderCss.length; i++){
        borderCss[i].style.border = "1.5px solid white";
    }
    let cardInner = document.querySelectorAll(".card-inner");
    for(let i = 0; i < cardInner.length; i++){
        cardInner[i].style.border = "1px solid red";
    }
    let cardBody = document.querySelectorAll(".card-body");
    for(let i = 0; i < cardBody.length; i++){
        cardBody[i].style.background = "black";
    };

    const y = document.querySelectorAll(".new");
    for (let i = 0; i < y.length; i++) {
        y[i].addEventListener("mouseenter", function() {
            y[i].style.color = "white";
        })

        y[i].addEventListener("mouseleave", function() {
            y[i].style.color = "white";
        })
    }

})   




//junk-files
//  if(darkMode = true){
//     let j = document.querySelectorAll(".old");
//     for (let i = 0; i < j.length; i++) {
//         j[i].addEventListener("mouseleave", function() {
//             j[i].style.color = "white";
//         })
        
//     }
//  }


// if (darkMode = true) {
//     function changeColor(element) {
//       element.style.color = "white";
//     }function removeColor(element) {
//         element.style.color = "white";
//     }
// } 
