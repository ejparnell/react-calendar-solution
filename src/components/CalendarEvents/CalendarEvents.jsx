import './CalendarEvents.css'

export default function CalendarEvents({ calendarEvents, handleClick, currentEvent }) {
    return (
        <div className='calendar-events-container'>
            {calendarEvents.map(function(calendarEvent, idx) {
                const isSelected = currentEvent === calendarEvent.bgClass ? 'highlight': ''
                return (
                    <div 
                        key={idx} 
                        className={calendarEvent.bgClass + ' ' + 'calendar-events' + ' ' + isSelected}
                        onClick={handleClick}
                    >
                        {calendarEvent.name}
                    </div>
                )
            })}
        </div>
    )
}