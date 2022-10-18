import React from 'react'
import Day from './Day'

const Month = ({month}) => {
    return (
        <div className='flex-1 grid grid-cols-7 grid-rows-5'>
            {month.map((row, index)=>(
                <React.Fragment key={index}>
                    {row.map((day, idx)=>(
                        <Day day={day} key={idx} rowIdx={index}/>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Month
