import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const App = ({ currentTab, handleSelectTab }) => {
  console.log('currentTab: ', currentTab);
  return (
    <div>
      <Tabs activeKey={currentTab} onSelect={handleSelectTab}>
        <Tab eventKey={1} title="Demo">
          Tab 1 Content
        </Tab>
        <Tab eventKey={2} title="QR Test">
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title="Tab 3" disabled>
          Tab 3 content
        </Tab>
      </Tabs>
    </div>
  );
};

App.propTypes = {
  currentTab: PropTypes.number.isRequired,
  handleSelectTab: PropTypes.func.isRequired,
};

export default App;
