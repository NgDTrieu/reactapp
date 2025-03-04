import React from "react";

class ChildComponent extends React.Component {
    state = {
        status: false
    }
    handleShowHide = () => {
        this.setState({
            status: !this.state.status
        })
    }

    handleDelete = (job) => {
        this.props.deleteJob(job);
    }

    render() {
        let { arrJobs } = this.props;
        let { status } = this.state;
        return (
            <>
                {status === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $ <></> <span onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props
//     return (
//         <>
//             <div className="jobs-list">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <>
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} - {item.id}
//                                 </div>
//                             </>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;