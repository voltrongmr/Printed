self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated.');
});

self.addEventListener('push', function(event) {
  var options = {
    body: event.data.text(),
    icon: '/path/to/icon.png',
    badge: '/path/to/badge.png'
  };
  event.waitUntil(
    self.registration.showNotification('New Notification', options)
  );
});
