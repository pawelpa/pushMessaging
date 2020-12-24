
function requestNotification() {
    //Get notification permission from user
    Notification.requestPermission((status) => {
        console.log("Notification prermission status: ", status)
    });
}

//Display test notification to user
function displayNotification() {
    if(Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then((reg) => {
            let options = {
                body: "Notification from web page",
                icon: "seaweed.png",
                vibrate: [100,50,100],
                data: {
                    dateOfArrival: Date.now(),
                    primaryKey: 1
                },
                actions: [
                    {action:'explore',title:"Explore"},
                    {action:'close', title:"Close"}
                ]

            };
            reg.showNotification("Hello! This is your first notification!", options)
        })
    } else if(Notification.permission === 'denied') {
        console.log("No permission to show notifications")
    } else {
        requestNotification();
    }
}

displayNotification();