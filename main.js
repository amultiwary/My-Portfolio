
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
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{origin:'right'});

/*========================================== typed js =====================================*/
  const typed=new Typed('.multiple-text',{
    strings:['Fullstack Developer','Web Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
  });
//   document.getElementById('downloadBtn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default anchor behavior
//     console.log("it is in this button");
//     const resumeUrl = 'https://github.com/amultiwary/My-Portfolio/blob/main/My%20resume.pdf'; // Update this URL to the path of your resume
//     const link = document.createElement('a');
//     link.href = resumeUrl;
//     link.download = 'My_Resume.pdf'; // This will be the default name of the downloaded file
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });


function showmore(){
    var moretext=document.getElementById("more-text");
    var btn=document.getElementById("read-more-btn");
    console.log("amul");
    moretext.style.display="block";
    btn.style.display="none";
}


