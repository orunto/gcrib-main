import CalendarIcon from '../images/Calendar.svg'

const CalendarButton = () => {
    return(
    <div className='CalendarButton'>
        <img src={CalendarIcon} alt="Calendar Icon"/>
        <h2>View Fashion Calendar</h2>
    </div>
    )
}

export default CalendarButton;