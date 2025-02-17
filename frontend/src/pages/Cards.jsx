import React from 'react'
import CardItem from '../components/CardItem'
import Top1 from '../assets/Top1.jpg'
import Top2 from '../assets/Top2.jpg'
import Top3 from '../assets/Top3.jpg'


const Cards = () => {
  return (
    <div className=''>
        <h4 className='text-center text-4xl text-black font-bold p-6'>Visit these places with fiends!</h4>
            <div className='border-neutral-500 border-solid shadow rounded-lg bg-white p-2'>
                <ul className='items-center justify-center flex-wrap sm:flex gap-2'>
                    <CardItem 
                        src={Top1}
                        text='Explore the hidden adventures'
                        label='Adventure'
                        path='/'

                    />

                    <CardItem 
                        src={Top2}
                        text='Explore the hidden adventures'
                        label='Adventure'
                        path='/'

                    />

                    <CardItem 
                        src={Top3}
                        text='Explore the hidden adventures'
                        label='Adventure'
                        path='/'

                    />

                    <CardItem 
                        src={Top3}
                        text='Explore the hidden adventures'
                        label='Adventure'
                        path='/'

                    />
                </ul>
            </div>
    </div>
  )
}

export default Cards