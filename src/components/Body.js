import { useState } from "react";
import AutoComplete from "./auto-complete-search/AutoComplete";
import FileExplorer from "./file-explorer/FileExplorer";
import ProgressBar from "./ProgressBar/ProgressBar";
import Pagination from "./pagination/Pagination";

const Body = () => {
  const [activeApp, setActiveApp] = useState("");
  const setApp = (app) => {
    setActiveApp(app);
  };

  return (
    <div className="body">
      <div className="search">
        <ul className="app-list">
          <li className={`list-item ${activeApp == "FileExplorer"? 'active': ''}`} onClick={() => setApp("FileExplorer")}>
            File Explorer
          </li>
          <li className={`list-item ${activeApp == "ProgressBar"? 'active': ''}`} onClick={() => setApp("ProgressBar")}>
            Progress Bar
          </li>
          <li className={`list-item ${activeApp == "AutoComplete"? 'active': ''}`} onClick={() => setApp("AutoComplete")}>
            Autocomplete
          </li>
          <li className={`list-item ${activeApp == "Pagination"? 'active': ''}`} onClick={() => setApp("Pagination")}>
            Pagination
          </li>
        </ul>
      </div>
      <div className="card-container">
        <div className="card">
        {/* <Pagination /> */}
          {activeApp == "FileExplorer" && <FileExplorer />}
          {activeApp == "ProgressBar" && <ProgressBar />}
          {activeApp == "AutoComplete" && <AutoComplete />}
          {activeApp == "Pagination" && <Pagination />}
        </div>
      </div>
    </div>
  );
};

export default Body;
