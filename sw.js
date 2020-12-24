console.log("Hello from Service Worker");

self.addEventListener('notificationclose', (e) => {
    let notification = e.notification;
    let primaryKey = notification.data.primaryKey;
    console.log('Closed this notification: ' + primaryKey);
});

self.addEventListener('notificationclick', (e) => {
    
    let notification = e.notification;
    let primaryKey = notification.data.primaryKey;
    let action = e.action;

    if(action === 'close') {
        notification.close();
        console.log("Notifcation closed.")
    } else {
        clients.openWindow('https://pawelpa.github.io/todoapp/');
        console.log("Notification open url.")
        notification.close();

    }
});
//register push
self.addEventListener('push', (e) => {
    let options = {
        body:"Notifiction generated from push",
        icon:"seaweed.png",
        data: {
            primaryKey: 2,
            dateOfArrival: Date.now()
        },
        actions: [
            {action:'close', title:"Close"},
            {action:'explore', title:'Explore the world'}
        ]
    };

    e.waitUntil(
        self.registration.showNotification("Hello world", optoins)
    );
});