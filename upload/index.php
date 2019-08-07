<?php 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upload de Foto</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
               <div class="panel panel-success">
                   <div class="panel-heading">
                        <h1>Upload de Fotos com JS</h1>
                   </div>
                   <div class="panel-body">
                        <div class="col-md-6">
                             <div class="form-group">
                                <label for="photo" class="photo">Incluir Arquivo</label>
                                <input type="file" class="form-control photoinput" name="photo" accept="image/*" style="display: none" id="photo" required>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <canvas id="canvas"></canvas>
                        </div>
                   </div>  
                   <div class="panel-footer">
                       <h2><b>INSCREVA-SE</b> no canal, CLIQUE 
                         <a href="https://www.youtube.com/channel/UCIpzYoTTr3xy7Wwu3bI5yFA" target="_blank">AQUI</a>
                      </h2>
                      <h3>Nome do Canal</h3>
                   </div> 
                   
               </div>
            </div>
        

        </div>
    </div>
    


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <!-- Latest compiled and minified JavaScript -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>