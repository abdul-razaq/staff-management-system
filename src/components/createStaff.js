import React from 'react';

class CreateStaff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      salary: '',
      date: '',
    };
  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.addStaffData(this.state);
  }

  render() {
    return (
      <div>
        <h1>Add Staff</h1>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Salary</label>
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Date Joined</label>
            <input
              type="date"
              name="date"
              placeholder="Date Joined"
              onChange={this.onInputChange}
            />
          </div>
          <button class="ui button" type="submit">
            Add Staff
          </button>
        </form>
      </div>
    );
  }
}

export default CreateStaff;
