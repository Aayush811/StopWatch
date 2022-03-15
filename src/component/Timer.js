import { useSelector } from "react-redux";
import StartButton from "./StartButton";
import "./app.css";

export default function Timer() {
    let data = useSelector((state) => state);
    return (
        <>
            <div className="clock-container">
                <div className="timer-container">
                    <div className="hours box">{data.hr > 9 ? data.hr : "0" + data.hr}</div>
                    <h3>:</h3>
                    <div className="mins box">{data.min > 9 ? data.min : "0" + data.min}</div>
                    <h3>:</h3>
                    <div className="secs box">{data.sec > 9 ? data.sec : "0" + data.sec}</div>
                    <h3>:</h3>
                    <div className="mili-secs box">{data.ms > 9 ? data.ms : "0" + data.ms}</div>
                </div>
                <div className="button-container">
                    <StartButton />
                </div>
            </div>
        </>
    )
}