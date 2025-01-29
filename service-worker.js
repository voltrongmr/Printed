// service-worker.js
self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'You have a new notification!',
    icon: '/images/icon.png',
    badge: '/images/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification('New Notification', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://yourwebsite.com') // The URL you want to open when clicking the notification
  );
});
