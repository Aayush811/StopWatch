import { useDispatch } from "react-redux";
import { resetActionCreator } from "../redux/actions/resetAction";
import "./app.css";


export default function ResetBtn() {
    let dispatch = useDispatch();

    function resetClicked() {
        let newObj = {
            hr: 0,
            min: 0,
            sec: 0,
            ms: 0,
            start: false,
            stop: false,
            reset: false,
            resume: false,
            lap: false,
            laps: []
        }
        dispatch(resetActionCreator(newObj))
    }

    return (
        <button type="button" class="btn btn-outline-warning buttons" onClick={resetClicked}>RESET</button>
    )
}