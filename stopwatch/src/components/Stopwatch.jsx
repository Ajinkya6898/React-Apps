import { useEffect, useState } from "react";

function Stopwatch() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        setSec(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const reset = () => {
    setMin(0);
    setSec(0);
  };

  const stop = () => {
    clearInterval(timer);
  };
  return (
    <>
      <div className="container">
        <div className="box">
          <h1>
            {min <= 10 ? "0" + min : min}:{sec <= 10 ? "0" + sec : sec}
          </h1>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
