import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startActionCreator } from "../redux/actions/startAction";
import "./app.css";

import StopBtn from "./StopBtn";
import ResetBtn from "./ResetBtn";
import ResumeBtn from "./ResumeBtn";
import LapBtn from "./LapBtn";

export default function StartButton() {

    let [itrval, setItrval] = useState();

    let dispatch = useDispatch();
    let data = useSelector((state) => state);
    let startBtnClicked = data.start;
    let stopBtnClicked = data.stop;
    let resumeBtnClicked = data.resume;

    let updatedMS = data.ms;
    let updatedS = data.sec;
    let updatedM = data.min;
    let updatedH = data.hr;

    function run() {
        if (updatedM > 59) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS > 59) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMS > 98) {
            updatedS++;
            updatedMS = 0
        }
        updatedMS++;
        let newData = { ms: updatedMS, sec: updatedS, min: updatedM, hr: updatedH , start : true , stop : false , reset : false , resume : false , lap : false , laps : data.laps }
        dispatch(startActionCreator(newData));
    }

    function startClicked() {
        run();
        setItrval(setInterval(run, 10));
    }

    function stopClicked()
    {
        clearInterval(itrval);
    }

    if(stopBtnClicked)
    {
        stopClicked();
    }

    if(resumeBtnClicked)
    {
        startClicked();
    }


    return (
        <>
            {startBtnClicked === false ? <button type="button" class="btn btn-primary buttons" onClick={startClicked}>START</button> : ""}
            {startBtnClicked && stopBtnClicked === false ? <StopBtn /> : ""}
            {startBtnClicked && stopBtnClicked === false ? <LapBtn /> : ""}
            {stopBtnClicked ? <ResumeBtn/> : ""}
            {stopBtnClicked ? <ResetBtn/> : ""}
        </>
    )
}