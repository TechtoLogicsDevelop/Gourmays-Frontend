/**
  Follow on Twitter: @tukkajukka
  http://lemanse.fi

  This example shows how to use React Bootstrap with React.
  
  You need to include the latest Bootstrap's CSS in your project
  which is then picked up by React Bootstrap (it uses the same CSS classes).
  
  React Bootstrap gives you Bootstrap's elements as React components that
  you then use in your own React components.
*/

/*
  Import the React Bootstrap components that you want to use.
  
  In a real environment (Webpack / Browserify, ES6) this would be:
    import { Tab, Tabs } from 'react-bootstrap';
*/
let { Tab, Tabs } = ReactBootstrap;

class MyComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1,
    };

    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <Tab eventKey={1} title="Tab 1">
          Tab 1121 content
        </Tab>
        <Tab eventKey={2} title="Tab 2">
          Tab 2 content
        </Tab>
        <Tab eventKey={3} title="Tab 3" disabled>
          Tab 3 content
        </Tab>
        <Tab eventKey={4} title="Tab 4">
          Tab 4 content is displayed by default
        </Tab>
        <Tab eventKey={5} title="Tab 5">
          Tab 5 content
        </Tab>
      </Tabs>
    );
  }

  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab,
    });
  }
}

ReactDOM.render(
  <MyComponent activeTab={4} />,
  document.getElementsByClassName("container")[0]
);
