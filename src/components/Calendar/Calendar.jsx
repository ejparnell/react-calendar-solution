import './Calendar.css'

export default function Calendar({ days, dates, handleCalendarItemEvent }) {

    return (
        <div className='calendar-contaier' onClick={handleCalendarItemEvent}>
        {dates.map(function(date, dateIdx) {
            return (
                <div key={dateIdx} className={'calendar-item'}>
                    <p>{days[dateIdx % 7].name}</p>
                    <p>{date}</p>
                </div>
            )
        })}
        </div>
    )
}