var poligons = document.getElementsByClassName("clipPoligons");

var allTriggerGifs = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

var urls = [
  [
  '../img/test/all/new/col-1.jpg',
  '../img/test/face1.jpg',
  '../img/test/all/new/col-3.jpg',
  '../img/test/all/new/col-4.jpg',
  '../img/test/face2.jpg',
  '../img/test/all/new/col-5.jpg',
  '../img/test/all/new/col-6.jpg',
  '../img/test/face3.jpg',
  '../img/test/get/get-1.jpg'

],
[
"url('../img/test/all/new/col-8.jpg')",
"url('../img/test/face4.jpg')",

"url('../img/test/all/new/col-9.jpg')",
"url('../img/test/all/new/col-10.jpg')",
"url('../img/test/face5.jpg')",

"url('../img/test/all/new/col-11.jpg')",
"url('../img/test/all/new/col-12.jpg')",
"url('../img/test/face6.jpg')"

],
[
"url('../img/test/all/new/col-12.jpg')",
"url('../img/test/all/new/col-14.jpg')",
"url('../img/test/face7.jpg')",

"url('../img/test/all/new/col-15.jpg')",
"url('../img/test/all/new/col-16.jpg')",
"url('../img/test/face8.jpg')",

"url('../img/test/all/new/col-17.jpg')",
"url('../img/test/all/new/col-18.jpg')"

],
[
"url('../img/test/all/new/col-20.jpg')",
"url('../img/test/all/new/col-21.jpg')",
"url('../img/test/face9.jpg')",

"url('../img/test/all/new/col-22.jpg')",
"url('../img/test/all/new/col-23.jpg')",
"url('../img/test/face10.jpg')",

"url('../img/test/all/new/col-24.jpg')"

],
[
"url('../img/test/all/new/col-25.jpg')",
"url('../img/test/all/new/col-26.jpg')",
"url('../img/test/face11.jpg')",

"url('../img/test/all/new/col-27.jpg')",
"url('../img/test/all/new/col-28.jpg')",

"url('../img/test/all/new/col-29.jpg')",
"url('../img/test/all/new/col-30.jpg')",
"url('../img/test/face13.jpg')"

],
[
"url('../img/test/all/new/col-32.jpg')",
"url('../img/test/all/new/col-33.jpg')",
"url('../img/test/face14.jpg')",

"url('../img/test/all/new/col-34.jpg')",
"url('../img/test/all/new/col-35.jpg')",
"url('../img/test/face15.jpg')",

"url('../img/test/all/new/col-36.jpg')"

],


// middle row
[
"url('../img/test/all/new/col-37.jpg')",
"url('../img/test/all/new/col-38.jpg')",
"url('../img/test/face16.jpg')",

"url('../img/test/all/new/col-40.jpg')",
"url('../img/test/all/new/col-65.jpg')",
"url('../img/test/face17.jpg')",

"url('../img/test/all/new/col-42.jpg')",
"url('../img/test/all/new/col-13.jpg')"

],
[
"url('../img/test/all/new/col-43.jpg')",
"url('../img/test/all/new/col-44.jpg')",
"url('../img/test/face18.jpg')",

"url('../img/test/all/new/col-45.jpg')",
"url('../img/test/all/new/col-46.jpg')",
"url('../img/test/face19.jpg')",

"url('../img/test/all/new/col-47.jpg')",
"url('../img/test/all/new/col-48.jpg')",
"url('../img/test/face20.jpg')"

],
[
"url('../img/test/all/new/col-49.jpg')",
"url('../img/test/all/new/col-50.jpg')",
"url('../img/test/face21.jpg')",

"url('../img/test/all/new/col-51.jpg')",
"url('../img/test/all/new/col-52.jpg')",
"url('../img/test/face22.jpg')",

"url('../img/test/all/new/col-53.jpg')",
"url('../img/test/all/new/col-54.jpg')",
"url('../img/test/face23.jpg')"

],
[
"url('../img/test/all/new/col-55.jpg')",
"url('../img/test/all/new/col-56.jpg')",
"url('../img/test/face24.jpg')",

"url('../img/test/all/new/col-57.jpg')",
"url('../img/test/all/new/col-58.jpg')",
"url('../img/test/face25.jpg')",

"url('../img/test/all/new/col-60.jpg')"

],
[
"url('../img/test/all/new/col-61.jpg')",
"url('../img/test/all/new/col-62.jpg')",
"url('../img/test/face26.jpg')",

"url('../img/test/all/new/col-63.jpg')",
"url('../img/test/all/new/col-64.jpg')",
"url('../img/test/face27.jpg')",

"url('../img/test/all/new/col-66.jpg')"

],

// bottom row
[
"url('../img/test/all/new/col-4.jpg')",
"url('../img/test/all/new/col-18.jpg')",
"url('../img/test/face23.jpg')",

"url('../img/test/all/new/col-53.jpg')",
"url('../img/test/all/new/col-62.jpg')",
"url('../img/test/face25.jpg')",

"url('../img/test/all/new/col-67.jpg')"

],

[
"url('../img/test/all/new/col-7.jpg')",
"url('../img/test/all/new/col-25.jpg')",
"url('../img/test/face2.jpg')",

"url('../img/test/all/new/col-42.jpg')",
"url('../img/test/all/new/col-47.jpg')",
"url('../img/test/face34.jpg')",

"url('../img/test/all/new/col-76.jpg')"

],

[
"url('../img/test/all/new/col-9.jpg')",
"url('../img/test/all/new/col-10.jpg')",
"url('../img/test/face19.jpg')",

"url('../img/test/all/new/col-33.jpg')",
"url('../img/test/all/new/col-75.jpg')",
"url('../img/test/face28.jpg')",

"url('../img/test/get/get-8.jpg')"

],
[
"url('../img/test/all/new/col-12.jpg')",
"url('../img/test/all/new/col-23.jpg')",
"url('../img/test/face27.jpg')",

"url('../img/test/all/new/col-46.jpg')",
"url('../img/test/all/new/col-55.jpg')",
"url('../img/test/face33.jpg')",

"url('../img/test/get/get-7.jpg')"

],
[
"url('../img/test/all/new/col-14.jpg')",
"url('../img/test/all/new/col-27.jpg')",
"url('../img/test/face30.jpg')",

"url('../img/test/all/new/col-32.jpg')",
"url('../img/test/all/new/col-50.jpg')",
"url('../img/test/face31.jpg')"


],
[
"url('../img/test/all/new/col-16.jpg')",
"url('../img/test/all/new/col-38.jpg')",
"url('../img/test/face7.jpg')",

"url('../img/test/all/new/col-56.jpg')",
"url('../img/test/all/new/col-71.jpg')",
"url('../img/test/face8.jpg')",

"url('../img/test/get/get-4.jpg')"

]
]

function myFunctionOpen() {
  document.getElementById("open").style.display="block";
  document.getElementById("myBtn").style.display="none";
};

function myFunctionClose() {
  document.getElementById("open").style.display="none";
  document.getElementById("myBtn").style.display="block";

};

function openInternship() {
  document.getElementById("internshipOpen").style.display="block";
  document.getElementById("showInt").style.display="none";
};

function activateGif (index){
  allTriggerGifs[index] = true;
  var imgsQuantity = urls[index].length;
  var activeLightbox = document.getElementsByClassName('lightbox')[index];
  // node.style.display = "none";


  if(!activeLightbox.hasChildNodes()){
    urls[index].forEach(function(url){
      // var node = document.createElement("img");
      // node.src = url;
      var node = document.createElement("div");
      node.style.backgroundImage = url;
      node.style.display = 'none';
      activeLightbox.appendChild(node);
    });
setTimeout(function () {
  nextImg(index, 1, activeLightbox, imgsQuantity);
}, 200);
  } else {
    nextImg(index, 1, activeLightbox, imgsQuantity);

  }

}

function deactivateGif (index) {
  // console.log("stopLoop");
  allTriggerGifs[index] = false;
}

function nextImg(setNumber, index, lightbox, quantityImg){
  // lightbox.style.backgroundImage = "url('" + urls[setNumber][index%quantityImg] + "')";
  lightbox.style.backgroundImage = urls[setNumber][index%quantityImg];
  setTimeout(function (i) {
    if(allTriggerGifs[setNumber]){
      nextImg(setNumber, i+1, lightbox, quantityImg);
    }else{
      // lightbox.style.backgroundImage = "url('" + urls[setNumber][index] + "')";
      lightbox.style.backgroundImage = urls[setNumber][index];
      return 0;
    }
  }, 350, index);
}


// function closeInternship() {
//   document.getElementById("internshipOpen").style.display="none";
//   document.getElementById("showInt").style.display="block";
// };

// function myFunctionCopy() {
//   var copyText = document.getElementById("myCopy");
//
//   copyText.select();
//
//   document.execCommand("copy");
//
//   alert("Copied the text: " + copyText.value);
// }


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Email was copied to your clipboard");
}

$(window).scroll(function() {
  var height = $(window).scrollTop();
  var slashes = document.getElementById("slashes");
  var brandBox = document.getElementsByClassName("box");

  $('.myDiv').toggleClass('scrolled', $(this).scrollTop() > 50);

  var deviceHeight = $( window ).height();
  var docHeight = $( document ).height();

  if(height  > 800) {
    $(".brandPlay").addClass("visible");
  } else {
    $(".brandPlay").removeClass("visible");
  }

  if(height  < 800) {
    $(".logoV, .burgerV").addClass("invisible");
  } else {
    $(".logoV, .burgerV").removeClass("invisible");
  }

  if(height  > 800) {
    document.querySelector('.headTopV').style.display = 'block';
  } else {
    document.querySelector('.headTopV').style.display = 'none';
  }


  $("#slashes").css({

    "-webkit-clip-path": "polygon(" + (25 - height/4) +"% 95%," + (45 - height/4) + "% 4%, " + (55 + height/80)  + "% 4%, " + (35 + height/80) + "% 95%, "
    + (45 - height/80) + "% 95%, " + (65 - height/80) + "% 4%," + (75 + height/4) + "% 4%, " + (55 + height/4) + "% 95%)",
    "clip-path": "polygon(" + (25 - height/4) +"% 95%," + (45 - height/4) + "% 4%, " + (55 + height/80)  + "% 4%, " + (35 + height/80) + "% 95%, "
    + (45 - height/80) + "% 95%, " + (65 - height/80) + "% 4%," + (75 + height/4) + "% 4%, " + (55 + height/4) + "% 95%)"
  });

  if(height  >= 0 && height < 1800) {
    $(".box").css({
      "background":"rgba(40,40,40," + (0 + height/2000) + ")" });
    }
    // console.log(height);
  });

  $(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 1,
      dots:true,
      centerMode: true,
    });

    $('.carouselCase').slick({
      slidesToShow: 2,
      dots:false,
      autoplay:true,
      centerMode: true,
    });

    $('.carouselOffice').slick({
      slidesToShow: 1,
      dots:true,
      arrows:false,
      autoplay:true,
      centerMode: true,
    });
  });


  function closeBurger() {
    var elementS = document.getElementById("m1");
    elementS.checked = false;
  };

  // __________GOOGLE MAP__________

  function initialize() {
    var myLatLng ={lat:43.6435499,lng:-79.3984788};
    var image = '../../img/marker.png';
    var marker;

    var mapOptions = {
      center: new google.maps.LatLng(43.6435499, -79.3984788),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      draggable: true,
      panControl: true,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      overviewMapControl: true,
      rotateControl: true,
      fullscreenControl:false,
      styles:[{
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#5e676f'}]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{"color": "#ccd0d4"}]
      },
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ccd0d4"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ccd0d4"
          }
        ]
      },
      {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ccd0d4"
          }
        ]
      },
      {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ccd0d4"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ccd0d4"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#5e676f"
          },
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#5e676f"
          },
          {
            "weight": 5.5
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dddddd"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#5e676f"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "weight": 4
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#5e676f"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#5e676f"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'trevor//peter',
    draggable: false,
    animation: google.maps.Animation.DROP,
    icon: image,
    position: {lat:43.6435499,lng:-79.3984788}
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
