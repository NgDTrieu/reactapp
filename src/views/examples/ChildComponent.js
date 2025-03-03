import React from "react";

class ChildComponent extends React.Component {
    render() {
        let { name, age, address, arrJobs } = this.props;

        return (
            <>
                <div>
                    child component: I am {name} - {age} - {address}
                </div>
                <div className="job-list">
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.name} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ChildComponent;