import { useSelector } from "react-redux";

export default function LapArea() {
    let data = useSelector(state => state)
    let lapsArr = data.laps;

    return (
        <div className="lap-container">
            <div className="heading"><h1>LAPS</h1></div>
            <div className="laps">
                <ul>
                    {lapsArr.map((e , idx , array) => {
                        let ele = array[(array.length - 1) - idx]
                        return <li key={idx}> 
                            <div className="individual-lap">
                                <div className="count"><b>{array.length - idx}</b></div>
                                <div className="little-box">{ele.hr > 9 ? ele.hr : "0" + ele.hr}</div>
                                <h5>:</h5>
                                <div className="little-box">{ele.min > 9 ? ele.min : "0" + ele.min}</div>
                                <h5>:</h5>
                                <div className="little-box">{ele.sec > 9 ? ele.sec : "0" + ele.sec}</div>
                                <h5>:</h5>
                                <div className="little-box">{ele.ms > 9 ? ele.ms : "0" + ele.ms}</div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    )
}