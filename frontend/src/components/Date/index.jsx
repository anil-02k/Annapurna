import './style.scss';

function dateFromDay(year, day){
  let newYear;
  if (day > 365) {
    newYear = year + 1;
  } else {
    newYear = year;
  }
  var date = new Date(newYear, 0); // initialize a date in `year-01-01`
  return new Date(date.setDate(day % 365)); // add the number of days
}

const options = { year: "numeric", month: "long", day: "numeric" }

const DateComponent = (props) => {
  // Show current date instead of calculated date from timeline
  const currentDate = new Date();
  return (
    <div className="date">
      {currentDate.toLocaleDateString(undefined, options)}
    </div>
  )
}

export default DateComponent;