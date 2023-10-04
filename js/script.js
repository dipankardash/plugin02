   // js
wow = new WOW(
{
    boxClass:     'wow',      
    animateClass: 'animated', 
    offset:       0,          
    mobile:       true,       
    live:         true       
})
wow.init();


   $(document).ready(function(){
    // counter up start

    $('.counter').counterUp({
    delay: 10,
    time: 5000
    });

    $('.counter2').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {
      duration: 5000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  });


    $(document).ready(function(){
    $('#count-box').CountUpCircle({
    duration: 5000,
    opacity_anim: false,
    step_divider: 1
});
});
}) 
    


