import React, { useState } from 'react'

const Organise = () => {

  const [openArrival, setArrival] = useState(false);
  const [openLocation, setLocation] = useState(false);
  const [openActivities, setActivities] = useState(false);
  const [openTravelCost, setTravelCost] = useState(false);

  return (
    <form>
      <div className='border-2 '> 

        {/*This is the header of the page.*/}
        <h1 className='font-bold text-4xl p-2'>Organise Trip.</h1>

        {/* Arrival and the departure section starts here*/}
        <div onClick={()=> setArrival(!openArrival)} className='border mx-2 rounded-xl cursor-pointer'>
            <h1 className=' font-bold text-neutral-600 pl-2'>Arrival and Departure</h1>
        </div>
        {openArrival && (<div className='p-2'>
          <p>Span of the trip.</p>
          <div className='flex gap-8'>
            <div className='flex gap-2'>
              <p>Start: </p>
              <input type='date' className='border rounded-xl px-2'></input>
            </div>
            <div className='flex gap-2'>
              <p>End:</p>
              <input type='date' className='border rounded-xl px-2'></input>
            </div>
          </div>
          <p>Time to leave for the trip</p>
          <div className='flex gap-8'>
            <div className='flex gap-2'>
              <p>Arrival Time: </p>
              <input type='time' className='border rounded-xl px-2'></input>
            </div>
            <div className='flex gap-2'>
              <p>Departure Time:</p>
              <input type='time' className='border rounded-xl px-2'></input>
            </div>
          </div>

          <p>Time to return from the trip</p>
          <div className='flex gap-8'>
            <div className='flex gap-2'>
              <p>Arrival Time: </p>
              <input type='time' className='border rounded-xl px-2'></input>
            </div>
            <div className='flex gap-2'>
              <p>Departure Time:</p>
              <input type='time' className='border rounded-xl px-2'></input>
            </div>
          </div>
        </div>)}
        {/* Arrival and the departure section ends here*/}


        {/* Location section starts here*/}
        <div onClick={()=>setLocation(!openLocation)} className='border mx-2 rounded-xl'>
            <h1 className=' font-bold text-neutral-600 pl-2'>Location/Accomodation</h1>
        </div>
        {openLocation && (
          <div>
              Hello
          </div>
        )}
        {/* Location section ends here*/}

        {/* Activities section starts here*/}
        <div onClick={()=>setActivities(!openActivities)} className='border mx-2 rounded-xl'>
            <h1 className=' font-bold text-neutral-600 pl-2'>Activities</h1>
        </div>
        {openActivities && (
          <div>
            Hello
          </div>
        )}
        {/* Activities section ends here*/}

        {/* Travel Costs section starts here*/}
        <div onClick={()=>setTravelCost(!openTravelCost)} className='border mx-2 rounded-xl'>
            <h1 className=' font-bold text-neutral-600 pl-2'>Travel Costs</h1>
        </div>
        {openTravelCost && (
          <div>
            Hello
          </div>
        )}
        {/* Travel Costs section ends here*/}

        <div className='flex justify-between m-2'>
          <button className='border rounded-xl px-2 bg-green-400'>Save</button>
          <button className='border rounded-xl px-2 bg-green-400'>Invite</button>
        </div>
      </div>
    </form>
  )
}

export default Organise