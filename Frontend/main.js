
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

  function CineMind() {
    window.open("https://cine-mind-tau.vercel.app", "_blank");
  }

  function tictactoe() {
    window.open("https://amultiwary.github.io/Tic-Tac-Toe/", "_blank");
  }
  
  function amazonclone() {
    window.open("https://amultiwary.github.io/Amazon-Clone/", "_blank");
  }

  function Cravery() {
    window.open("https://cravery-eight.vercel.app", "_blank");
  }
  function HandWrittendigitrecognition() {
    window.open("https://handwritten-digit-recognition-yexehcrzkh4vd5smfwqhw6.streamlit.app/", "_blank");
  }


  // For NodeMailer
  // main.js (frontend)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      mobile: document.getElementById("mobile").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim()
    };

    // simple validation
    if (!data.name || !data.email || !data.message) {
      alert("Please provide name, email and message.");
      return;
    }

    try {
      const res = await fetch("https://your-backend.example.com/api/contact", { // change to your backend URL or /api/contact for same domain
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const json = await res.json();
      if (res.ok) {
        alert("Message sent — thank you!");
        form.reset();
      } else {
        alert(json.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again later.");
    }
  });
});



// 369fdcbafc48aa10a6d0d28ab925b855
// cbbb7a1bb484c09e6872049f25820fff


  



