import React from 'react'

const Activity = ({activity, onClose}) => {
    if(!activity) return null;

    
    return (
    <div>
        <div className='border'>
            <div className=''>
                <p>Date: {activity.date}</p>
            </div>
            <div className=''>
                <p>Time: {activity.time}</p>
            </div>
            <div className=''>
                <p>Type: {activity.type}</p>
            </div>
        </div>
    </div>
    )
}

export default Activity