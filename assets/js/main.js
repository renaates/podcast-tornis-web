// episodes

let episodesFromBE = [
  {
  image: "assets/images/rubrics/folijas-cepurites.png",
  number:"04",
  name:"RUBRIKAS NOSAUKUMS: Ceturtās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
  image:"assets/images/rubrics/bazars.png",
  number:"03",
  name:"RUBRIKAS NOSAUKUMS: Trešās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  },
  {
  image:"assets/images/rubrics/domatava.png",
  number:"02",
  name:"RUBRIKAS NOSAUKUMS: Otrās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  },
  {
  image:"assets/images/rubrics/akvarijs.png",
  number:"01",
  name:"PILOTEPIZODE: Pirmās epizodes nosaukums",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
  }
]

let episodes = episodesFromBE.map(({image, number, name, description}) => ({
  imageSrc: image,
  episodeNr: number,
  episodeName: name,
  description: description
}))

ReactDOM.render(
  episodes.map((episode) => React.createElement(Episode, episode)),
  document.querySelector(".episode-container")
);

// team

let team = [
  {
  imageSrc: "assets/images/team/reinislozbers.jpg",
  name:"Reinis Lozbers",
  role: "Tehnika, skaņa, pēcapstrāde",
  },
  {
  imageSrc:"assets/images/team/renatespirga.png",
  name:"Renāte Spirga",
  role: "Grafiskais dizains, mājaslapas izstrāde, pēcapstrāde, saturs",
  },
  {
  imageSrc:"assets/images/team/livakristaucelniece.png",
  name:"Līva Krista Učelniece",
  role: "Sociālie tīkli, saturs, plānošana",
  },
  {
  imageSrc:"assets/images/team/robertspicukans.png",
  name:"Roberts Pičukans",
  role: "Pēcapstrāde, saturs",
  },
  {
  imageSrc:"assets/images/team/davisindriksons.jpg",
  name:"Dāvis Indriksons",
  role: "Sociālie tīkli, saturs",
  }
]

ReactDOM.render(
  team.map((person) => React.createElement(Person, person)),
  document.querySelector(".person-container")
);

// owl carousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
loop:false,
margin:10,
nav:true,
autoHeight: true,
responsive:{
    0:{
        items:1
    },
    800:{
        items:2
    },
    1600:{
        items:3
    }
}
});

// header

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var box = $('.header-text').height();
  var header = $('header').height();

  if (scroll >= box - header) {
    $("header").addClass("background-header");
  } else {
    $("header").removeClass("background-header");
  }
});

// scroll

$(document).ready(function () {
  $('a[href^="#welcome"]').addClass('active');

  // smooth scroll
  $('.nav-element').on('click', function (e) {
    e.preventDefault();
    var athis = this;
    var target = this.hash,
      menu = target + 80;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
      window.location.hash = target;
      $('.nav-element').removeClass('active');
      $(athis).addClass('active');
    });
  });

  $(window).scroll(function (event) {
    var scrollPos = $(document).scrollTop() + 80;

    if (scrollPos === 0) {
      $('a[href^="#news"]').addClass('active');
      return;
    }
    $('.nav-element').not('[href=""]').not('[href="javascript:;"]').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav-element').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  })
});

// contact form

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// // add input elements

// function addInputField() {
//   let inputFieldCount = document.querySelector(".member-count").value;
//   let inputField = document.querySelector(".member");

//   if (value==2) {

//   }
// }


// function addFields(){
//     // Number of inputs to create
//     var number = document.getElementById("member").value;
//     // Container <div> where dynamic content will be placed
//     var container = document.querySelector(".2r3c");
//     // Clear previous contents of the container
//     while (container.hasChildNodes()) {
//         container.removeChild(container.lastChild);
//     }
//     for (i=0;i<number;i++){
//         // Append a node with a random text
//         container.appendChild(document.createTextNode("Member " + (i+1)));
//         // Create an <input> element, set its type and name attributes
//         var input = document.createElement("input");
//         input.type = "text";
//         input.name = "member" + i;
//         container.appendChild(input);
//         // Append a line break 
//         container.appendChild(document.createElement("br"));
//     }
// }