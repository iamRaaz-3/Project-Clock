// function Rtime() {
//   let dateToday
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             This is the clock that shows the time in Bharat at times
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Rtime;
import { useState, useEffect } from "react";

function Rtime() {
  const [dateToday, setDateToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateToday(new Date());
    }, 1000); // updates every second

    return () => clearInterval(timer); // cleanup when component unmounts
  }, []);

  const dateString = dateToday.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });



  const timeString = dateToday.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata"
  });

  return (
    <div className="container2 ">
      <div className="row">
        <div className="col">
          <h3>This is the clock that shows the time in Bharat  :       {dateString} - {timeString} </h3>
          
        </div>
      </div>
    </div>
  );
}

export default Rtime;


