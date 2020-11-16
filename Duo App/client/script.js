//See if the browser supports Service Workers, if so try to register one
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js").then(function(registering){
      // Registration was successful
      console.log("Browser: Service Worker registration is successful with the scope",registering.scope);
    }).catch(function(error){
      //The registration of the service worker failed
      console.log("Browser: Service Worker registration failed with the error",error);
    });
  }else{
    //The registration of the service worker failed
    console.log("Browser: I don't support Service Workers :(");
  
  }
  //Asking for permission with the Notification API
  if(typeof Notification!==typeof undefined){ //First check if the API is available in the browser
    Notification.requestPermission().then(function(result){ 
      //If accepted, then save subscriberinfo in database
      if(result==="granted"){
        console.log("Browser: User accepted receiving notifications, save as subscriber data!");
        navigator.serviceWorker.ready.then(function(serviceworker){ 
          serviceworker.showNotification('Push Notification activated!', {
          	body: 'Buzz! Buzz!',
          	icon: '../images/icons/icon-152x152.png',
          	vibrate: [200, 100, 200, 100, 200, 100, 200],
          	tag: 'vibration-sample'
            });//When the Service Worker is ready, generate the subscription with our Serice Worker's pushManager and save it to our list
          const VAPIDPublicKey="BFQYp80cDUUmHWzuI3--DTr6AXGMeCWk205NYShohQ0uh-Efhlew9kOCGbD-8Mpapv5mB8gGFk8eEUl8yiw-dtE"; // Fill in your VAPID publicKey here
          const options={applicationServerKey:VAPIDPublicKey,userVisibleOnly:true} //Option userVisibleOnly is neccesary for Chrome
          serviceworker.pushManager.subscribe(options).then((subscription)=>{
            //POST the generated subscription to our saving script (this needs to happen server-side, (client-side) JavaScript can't write files or databases)
            let subscriberFormData=new FormData();
            subscriberFormData.append("json",JSON.stringify(subscription));
            fetch("data/saveSubscription.php",{method:"POST",body:subscriberFormData});
          });
        });
      }
    }).catch((error)=>{
      console.log(error);
    });
  }

  self.addEventListener("notificationclick",function(clicking){
    const pageToOpen="https://i413957.hera.fhict.nl/";
    const promiseChain=clients.openWindow(pageToOpen);
    event.waitUntil(promiseChain);
  });

let installPrompt;
let intalling = false;
const addBtn = document.getElementById('installbtn');
window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	installPrompt = e;
	// Update UI to notify the user they can add to home screen
	
	if(!intalling){
		addBtn.style.display = 'block';
	}
	});
  addBtn.addEventListener('click', (e) => {
	// hide our user interface that shows our A2HS button
	addBtn.style.display = 'none';
//Recognize the install variable from before?
installPrompt.prompt();
//..Put code here that hides your install button
installPrompt.userChoice.then((choiceResult)=>{
//Hide the install button here again
addBtn.style.display = 'none';
if(choiceResult.outcome=="accepted"){
  //..If it was not accepted to install than show the install button again
  intalling = true;
}
installPrompt=null;
});
addBtn.style.display = 'none';
});

window.addEventListener('load', () => {
  if (matchMedia('(display-mode: standalone)').matches) {
    addBtn.style.display = 'none';
    console.log('Launched: Installed');
  } else {
    addBtn.style.display = 'none';
    console.log('Launched: Browser Tab');
  }
});