import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import '../styles/notifications.css'
import YellowBell from '../styles/simple-yellow-bell.png'
import Clock from '../styles/basic-clock-icon.png'


export default function NotificationTabs() {
  return (
    <div className='notifications-container'>
    <h4 className='notifications-title'>Notifications
    <div className='notif-circle'>3</div>
    </h4>
    <Tabs    
    defaultTab="one"
    onChange={(tabId) => { console.log(tabId) }}
  >
    <TabList className='tabs'>
      <Tab className='tabs' tabFor="one">All</Tab>
      <Tab className='tabs' tabFor="two">Critical</Tab>
      <Tab className='tabs' tabFor="three">Warn</Tab>
      <Tab className='tabs' tabFor="four">Info</Tab>
    </TabList>
    <TabPanel className='tabs-panel' tabId="one">
      <div className='tabs-info'>
          <h4 className='tabs-info-title'>
          <div className='security-circle'>!</div>
          Security Threat
           </h4>            
          <p className='tabs-info-time'>
            <img src={Clock} className='clock-img' alt='clock icon' />    
              3 hours ago
              </p>
          <p className='tabs-info-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className='tabs-info'>
          <h4 className='tabs-info-title'>
              <img src={YellowBell} className='bell-img' alt='simple yellow bell' />
              New Sensitive Data</h4>
          <p className='tabs-info-time'>
            <img src={Clock} className='clock-img' alt='clock icon' />   
              3 hours ago</p>
          <p className='tabs-info-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className='tabs-info'>
          <h4 className='tabs-info-title'>
          <div className='info-circle'>i</div>
              New Sensitive Data</h4>
          <p className='tabs-info-time'>
            <img src={Clock} className='clock-img' alt='clock icon' />   
              3 hours ago</p>
          <p className='tabs-info-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className='tabs-info tabs-info-content-old'>
          <h4 className='tabs-info-title tabs-info-content-old'>Old Sensitive Data</h4>
          <p className='tabs-info-time tabs-info-content-old'>
            <img src={Clock} className='clock-img' alt='clock icon' />   
              12 hours ago</p>
          <p className='tabs-info-content tabs-info-content-old'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>

    </TabPanel>
    <TabPanel className=' tabs-panel' tabId="two">
      <p className='tabs-info'>Random Info</p>
    </TabPanel>
    <TabPanel className='tabs-panel' tabId="three">
      <p className='tabs-info'>Random Info</p>
    </TabPanel>
    <TabPanel className='tabs-panel' tabId="four">
      <p className='tabs-info'>Random Info</p>
    </TabPanel>
  </Tabs>
  </div>
  )
}