import logo from './logo.svg';
import './App.css';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import SideBar from './components/SideBar';
import { useContext, useEffect, useState } from 'react';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal } = useContext(GlobalContext)
  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  return (
    <>
      {showEventModal &&
        <EventModal/>
      }
      <div className="h-screen flex flex-col">
        <CalendarHeader/>
        <div className='flex flex-1'>
          <SideBar/>
          <Month month={currentMonth}/>
        </div>
      </div>
    </>
  );
}

export default App;
