$( document ).ready(function() {


// PARALLAX FUNCTION:
  $(window).scroll(function () {
    $("body").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});

  // Parallax looks bad on mobile!


// SCROLLING / ANIMATION:
    $(function(){
            // Ends Animation:
      var vendor          = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      var bounce          = 'animated bounce';
      var rollIn          = "animated rollIn";
      var bounceInDown    = "animated bounceInDown";
      var flip            = 'animated flip';
      var flipInX         = 'animated flipInX';
      var lightSpeedIn    = "animated lightSpeedIn";
      var zoomIn          = "animated zoomIn";
      var bounceOutLeft   = "animated bounceOutLeft";
      var bounceOutDown   = "animated bounceOutDown";
      var shake           = "animated shake";
      var bounceInRight   = "animated bounceInRight";
      var zoomOutDown     = "animated zoomOutDown";
      var hinge           = "animated hinge";
      var rubberBand      = "animated rubberBand";
      var rotateOut       = "animated rotateOut";
      var jello           = "animated jello";



        $('.divy').on("click", function(){
              $('.divy').addClass(shake).one(vendor, function(){
                $(this).removeClass(shake);
              });
        });

        $('#banner').waypoint(function(){
            $('#banner').removeClass('no-opacity').addClass(flipInX).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'70%'})

        $('#face').waypoint(function(){
            $('#face').removeClass('no-opacity').addClass(lightSpeedIn).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'50%'})

        $('#cat').waypoint(function(){
            $('#cat').removeClass('no-opacity').addClass(zoomIn).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'10%'})

        $('#girl').waypoint(function(){
            $('#girl').removeClass('no-opacity').addClass(bounceInRight).one(vendor, function(){
              $(this).removeClass(bounceInRight);
            });
        },{offset:'50%'})

        // $('#girl').waypoint(function(){
        //     $('#girl').addClass(bounceOutLeft).addClass('no-opacity');

        // },{offset:'10%'})

        $('#monkey').waypoint(function(){
            $('#monkey').addClass(rotateOut).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'30%'})

        $('#fish').waypoint(function(){
            $('#fish').addClass(bounceOutLeft).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'10%'})

        $('#fat').waypoint(function(){
            $('#fat').addClass(jello).one(vendor, function(){
              $(this).removeClass(jello);
            });
        },{offset:'30%'})

         $('.fat1').waypoint(function(){
            $('.fat1').addClass(jello).one(vendor, function(){
              $(this).removeClass(jello);
            });
        },{offset:'30%'})
         $('.fat2').waypoint(function(){
            $('.fat2').addClass(jello).one(vendor, function(){
              $(this).removeClass(jello);
            });
        },{offset:'30%'})
         $('.fat3').waypoint(function(){
            $('.fat3').addClass(jello).one(vendor, function(){
              $(this).removeClass(jello);
            });
        },{offset:'30%'})
         $('.fat4').waypoint(function(){
            $('.fat4').addClass(jello).one(vendor, function(){
              $(this).removeClass(jello);
            });
        },{offset:'30%'})
         $('.fat5').waypoint(function(){
            $('.fat5').addClass(jello).one(vendor, function(){
              $(this).removeClass(jello);
            });
        },{offset:'30%'})

        $('#penguin').waypoint(function(){
            $('#penguin').addClass(bounceOutDown).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'10%'})


        $('#divy2').waypoint(function(){
            $('#divy2').removeClass('no-opacity').addClass(rollIn).one(vendor, function(){
              $(this).removeClass(rollIn);
            });
        },{offset:'50%'})





//         var waypoint = new Waypoint({
//     element: document.getElementById('divy'),
//   handler: function(direction) {
//     alert('You have scrolled to divy')
//   }
// })

//         var waypoint = new Waypoint({
//     element: document.getElementById('divy2'),
//   handler: function(direction) {
//     alert('You have scrolled to divy2')
//   }
// })
    });





});

