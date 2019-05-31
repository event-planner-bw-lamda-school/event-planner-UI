// Your code goes here

function myFunction() {
   const x = document.getElementById("MyNav2");
    if (x.className === "navdiv") {
      x.className += " responsive";
    } else {
      x.className = "navdiv";
    }
  }


// //1. mouseover links change color to purple///////////////////////////////////////
// const navLink = document.querySelectorAll('button'); // navLink is an obj name and variable. 
// //querySelectorAll is a DOM method.
// // document - the DOM tree - it's the whole damn page. 
// // querySelectorAll - a document method.
// // Use . to select class in the blah blah querySelectorAll (param?) 
// // now I'm invoking "The Object" and passing it in the forEach with it's own (param?) 
// navLink.forEach((hover) => { 
//   hover.addEventListener('mouseover', (event) => { 
//     event.target.style.color = 'lighblue';

//     //assign the target to .style.  

//     setTimeout( ()=> { event.target.style.color = 'white'}, 1000 )

    
//   });
// });


// //2. click content destination and img//////////////////////////////////////////////
// const contentDestination = document.querySelector('.content-destination');
// contentDestination.addEventListener('click', (event) => {
//   //console.log(`content destination clicked`);
//   event.target.style.
// });

// const contentDestinationImg = document.querySelector(
//     '.content-destination img',
//   );
//   contentDestinationImg.addEventListener('click',(event) => {
//     console.log(`content destination img clicked`);
//     event.stopPropagation();
//   });
  




// function addEvent(obj, evt, fn) {
//     if (obj.addEventListener) {
//         obj.addEventListener(evt, fn, false);
//     } else if (obj.attachEvent) {
//         obj.attachEvent("on" + evt, fn);
//     }
// }

// addEvent(document, 'mouseout', function(evt) {
//     if (evt.toElement == null && evt.relatedTarget == null) {
//         $('.lightbox').slideDown();
//     };
// });

// const closeIt = document.querySelector(".lightbox")

// closeIt() {
//     if (this.)
// }

// function myFunction() {
//     myVar = setTimeout(alertFunc, 3000);
//   }
  
//   function alertFunc() {
//     alert("Hello!");
//   }

// $('close').click(function() {
//     $('.lightbox').slideUp();
// });

