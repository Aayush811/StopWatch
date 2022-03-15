import { useDispatch, useSelector } from "react-redux";
import { lapActionCreator } from "../redux/actions/lapAction";
import "./app.css";


export default function LapBtn() {
    let dispatch = useDispatch();
    let state = useSelector(state => state);

    function lapClicked() {
        let newArr = state.laps;
        newArr.push({
            hr: state.hr,
            min: state.min,
            sec: state.sec,
            ms: state.ms
        })

        let newObj = {
            hr: state.hr,
            min: state.min,
            sec: state.sec,
            ms: state.ms,
            start: state.start,
            stop: state.stop,
            reset: state.reset,
            resume: state.resume,
            lap: state.lap,
            laps: newArr
        }

        dispatch(lapActionCreator(newObj));
    }

    return (
        <button type="button" class="btn btn-outline-info buttons" onClick={lapClicked} >LAP</button>

    )
}