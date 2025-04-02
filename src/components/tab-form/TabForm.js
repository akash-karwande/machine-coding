import { useState } from "react"
import Profile from "./Profile"
import Interest from "./Interest"
import Settings from "./Settings"
import './tabForm.css'

const TabForm = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: 'Akash',
        age: 30,
        email: 'akash@gamil.com',
        interest: ['coding', 'music'],
        theme: 'dark'
    })
    const [tabs, setTabs] = useState([
        {
            name: 'Profile',
            component: Profile,
            validate: () => {
                const err = {};
                if(!data.name || data.name.length < 2) {
                    err.name = "Name is invalid"
                }
                if(!data.age || data.age < 18) {
                    err.age = "Age is invalid"
                }
                if(!data.email || data.email.length < 2) {
                    err.email = "email is invalid"
                }
                setErrors(err);
                return err.name || err.age || err.email ? false : true
            }
        },
        {
            name: 'Interest',
            component: Interest,
            validate: () => {
                const err = {};
                if(data.interest.length === 0) {
                    err.interest = 'Please select atleast one'
                }

                setErrors(err);
                return err.interest ? false : true
            }
        },
        {
            name: 'Settings',
            component: Settings,
            validate: () => {
                return true
            }
        }
    ]);

    const ActiveTabComponent = tabs[activeTab].component;

    const submitform = () => {
        console.log(data);
    }

    const goToPrevtab = () => {
        if(tabs[activeTab].validate()) {
            setActiveTab((prev) => prev - 1)
        }
    }

    const goToNexttab = () => {
        if(tabs[activeTab].validate()) {
            setActiveTab((prev) => prev + 1)
        }
    }

    return <div className="tab-form">
        <ul className="tab-list">
            {tabs.map((tab, index) => <li onClick={() => setActiveTab(index)} className={index == activeTab? 'active':''} key={index}>{tab.name}</li>)}
        </ul>

        <div className="tab-content">
            <ActiveTabComponent data={data} setData={setData} errors={errors}/>
            <div className="submit-footer">
            {activeTab > 0 && <button className="submit" onClick={goToPrevtab}>Prev</button>}
            {activeTab == tabs.length - 1 && <button className="submit" onClick={submitform}>Submit</button>}
            {activeTab < tabs.length - 1 && <button className="submit" onClick={goToNexttab}>Next</button>}
            </div>
           
        </div>
    </div>
}

export default TabForm