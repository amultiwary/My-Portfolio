
/*========================================== toggle icon navbar =====================================*/


let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*========================================== scroll section active link =====================================*/


let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+ ']').classList.add('active');
            });
        };
    });


/*========================================== sticky navbar =====================================*/

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

/*========================================== remove toggle icon and navbar =====================================*/


    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*========================================== scroll reveal =====================================*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.bothcontainers,.project-box,.contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

/*========================================== typed js =====================================*/
  const typed=new Typed('.multiple-text',{
    strings:['Fullstack Developer','Problem Solver'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
  });



function showmore(){
    var moretext=document.getElementById("more-text");
    var btn=document.getElementById("read-more-btn");
    console.log("amul");
    moretext.style.display="block";
    btn.style.display="none";
}


/*=========================================== professional skills  =====================================*/
const radialBars = document.querySelectorAll(".radial-bar");

radialBars.forEach((bar) => {
  const percentageEl = bar.querySelector(".percentage");
  const circle = bar.querySelector(".path");
  const percentText = percentageEl.innerText.trim(); // e.g., "90%"
  const percent = parseInt(percentText.replace("%", "")); // e.g., 90
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`; // initial hidden

  // Animate with timeout for smoother transition
  setTimeout(() => {
    circle.style.strokeDashoffset = `${offset}`;
  }, 300);
});

/*=========================================== Normal functions  =====================================*/

function bmicalculator() {
    window.open("https://amultiwary.github.io/BMI-calculator/", "_blank");
  }

  function moviehubgpt() {
    window.open("https://moviehubgpt.firebaseapp.com", "_blank");
  }

  function tictactoe() {
    window.open("https://amultiwary.github.io/Tic-Tac-Toe/", "_blank");
  }
  
  function amazonclone() {
    window.open("https://amultiwary.github.io/Amazon-Clone/", "_blank");
  }