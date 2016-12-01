function saludar() {


    swal("Hola chaka...", "You clicked the button!", "success");
}

function getFortuneFromServer() {
    //Realizando una petición get azincrona con AJAX asistida con Jquery
    $.get('/crackthecookie', "", function(cookie, status) {
        //Contenido del callback
        console.log('> status: ' + status);
        // Presentando el mensaje
        swal(cookie.paper);
    }, 'json');
}
