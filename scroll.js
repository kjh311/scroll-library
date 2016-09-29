$( document ).ready(function() {

  $(window).scroll(function () {
    $("body").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
});

    $(function(){
      var bounce          = 'animated bounce';
      var rollIn          = "animated rollIn";
      var bounceInDown    = "animated bounceInDown";
      var vendor          = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
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
              // $(this).removeClass(flip);
            });
        },{offset:'70%'})

        $('#monkey').waypoint(function(){
            $('#monkey').removeClass('no-opacity').addClass(hinge).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'50%'})

        $('#fish').waypoint(function(){
            $('#fish').addClass(bounceOutLeft).one(vendor, function(){
              // $(this).removeClass(flip);
            });
        },{offset:'10%'})

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

