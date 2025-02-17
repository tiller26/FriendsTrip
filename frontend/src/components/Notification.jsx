import React from 'react';

const Notification = ({ notification, onClose }) => {
  if (!notification) return null;

  return (
    <div className="border p-4">
      <button onClick={onClose} className="mb-2 text-blue-500 underline">Back</button>
      <div className="border p-4">
        <div className="pl-2 border">
          <p>Organiser: {notification.organiser}</p>
        </div>
        <div className="pl-2 border">
          <p>To: {notification.to}</p>
        </div>
        <div className="pl-2 border">
          <p className="pt-1 pb-2">{notification.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
