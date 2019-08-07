$(document).ready(function(){

     if (window.File && window.FileReader && window.FormData) {
                        let photo = $('#photo');

                        photo.on('change', function (e) {
                            let file = e.target.files[0];
                           // var info = $(this).attr('value').split(";");
                            if (file) {
                                if (/^image\//i.test(file.type)) {
                                    readFile(file);
                                } else {
                                    alert('Por favor selecione apenas imagem!');
                                }
                            }
                        });

                        

                        function readFile(file) {
                            let reader = new FileReader();
                          
                            reader.onloadend = function () {
                                processFile(reader.result, file.type);
                            }

                            reader.onerror = function () {
                                alert('There was an error reading the file!');
                            }

                            reader.readAsDataURL(file);
                        }

                        function processFile(dataURL, fileType) {
                            let maxWidth = 200;
                            let maxHeight = 200;

                            let image = new Image();
                            image.src = dataURL;

                            image.onload = function () {
                                let width = image.width;
                                let height = image.height;

                                /*var shouldResize = (width > maxWidth) || (height > maxHeight);
                                if (!shouldResize) {
                                    sendFile(dataURL);
                                    return;
                                }*/


                                let newWidth = width; //descomnetar caso for resize
                                let newHeight = height;
                                
                                //resize na imagem
                               /* if (width > height) {
                                    newHeight = height * (maxWidth / width);
                                    newWidth = maxWidth;
                                } else {
                                    newWidth = width * (maxHeight / height);
                                    newHeight = maxHeight;
                                }*/

                                //var canvas = document.createElement('canvas');
                                let canvas = $('#canvas')[0];
                                $("#canvas").fadeIn();

                                canvas.width = newWidth;
                                canvas.height = newHeight;

                               
                                let context = canvas.getContext('2d');

                                context.drawImage(this, 0, 0, newWidth, newHeight);

                                dataURL = canvas.toDataURL(fileType);

                                sendFile(dataURL);
                            };



                            image.onerror = function () {
                                alert('There was an error processing your file!');
                            };
                            
                        }


                        function sendFile(fileData) {
                            let formData = new FormData();
                            formData.append('arquivo', fileData);
                            //formData.append('idfunc', idfunc);

                          $.ajax({
                                type: 'POST',
                                url: 'saveimage.php',
                                data: formData,
                                contentType: false,
                                processData: false,
                                success: function (data) {
                                    console.log(data);

                                },
                                error: function (data) {
                                    alert('Acontenceu um erro!');
                                }
                            });

                        }



                }

});
