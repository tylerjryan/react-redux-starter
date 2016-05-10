import React, { PropTypes } from 'react';
import { Button, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

const TabsInstance = ({ entities, onEntityClick }) => {
  console.log('entities: ', entities);
  console.log('onClick: ', onEntityClick);
  return (
    <div>
      <Button bsStyle="primary" onClick={onEntityClick} >Add entity</Button>
      {entities.map(entity => <p>{entity}</p>)}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
          <Col sm={2}>
            <Nav bsStyle="pills" stacked>
              <NavItem eventKey="first">
                Tab 1
              </NavItem>
              <NavItem eventKey="second">
                Tab 2
              </NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
                Tab 1 content
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Tab 2 content
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

TabsInstance.propTypes = {
  entities: PropTypes.array,
  onEntityClick: PropTypes.func.isRequired,
};


export default TabsInstance;
