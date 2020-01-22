import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.staffs) {
      return <p>No staffs added yet</p>;
    }
    return <p>Staffs exists</p>;
  }
}

export default Main;
