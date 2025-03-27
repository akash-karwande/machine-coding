import Item from "./Item"
import "./bar.css";

const ProgressBar =  () => {
    const percentage = [10, 30, 40, 60, 80, 100]
    return(
        <div className="progress-bar-container">
            <h1>Progress Bar</h1>
            {percentage.map((val) => {
               return <Item key={val} progress={val} />
            })}
        </div>
    )
}


export default ProgressBar