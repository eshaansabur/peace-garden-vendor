import React from 'react';
import './Topbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import user1 from '../../images/person 1.png';
const Topbar = () => {
    const [newNotifications, setNewNotifications] = useState(5);
    const [settingsTask, setSettingsTask] = useState(0);
    const notifSetter =(zero) => {
        setNewNotifications(zero);
    }
    return (
        <div className='topbar'>
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">Peace Garden Vendor Admin</span>
                </div>
                <div className="topright">
                    <div className="topbariconcontainer">
                    <form class="d-flex">
                    <input class="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    </div>
                    <div className="topbariconcontainer">
                    <NotificationsIcon></NotificationsIcon>
                    {
                        newNotifications> 0 ? <span className='topIconBadge'>{newNotifications}</span> : ''
                    }
                    </div>
                    <div className="topbariconcontainer">
                    <SettingsIcon></SettingsIcon>
                    {
                        settingsTask > 0 ? <span className='topIconBadge'>{settingsTask}</span> : ''
                    }
                    </div>
                    <img className='topavatar' src={user1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;