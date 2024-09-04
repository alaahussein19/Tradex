const pro = document.querySelector('#pro')
window.addEventListener("scroll", checkHeight)
function checkHeight(){
    if (window.scrollY > 200) {
        pro.style.display = "flex"    
    }
    else{
        pro.style.display = "none"  

    }
}
pro.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})
let prevIcon = '<i class="fa-solid fa-arrow-left-long prev arrow-pro"></i>'
let nextIcon = '<i class="fa-solid fa-arrow-right-long arrow-pro next "></i>'

$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel(
        {
        nav:true,
        loop:true,
        navText:[
            prevIcon,
            nextIcon

        ],
        responsive:{
            0: {
                items:1
            },
            1000:{
                items:2
            }
        }
        });
  })
  const counts = document.querySelectorAll('.num')
const speed = 20

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-val'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 70)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})
// contact us
let uname = document.getElementById("uname")
let email = document.getElementById("email")
let subjectInput = document.getElementById("subject")
let messageInput = document.getElementById('message')
let form = document.getElementById('form')
let email_error = document.getElementById('email_error')
let name_error = document.getElementById('name_error')
let subject_error = document.getElementById('subject_error')
let message_error = document.getElementById('message_error')

form.addEventListener('submit', (e) =>{
    var emailCheck=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (uname.value === '' || uname.value === null ) {
        e.preventDefault();
        name_error.innerHTML='Name is required';
}    
if (!email.value.match(emailCheck)){
    e.preventDefault();
    email_error.innerHTML='Valid email is required';
}
if (subject.value === '' || subject.value === null ) {
    e.preventDefault();
    subject_error.innerHTML='subject is required';
} 
if (message.value === '' || message.value === null ) {
    e.preventDefault();
    message_error.innerHTML='Message is required';
} 

})
 