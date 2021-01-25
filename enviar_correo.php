<?php 
    $destinatario = "daianayelenruiz@gmail.com";

    $nombre = $_POST['nombre'];
    $asunto = "Nueva Consulta";
    $correo = $_POST['email'];
    $mensaje = $_POST['msj'];

    $header = "<h1 style=color:pink;>¡Nueva consulta!</h1>";
    $mensajeCompleto ="<h1 style=color:pink;>". $mensaje ."</h1> <br>" .
    "Nombre: ".$nombre."<br>
    Email:". $correo. ;

    $header = "From:" . $destinatario . "\r\n";
    $header.= "MIME-Version: 1.0\r\n";
    $header.= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($destinatario, $asunto, $mensajeCompleto, $header);

    if(!mail($destinatario, $asunto, $mensajeCompleto, $header)){
        echo `<script>alert('El mensaje no pudo enviarse, intente nuevamente')</script>`;
        // header('location:https://koyaweb.com.ar/contacto.php');
    }else{
        // header('location:https://koyaweb.com.ar/contacto_enviado.php');
    }
?>