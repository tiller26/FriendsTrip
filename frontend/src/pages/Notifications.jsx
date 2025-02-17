import React, { useState } from 'react';
import Notification from '../components/Notification';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      organiser: 'Modiehi',
      to: 'Guests',
      message: 'The trip will take 5 days. We have 26 days left till the trip. I hope everyone is prepared to go on a journey with us. Do not forget to pack clothes for any kind of weather. The weather in North West is unpredictable in Summer.',
    },
    {
      id: 2,
      organiser: 'John Doe',
      to: 'Team',
      message: 'Meeting at 10 AM tomorrow to discuss the upcoming project. Please be on time.',
    },
  ]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleSelectNotification = (notification) => {
    setSelectedNotification(notification);
  };

  const handleBackToList = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="p-4">
      {selectedNotification ? (
        <Notification notification={selectedNotification} onClose={handleBackToList} />
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Notifications</h2>
          <ul className="list-none">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="cursor-pointer p-2 border mb-2 hover:bg-gray-200"
                onClick={() => handleSelectNotification(notification)}
              >
                <strong>Organiser:</strong> {notification.organiser} <br />
                <strong>To:</strong> {notification.to}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
