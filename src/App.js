import Timer from "./component/Timer";
import LapArea from "./component/LapArea";
import { useSelector } from "react-redux";

function App() {
  let data = useSelector(state => state)
  let lapsArr = data.laps;
  
  return (
    <div className="App">
      <Timer/>
      {lapsArr.length > 0 ? <LapArea/> : ""}      
    </div>
  );
}

export default App;
