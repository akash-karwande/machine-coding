import React, { useState, Suspense } from "react";

const OtpInput = React.lazy(() => import('./otp-input/OtpInput'));
const AutoComplete = React.lazy(() => import('./auto-complete-search/AutoComplete'));
const FileExplorer = React.lazy(() => import('./file-explorer/FileExplorer'));
const ProgressBar = React.lazy(() => import('./ProgressBar/ProgressBar'));
const Pagination = React.lazy(() => import('./pagination/Pagination'));
const TabForm = React.lazy(() => import('./tab-form/TabForm'));

const Body = () => {
  const apps = [
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
  ];

  const [activeApp, setActiveApp] = useState(0);
  const ActiveComponent = apps[activeApp].component;

  const setApp = (index) => {
    setActiveApp(index);
  };

  return (
    <div className="body">
      <div className="search">
        <ul className="app-list">
          {apps.map((app, index) => <li key={index} className={`list-item ${activeApp == index ? 'active' : ''}`} onClick={() => setApp(index)}>
            {app.name} {apps.length - 1 !== index && <span className="divider"> | </span>}
          </li>)}
        </ul>
      </div>
      <div className="card-container">
        <div className="card">
          <Suspense fallback={<p>Loading...</p>}>
            <ActiveComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Body;
