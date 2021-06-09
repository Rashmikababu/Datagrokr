import React from "react";

class Sample extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Mobile_No: "",
      Account_no: "",
      Branch: "",
      database: ""
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeMobile_no = this.changeMobile_no.bind(this);
    this.changedatabase = this.changedatabase.bind(this);
    this.changeAccount_no = this.changeAccount_no.bind(this);
    this.changeBranch = this.changeBranch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeFirstName(event) {
    this.setState({
      FirstName: event.target.value
    });
  }
  changeEmail(event) {
    this.setState({
      Email: event.target.value
    });
  }
  changeLastName(event) {
    this.setState({
      LastName: event.target.value
    });
  }
  changeBranch(event) {
    this.setState({
      Branch: event.target.value
    });
  }
  changeMobile_no(event) {
    this.setState({
      Mobile_No: event.target.value
    });
  }
  changeAccount_no(event) {
    this.setState({
      Account_no: event.target.value
    });
  }
  changedatabase(event) {
    this.setState({
      database: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const data = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Mobile_No: this.state.Mobile_No,
      Account_no: this.state.Account_no,
      Branch: this.state.Branch,
      database: this.state.database
    };
    console.log(data);
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "50px"}}>
        <form onSubmit={this.onSubmit}>
          <div className="card " style={{ padding: "10px" }}>
          <h3 className="card-title" style={{textAlign:"center"}}>Personal Details</h3>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter FirstName"
                value={this.state.FirstName}
                onChange={this.changeFirstName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter LastName"
                value={this.state.LastName}
                onChange={this.changeLastName}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={this.state.Email}
                onChange={this.changeEmail}
              />
            </div>
            <div className="form-group">
              <label>Mobile No</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Mobile No"
                value={this.state.Mobile_No}
                onChange={this.changeMobile_no}
              />
            </div>
          </div>
          <div className="card" style={{marginTop:"20px"}}>
            <div className="form-group">
            <h3 className="card-title" style={{textAlign:"center"}}>Account Details</h3>
              <label> Account Holder Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter A/c holder Name"
                value={this.state.Account_no}
                onChange={this.changeAccount_no}
              />
            </div>
            <div className="form-group">
              <label> Enter Branch</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Branch Name"
                value={this.state.Branch}
                onChange={this.changeBranch}
              />
            </div>
            <div>
              <label> Storage Medium</label>
              <select
                className="form-control form-control-lg"
                value={this.state.database}
                onChange={this.changedatabase}
              >
                <option value="Choose DB">Choose DB</option>
                <option value="Mongodb">MongoDb</option>
                <option value="Local_Storage">Local Storage</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-lg" style={{marginLeft:"50%",marginTop:"20px"}}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Sample;