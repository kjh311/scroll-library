$( document ).ready(function() {




    $(function(){
      var bounce = 'animated bounce';
      var rollIn = "animated rollIn";
      var vendor = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


            $('.divy').on("click", function(){
              $('.divy').addClass(rollIn).one(vendor, function(){
                $(this).removeClass(rollIn);
              });
        });


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

        $('#divy2').waypoint(function(){
            $('#divy2').removeClass('no-opacity').addClass(rollIn).one(vendor, function(){
              $(this).removeClass(rollIn);
            });
        },{offset:'50%'})


    });





});

