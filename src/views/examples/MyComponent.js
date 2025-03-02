import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Trieu',
        age: 21,
    }

    handleClickButton = () => {
        console.log('you have hit the button')
        alert('click me')
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <>
                <div className=" first">
                    {console.log('My name is: ', this.state.name)}
                    Xin chao, day la test vi du ve class component cua {this.state.name}
                </div>
                <div className="second">
                    Day la mot cai div khac
                </div>
                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>click me</button>
                </div>
                <div>
                    <input type="text"
                        onChange={(event) => { this.handleChange(event) }}
                    />
                </div>
            </>
        )
    }
}

export default MyComponent;