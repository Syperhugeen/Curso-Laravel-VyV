     // Show the progress bar 
    NProgress.start();

    // Increase randomly
    var interval = setInterval(function() { NProgress.inc(); }, 1000);        

    // Trigger finish when page fully loaded
    $(window).load(function () {
        clearInterval(interval);
        NProgress.done();
    });

    // Trigger bar when exiting the page
    $(window).unload(function () {
        NProgress.start();
    });




//todos los elementos a menos los siguientes
 $('body').on('click','a:not(.chosen-single,.avgrund-close,.bx-pager-link)',function(){
 NProgress.start();
});

 