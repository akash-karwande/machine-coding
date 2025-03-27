import FileExplorer from "./file-explorer/FileExplorer";
import ProgressBar from "./ProgressBar/ProgressBar";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="card-container">
        <div className="card">
          <FileExplorer />
        </div>
        <div className="card">
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default Body;
