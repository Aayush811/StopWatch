import { useDispatch, useSelector } from "react-redux";
import { stopActionCreator } from "../redux/actions/stopAction";
import "./app.css";


export default function StopBtn() {
    let dispatch = useDispatch();
    let state = useSelector((state) => state)

    function stopClicked() {
        let newObj = {
            hr: state.hr,
            min: state.min,
            sec: state.sec,
            ms: state.ms,
            start: state.start,
            stop: !state.stop,
            reset: state.reset,
            resume: state.resume,
            lap: state.lap,
            laps: state.laps
        }

        dispatch(stopActionCreator(newObj));
    }

    return (
        <button type="button" class="btn btn-outline-danger buttons" onClick={stopClicked}>STOP</button>
    )
}