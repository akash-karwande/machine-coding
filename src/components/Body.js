import { useState } from "react";
import AutoComplete from "./auto-complete-search/AutoComplete";
import FileExplorer from "./file-explorer/FileExplorer";
import ProgressBar from "./ProgressBar/ProgressBar";
import Pagination from "./pagination/Pagination";
import TabForm from "./tab-form/TabForm";
import OtpInput from "./otp-input/OtpInput";

const Body = () => {
  const [apps, setApps] = useState([
    {
      name: 'OTP Input',
      component: OtpInput
    },
    {
      name: 'File Explorer',
      component: FileExplorer
    },
    {
      name: 'Progress Bar',
      component: ProgressBar
    },
    {
      name: 'Auto Complete Search',
      component: AutoComplete
    },
    {
      name: 'Pagination',
      component: Pagination
    },
    {
      name: 'Tab Form',
      component: TabForm
    }
  ]);

  const [activeApp, setActiveApp] = useState(0);
  const ActiveComponent = apps[activeApp].component;

  const setApp = (index) => {
    setActiveApp(index);
  };

  return (
    <div className="body">
      <div className="search">
        <ul className="app-list">
          {apps.map((app, index) => <li key={index} className={`list-item ${activeApp == index? 'active': ''}`} onClick={() => setApp(index)}>
            {app.name} {apps.length -1 !== index && <span className="divider"> | </span>}
          </li>)}
        </ul>
      </div>
      <div className="card-container">
        <div className="card">
            <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default Body;
