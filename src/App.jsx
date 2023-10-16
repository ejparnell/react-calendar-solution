import { useState } from 'react'
import Calendar from './components/Calendar/Calendar'
import CalendarEvents from './components/CalendarEvents/CalendarEvents'
import './App.css'

function App() {
  const [currentEvent, setCurrentEvent] = useState('')

  const days = [
    {
      name: "Sunday"
    },
    {
      name: "Monday"
    },
    {
      name: "Tuesday"
    },
    {
      name: "Wednesday"
    },
    {
      name: "Thursday"
    },
    {
      name: "Friday"
    },
    {
      name: "Saturday"
    },
  ]

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({length: 28}, (x, i) => i + 1)

  const calendarEvents = [
    { name: 'holiday', bgClass: 'holiday-yellow' },
    { name: 'work', bgClass: 'work-blue' },
    { name: 'errands', bgClass: 'errands-green' },
    { name: 'sick', bgClass: 'sick-red' }
  ]

  function handleEventSelect(event) {
    const clickedEvent = event.target.className.replace('calendar-events', '').trim()
    setCurrentEvent(clickedEvent)
  }

  function handleCalendarItemEvent(event) {
    if (!currentEvent) return
    event.target.classList.add(currentEvent)
  }

  return (
    <div className="App">
      <h1>React Calendar</h1>
      <CalendarEvents 
        calendarEvents={calendarEvents}
        handleClick={handleEventSelect}
        currentEvent={currentEvent}
      />
      <Calendar 
        days={days} 
        dates={dates}
        handleCalendarItemEvent={handleCalendarItemEvent}
      />
    </div>
  )
}

export default App
