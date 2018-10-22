var poligons = document.getElementsByClassName("clipPoligons");

var allTriggerGifs = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

var urls = [
  [
    "url('../img/test/row1/Box1/1.jpg')",
    "url('../img/test/row1/Box1/2.jpg')",
    "url('../img/test/row1/Box1/3.jpg')",
    "url('../img/test/row1/Box1/4.jpg')",
    "url('../img/test/row1/Box1/5.jpg')",
    "url('../img/test/row1/Box1/6.jpg')",
    "url('../img/test/row1/Box1/7.jpg')",
    "url('../img/test/row1/Box1/8.jpg')",
    "url('../img/test/row1/Box1/9.jpg')"
  ],
  [
    "url('../img/test/row1/Box2/1.jpg')",
    "url('../img/test/row1/Box2/2.jpg')",
    "url('../img/test/row1/Box2/3.jpg')",
    "url('../img/test/row1/Box2/4.jpg')",
    "url('../img/test/row1/Box2/5.jpg')",
    "url('../img/test/row1/Box2/6.jpg')",
    "url('../img/test/row1/Box2/7.jpg')",
    "url('../img/test/row1/Box2/8.jpg')",
    "url('../img/test/row1/Box2/9.jpg')"
  ],
  [
    "url('../img/test/row1/Box3/1.jpg')",
    "url('../img/test/row1/Box3/2.jpg')",
    "url('../img/test/row1/Box3/3.jpg')",
    "url('../img/test/row1/Box3/4.jpg')",
    "url('../img/test/row1/Box3/5.jpg')",
    "url('../img/test/row1/Box3/6.jpg')",
    "url('../img/test/row1/Box3/7.jpg')",
    "url('../img/test/row1/Box3/8.jpg')",
    "url('../img/test/row1/Box3/9.jpg')"
  ],
  [
    "url('../img/test/row1/Box4/1.jpg')",
    "url('../img/test/row1/Box4/2.jpg')",
    "url('../img/test/row1/Box4/3.jpg')",
    "url('../img/test/row1/Box4/4.jpg')",
    "url('../img/test/row1/Box4/5.jpg')",
    "url('../img/test/row1/Box4/6.jpg')",
    "url('../img/test/row1/Box4/7.jpg')",
    "url('../img/test/row1/Box4/8.jpg')"
  ],
  [
    "url('../img/test/row1/Box5/1.jpg')",
    "url('../img/test/row1/Box5/2.jpg')",
    "url('../img/test/row1/Box5/3.jpg')",
    "url('../img/test/row1/Box5/4.jpg')",
    "url('../img/test/row1/Box5/5.jpg')",
    "url('../img/test/row1/Box5/6.jpg')",
    "url('../img/test/row1/Box5/7.jpg')",
    "url('../img/test/row1/Box5/8.jpg')",
    "url('../img/test/row1/Box5/9.jpg')"
  ],
  [
    "url('../img/test/row1/Box6/1.jpg')",
    "url('../img/test/row1/Box6/2.jpg')",
    "url('../img/test/row1/Box6/3.jpg')",
    "url('../img/test/row1/Box6/4.jpg')",
    "url('../img/test/row1/Box6/5.jpg')",
    "url('../img/test/row1/Box6/6.jpg')",
    "url('../img/test/row1/Box6/7.jpg')",
    "url('../img/test/row1/Box6/8.jpg')",
    "url('../img/test/row1/Box6/9.jpg')"
  ],


  // middle row
  [
    "url('../img/test/row2/Box7/1.jpg')",
    "url('../img/test/row2/Box7/2.jpg')",
    "url('../img/test/row2/Box7/3.jpg')",
    "url('../img/test/row2/Box7/4.jpg')",
    "url('../img/test/row2/Box7/5.jpg')",
    "url('../img/test/row2/Box7/6.jpg')",
    "url('../img/test/row2/Box7/7.jpg')",
    "url('../img/test/row2/Box7/8.jpg')",
    "url('../img/test/row2/Box7/9.jpg')"
  ],
  [
    "url('../img/test/row2/Box8/1.jpg')",
    "url('../img/test/row2/Box8/2.jpg')",
    "url('../img/test/row2/Box8/3.jpg')",
    "url('../img/test/row2/Box8/4.jpg')",
    "url('../img/test/row2/Box8/5.jpg')",
    "url('../img/test/row2/Box8/6.jpg')",
    "url('../img/test/row2/Box8/7.jpg')",
    "url('../img/test/row2/Box8/8.jpg')",
    "url('../img/test/row2/Box8/9.jpg')"
  ],
  [
    "url('../img/test/row2/Box9/1.jpg')",
    "url('../img/test/row2/Box9/2.jpg')",
    "url('../img/test/row2/Box9/3.jpg')",
    "url('../img/test/row2/Box9/4.jpg')",
    "url('../img/test/row2/Box9/5.jpg')",
    "url('../img/test/row2/Box9/6.jpg')",
    "url('../img/test/row2/Box9/7.jpg')",
    "url('../img/test/row2/Box9/8.jpg')",
    "url('../img/test/row2/Box9/9.jpg')"
  ],
  [
    "url('../img/test/row2/Box10/1.jpg')",
    "url('../img/test/row2/Box10/2.jpg')",
    "url('../img/test/row2/Box10/3.jpg')",
    "url('../img/test/row2/Box10/4.jpg')",
    "url('../img/test/row2/Box10/5.jpg')",
    "url('../img/test/row2/Box10/6.jpg')",
    "url('../img/test/row2/Box10/7.jpg')",
    "url('../img/test/row2/Box10/8.jpg')"
  ],
  [
    "url('../img/test/row2/Box11/1.jpg')",
    "url('../img/test/row2/Box11/2.jpg')",
    "url('../img/test/row2/Box11/3.jpg')",
    "url('../img/test/row2/Box11/4.jpg')",
    "url('../img/test/row2/Box11/5.jpg')",
    "url('../img/test/row2/Box11/6.jpg')",
    "url('../img/test/row2/Box11/7.jpg')",
    "url('../img/test/row2/Box11/8.jpg')",
    "url('../img/test/row2/Box11/9.jpg')"
  ],

  // bottom row
  [
    "url('../img/test/row3/Box12/1.jpg')",
    "url('../img/test/row3/Box12/2.jpg')",
    "url('../img/test/row3/Box12/3.jpg')",
    "url('../img/test/row3/Box12/4.jpg')",
    "url('../img/test/row3/Box12/5.jpg')",
    "url('../img/test/row3/Box12/6.jpg')",
    "url('../img/test/row3/Box12/7.jpg')",
    "url('../img/test/row3/Box12/8.jpg')",
    "url('../img/test/row3/Box12/9.jpg')"
  ],

  [
    "url('../img/test/row3/Box13/1.jpg')",
    "url('../img/test/row3/Box13/2.jpg')",
    "url('../img/test/row3/Box13/3.jpg')",
    "url('../img/test/row3/Box13/4.jpg')",
    "url('../img/test/row3/Box13/5.jpg')",
    "url('../img/test/row3/Box13/6.jpg')",
    "url('../img/test/row3/Box13/7.jpg')",
    "url('../img/test/row3/Box13/8.jpg')",
    "url('../img/test/row3/Box13/9.jpg')"
  ],

  [
    "url('../img/test/row3/Box14/1.jpg')",
    "url('../img/test/row3/Box14/2.jpg')",
    "url('../img/test/row3/Box14/3.jpg')",
    "url('../img/test/row3/Box14/4.jpg')",
    "url('../img/test/row3/Box14/5.jpg')",
    "url('../img/test/row3/Box14/6.jpg')",
    "url('../img/test/row3/Box14/7.jpg')",
    "url('../img/test/row3/Box14/8.jpg')",
    "url('../img/test/row3/Box14/9.jpg')"
  ],
  [
    "url('../img/test/row3/Box15/1.jpg')",
    "url('../img/test/row3/Box15/2.jpg')",
    "url('../img/test/row3/Box15/3.jpg')",
    "url('../img/test/row3/Box15/4.jpg')",
    "url('../img/test/row3/Box15/5.jpg')",
    "url('../img/test/row3/Box15/6.jpg')",
    "url('../img/test/row3/Box15/7.jpg')",
    "url('../img/test/row3/Box15/8.jpg')",
    "url('../img/test/row3/Box15/9.jpg')"
  ],
  [
    "url('../img/test/row3/Box16/1.jpg')",
    "url('../img/test/row3/Box16/2.jpg')",
    "url('../img/test/row3/Box16/3.jpg')",
    "url('../img/test/row3/Box16/4.jpg')",
    "url('../img/test/row3/Box16/5.jpg')",
    "url('../img/test/row3/Box16/6.jpg')",
    "url('../img/test/row3/Box16/7.jpg')",
    "url('../img/test/row3/Box16/8.jpg')",
    "url('../img/test/row3/Box16/9.jpg')"
  ],
  [
    "url('../img/test/row3/Box17/1.jpg')",
    "url('../img/test/row3/Box17/2.jpg')",
    "url('../img/test/row3/Box17/3.jpg')",
    "url('../img/test/row3/Box17/4.jpg')",
    "url('../img/test/row3/Box17/5.jpg')",
    "url('../img/test/row3/Box17/6.jpg')",
    "url('../img/test/row3/Box17/7.jpg')",
    "url('../img/test/row3/Box17/8.jpg')",
    "url('../img/test/row3/Box17/9.jpg')"
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

  // if the user hovers on the img for the first time - attach all img for the animation to DOM
  if(!activeLightbox.hasChildNodes()){
    urls[index].forEach(function(url){
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
  lightbox.style.backgroundImage = urls[setNumber][index%quantityImg];
  setTimeout(function (i) {
    if(allTriggerGifs[setNumber]){
      nextImg(setNumber, i+1, lightbox, quantityImg);
    }else{
      lightbox.style.backgroundImage = urls[setNumber][index];
      return 0;
    }
  }, 350, index);
}

var myVideo = document.getElementById("Video");
function playVideo () {
  if (myVideo.paused)
         myVideo.play();
     else
         myVideo.pause();
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
    // console.log( document.querySelector('.headTopV'));
    if(  document.querySelector('.headTopV'))
    document.querySelector('.headTopV').style.display = 'block';
  } else {
    // console.log( document.querySelector('.headTopV'));
    if(  document.querySelector('.headTopV'))
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
      arrows:true,
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
