$(document).ready(function(){
  




   var typed=new Typed(".element",{
       strings:["Sadhna","A Developer","A Designer"],
       smartBackspace:true,
       typeSpeed:100,
       backSpeed:100,
       loop:true,
       loopCount:Infinity,
       startDelay:1000
   });
   var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:95%;transition:1s all");
      p[1].setAttribute("style", "width:90%;transition:1.5s all");
      p[2].setAttribute("style", "width:80%;transition:1.7s all");
      p[3].setAttribute("style", "width:50%;transition:2s all");
       
    },
    offset:'90%'
  })


  });

  


  (function($) { 
    $(function() { 
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); 
  })(jQuery);







  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
     // button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  

