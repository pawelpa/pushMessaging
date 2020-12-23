
//Get notification permission from user
Notification.requestPermission((status) => {
    console.log("Notification prermission status: ", status)
});

//Display test notification to user
function displayNotification() {
    if(Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
            let options = {
                body: "Here is your notification body!",
                icon: "seaweed.png",
                vibrate: [100,50,100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                },
                actions: [
                    {action:'explore',title:"Explore this new world"},
                    {action:'close', title:"Close this notification"}
                ]

            };
            reg.showNotification("Hello! This is your first notification!", options)
        })
    }
}

displayNotification();