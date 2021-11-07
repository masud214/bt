


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()







$(document).ready(function(){
  $(".cont-btn").click(function(){
    $(".cont,.times").toggleClass("change");
  });
}); 





$(document).ready(function(){
  $(".cont-btn").click(function(){
    $(".icon").toggleClass("show");
  });
}); 




$(function(){
  $('.GmaeCard').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // infinite: true,
      // cssEase: 'linear',
      arrows: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      prevArrow: '.left2',
      nextArrow: '.right2',
    });


});




$(function(){
  $('.gmaeCard').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // infinite: true,
      // cssEase: 'linear',
      arrows: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      prevArrow: '.left1',
      nextArrow: '.right1',
    });


});






$(function(){
  function resetSlick($slick_slider, settings) {
    $(window).on('resize', function() {
        if ($(window).width() < 320) {
            if ($slick_slider.hasClass('slick-initialized')) {
                $slick_slider.slick('unslick');
            }
            return
        }

        if (!$slick_slider.hasClass('slick-initialized')) {
            return $slick_slider.slick(settings);
        }
    });
}
  $('.banner-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // infinite: true,
      // cssEase: 'linear',
      arrows: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      prevArrow: '.left',
      nextArrow: '.right',
      dots: true,
    });


});






// $(function(){
//   $('.GameCard-main').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       // infinite: true,
//       // cssEase: 'linear',
//       arrows: true,
//       autoplay: true,
//       speed: 1000,
//       autoplaySpeed: 2000,
//       prevArrow: '.left1',
//       nextArrow: '.right1',
//       dots: true,
//     });


// });






// payment js
function MyFunction(){
  var nagad = document.getElementById("nagad");
  var bkash = document.getElementById("bkash");
  if( bkash.style.display = "none") {
    bkash.style.display = "block";
    nagad.style.display = "none";
  } else {
      bkash.style.display = "none";
    }

}



function myFunction(){
  var nagad = document.getElementById("nagad");
  var bkash = document.getElementById("bkash");
  if( nagad.style.display = "none") {
    nagad.style.display = "block";
    bkash.style.display = "none";
  } else {
      nagad.style.display = "none";
    }

}






var fname = document.getElementById("name");
var nameErr = document.getElementById("nameErr");

var Pnumber = document.getElementById("Pnumber");
var PnumberErr = document.getElementById("PnumberErr");

var email = document.getElementById("email");
var emailErr = document.getElementById("emailErr");

var plaryId = document.getElementById("plaryId");
var plaryIdErr = document.getElementById("plaryIdErr");

function sub(){
     if(fname.value === ""){
       nameErr.innerHTML = "Type your Name";
       fname.style.border = "1px solid red";
       fname.focus();
       return false;
     }
     if(Pnumber.value === ""){
      PnumberErr.innerHTML = "Type your phone number";
      Pnumber.style.border = "1px solid red";
      Pnumber.focus();
      return false;
    }
    if(email.value === ""){
      emailErr.innerHTML = "Type your email";
      email.style.border = "1px solid red";
      email.focus();
      return false;
    }
    if(plaryId.value === ""){
      plaryIdErr.innerHTML = "Type your plary Id";
      plaryId.style.border = "1px solid red";
      plaryId.focus();
      return false;
    }
}


function errValid(){
  if(fname.value !== ""){
     nameErr.innerHTML = "";
     fname.style.border = "1px solid black";

  }
  if(Pnumber.value !== ""){
    PnumberErr.innerHTML = "";
    Pnumber.style.border = "1px solid black";

  }
 if(email.value !== ""){
  emailErr.innerHTML = "";
  email.style.border = "1px solid black";

  }
 if(plaryId.value !== ""){
  plaryIdErr.innerHTML = "";
  plaryId.style.border = "1px solid black";

  }
}

fname.addEventListener("blur",errValid);
Pnumber.addEventListener("blur",errValid);
email.addEventListener("blur",errValid);
plaryId.addEventListener("blur",errValid);




