// @flow
import React, { Component } from 'react';

import MenuItem from './MenuItem';
import NavHeader from './NavHeader';

// import styles from './index.css';

class MenuWrapper extends Component {

  render() {

    const { currentLeftTab, handleNavClick, navOpen } = this.props;

    const menuArray = [
      {
        text: `Dashboard`,
        icon: `dashboard`
      },
      {
        text: `Real Time Testing`,
        icon: `realTime`
      },
      {
        text: `Visual UI Testing`,
        icon: `visual`
      },
      {
        text: `Automation`,
        icon: `robot`
      },
      {
        text: `Test Logs`,
        icon: `testlogs`
      },
      {
        text: `Issue Tracker`,
        icon: `issuetracker`
      },
      {
        text: `Settings`,
        icon: `24`
      },
    ];

    return (
      <div>
        <NavHeader navOpen={navOpen}/>
        {menuArray.map(item => (
          <MenuItem 
            data={item} 
            key={item.text} 
            currentLeftTab={currentLeftTab} 
            handleNavClick={handleNavClick} 
            navOpen={navOpen} />
        ))}
      </div>
    );
  }
}
export default MenuWrapper;
