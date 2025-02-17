import React, { useState } from 'react'
import Activity from '../components/Activity';

const Activities = () => {
  const [activities, setActivities] = useState(
    [{
      type: 'Skiing',
      date: '20-01-2025',
      time: '08:00 - 10:00',

    },
    {
      type: 'Lunch',
      date: '20-01-2025',
      time: '08:00 - 10:00',

    },
    {
      type: 'Skiing',
      date: '20-01-2025',
      time: '08:00 - 10:00',

    }
  ]);

  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleSelectActivity = (activity) => {
    setSelectedActivity(activity);
  }

  const handleBackToList = () => {
    setSelectedActivity(null);
  };



  return (
    <div className='p-4'>
      {(selectedActivity) ? <Activity activity={selectedActivity} onClose={handleBackToList}/> : 
      (
        <div className=''>
          <ul className='list-none'>
            {activities.map((activity) =>{
              <li>
                key={activity.id}
                className="cursor-pointer p-2 border mb-2 hover:bg-gray-200"
                onClick={() => handleSelectActivity(activity)}
              </li>
            })}
          </ul>

        </div>
      )}

    </div>
  )
}

export default Activities