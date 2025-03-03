import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        address: "Ha Noi",
        arrJobs: [
            { id: "job1", name: "Developers", salary: "500 $" },
            { id: "job2", name: "Testers", salary: "400 $" },
            { id: "job3", name: "Project managers", salary: "1000 $" }
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>> Data: ", this.state);
        alert("Submitted !")
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={"21"}
                    address={this.state.address}
                    arrJobs={this.state.arrJobs}
                />


            </>
        )
    }
}

export default MyComponent;