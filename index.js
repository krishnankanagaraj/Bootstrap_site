let sections=document.querySelectorAll('section');
let navElements=document.querySelectorAll('nav ul li a');
window.onscroll=function(){scrollSpy()}
function scrollSpy(){
    sections.forEach(sec=>{
      let top=window.scrollY;
      let offset=sec.offsetTop;
      let height=sec.offsetHeight;
      let id=sec.getAttribute('id');
      if(top>=offset&&top<offset+height){
        navElements.forEach(items=>{
          items.classList.remove( 'active1' )
          document.querySelector('nav ul li a[href*=' +id+ ']').classList.add('active1')
        })
      }
    })
  }
  // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()