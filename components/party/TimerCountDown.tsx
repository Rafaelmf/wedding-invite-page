import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;
const colorsList = [
  "df0c06",
  "fd4600",
  "#ffb400",
  "#00a364",
  "#0075cb",
  "#6f30a4",
];

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 10,
};

const renderTime = (dimension: string, time: number) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="text" style={{ marginRight: "5px" }}>
        {time}
      </div>
      <div className="text">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

const TimerCountDown = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = new Date(2023, 4, 22, 8).getTime() / 1000; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "20px",
        borderRadius: "5px",
        padding: "1em",
      }}
    >
      <CountdownCircleTimer
        {...timerProps}
        colors="#fd4600"
        trailColor="#f2f2f2"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Dias", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#ffb400"
        trailColor="#f2f2f2"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Horas", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#00a364"
        trailColor="#f2f2f2"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Minutos", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#0075cb"
        trailColor="#f2f2f2"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }: any) => (
          <span style={{ color }}>
            {renderTime("Segundos", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default TimerCountDown;
