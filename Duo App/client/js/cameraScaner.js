// let retrievedData = [];
// localStorage.setItem("localArray", JSON.stringify(retrievedData));
        var _scannerIsRunning = false;
        function startScanner() {
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",              
                    numOfWorkers: navigator.hardwareConcurrency,
                    target: document.querySelector('#scanner-container'),
                    constraints: {
                        facingMode: "environment"
                    },
                },
                decoder: {
                    readers: [
                        "code_128_reader",
                        //"ean_reader",
                        "ean_8_reader",
                        //"code_39_reader",
                        //"code_39_vin_reader",
                        //"codabar_reader",
                        //"upc_reader",
                        //"upc_e_reader",
                        //"i2of5_reader"
                    ],
                    debug: {
                        showCanvas: true,
                        showPatches: true,
                        showFoundPatches: true,
                        showSkeleton: true,
                        showLabels: true,
                        showPatchLabels: true,
                        showRemainingPatchLabels: true,
                        boxFromPatches: {
                            showTransformed: true,
                            showTransformedBox: true,
                            showBB: true
                        }
                    }
                },

            }, function (err) {
                if (err) {
                    console.log(err);
                    return
                }

                console.log("Initialization finished. Ready to start");
                Quagga.start();

                // Set flag to is running
                _scannerIsRunning = true;
            });

            // Quagga.onProcessed(function (result) {
            //     var drawingCtx = Quagga.canvas.ctx.overlay,
            //     drawingCanvas = Quagga.canvas.dom.overlay;

            //     if (result) {
            //         if (result.boxes) {
            //             drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
            //             result.boxes.filter(function (box) {
            //                 return box !== result.box;
            //             }).forEach(function (box) {
            //                 Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
            //             });
            //         }

            //         if (result.box) {
            //             Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
            //         }

            //         if (result.codeResult && result.codeResult.code) {
            //             Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            //         }
            //     }
            // });


            Quagga.onDetected(function (result) {
                console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
                fetch(`https://shouldieatit.herokuapp.com/products/${result.codeResult.code}`)
                .then(response => response.json())
                .then(product => {
                   // for(product of products){
                       console.log("API BARCODE: "+product.barcode);
                        if(product.barcode.includes(result.codeResult.code)){
                            window.location.href = 'https://i413957.hera.fhict.nl/product-info.html';
                        localStorage.setItem("result", result.codeResult.code);
                    }
                 // }
                });

            });
        };
       

        // Start/stop scanner
    //    document.getElementById("btn").addEventListener("click", function () {
            if (_scannerIsRunning) {
                Quagga.stop();
                _scannerIsRunning = false;
            } else {
                startScanner();
            }
     //   }, false);

