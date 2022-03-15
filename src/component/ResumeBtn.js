import { useDispatch, useSelector } from "react-redux";
import { resumeActionCreator } from "../redux/actions/resumeAction";
import "./app.css";


export default function ResumeBtn()
{
    let dispatch = useDispatch();
    let state = useSelector(state => state)

    function resumeClicked()
    {
        let newObj = {
            hr : state.hr,
            min : state.min,
            sec : state.sec,
            ms : state.ms,
            start : state.start,
            stop : state.stop,
            reset : state.reset,
            resume : !state.resume,
            lap : state.lap,
            laps : state.laps
        }
        dispatch(resumeActionCreator(newObj));
    }

    return(
    <button type="button" class="btn btn-outline-primary buttons" onClick={resumeClicked}>RESUME</button>
    )
}