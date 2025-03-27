import Card from "./Card"
import FileExplorer from "./file-explorer/FileExplorer"

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search" />
            </div>
            <div className="card-container">
                <FileExplorer />
            </div>
        </div>
    )
}

export default Body