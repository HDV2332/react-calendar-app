import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
const dateFormat = 'DD-MM-YY'
const Day = ({day, rowIdx}) => {
    const [dayEvents, setDayEvents] = useState([])
    const {setDaySelected, setShowEventModal, filterEvents, setSelectedEvent} = useContext(GlobalContext)

    useEffect(()=>{
        const events = filterEvents.filter((evt) =>
            dayjs(evt.day).format(dateFormat) === day.format(dateFormat)
        );
    setDayEvents(events);
    },[filterEvents, day])

    const getCurrentDayClass=()=>{
        return day.format(dateFormat) === dayjs().format(dateFormat) ? 'bg-blue-600 text-white rounded-full w-7' : ''
    } 
    return (
        <div className='border border-gray-200 flex flex-col'>
            <header className='flex flex-col items-center'>
                {rowIdx === 0 && 
                    <p className='text-sm mt-1'>
                        {day.format('ddd').toUpperCase()}
                    </p>
                }
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                        {day.format('DD')}
                </p>
            </header>
            <div 
                className='flex-1 cursor-pointer'
                onClick={()=>{
                    setDaySelected(day);
                    setShowEventModal(true);
                }}
            >
                {
                    dayEvents.map((event, index) => (
                        <div
                            key={index}
                            onClick={()=> setSelectedEvent(event)}
                            className={`bg-${event.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
                        >
                            {event.title}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Day