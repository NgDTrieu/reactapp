import React from "react";

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: ""
    }
    handleChangeFirstName = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert("Missing information!");
            return;
        }
        console.log(">>> Data: ", this.state);
        alert("Submitted !")
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: "",
            salary: ""
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's name:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

            </>
        )
    }
}

export default AddComponent;