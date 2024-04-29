$(function() {  
    $(window).on('hashchange', function() {
        var hash = window.location.hash;
        $('#app').hide();
        $('#profiles').hide();
        route(hash);
    });
    
    function route(hash) {
        switch(hash) {
            case '#profile':
                $('#app').hide();
                $('#profiles').show();
                break;
            case '#app':
                $('#profiles').hide();
                $('#app').show();
                break;
            default:
                $('#profiles').hide();
                $('#app').show();
        }
    }

    // Initially, route based on the current hash
    route(window.location.hash);
}());
