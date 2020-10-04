import React from 'react';

import './style.css';

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userName: "",
            userEmail: "",
            userPhone:"",
            userGender:"",
            userPassword: ""
        }
    }

    onNameChange = (event) => {
        
        this.setState({
            userName: event.target.value
        })
    }
    onEmailChange = (event) => {
        this.setState({
            userEmail: event.target.value
        })
    }

    onPhoneChange = (event) => {
        this.setState({
            userPhone: event.target.value
        })
    }
    onGenderChange = (event) => {
        this.setState({
            userGender: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            userPassword: event.target.value
        })
    }

//String interpolation is used..
    onSubmit =() =>{
            alert(`
            Name= ${this.state.userName},
            Email= ${this.state.userEmail},5
            Phone= ${this.state.userPhone},
            Gender= ${this.state.userGender},
            Password= ${this.state.userPassword},
            `);
    };

    render = () => {
        return(
            <div className="form-container">
                <h2><b>-----User Form-----</b></h2>
                <input onChange={this.onNameChange} value={this.state.userName} className="input-style" type="text" placeholder="Enter Your Name" required />
                <input onChange={this.onEmailChange} value={this.state.userEmail} className="input-style" required type="email" placeholder="Enter Your Email" />
                <input onChange={this.onPhoneChange} value={this.state.userPhone} className="input-style" type="text" placeholder="Enter Your PhoneNumber" />
                <select onChange={this.onGenderChange} value={this.state.userGender} className="input-style">
                    <option value=" ">Choose Gender</option>
                    <option value=" Male ">Male</option>
                    <option value=" Female ">Female</option>
                </select>

                <input onChange={this.onPasswordChange} value={this.state.userPassword} className="input-style" required type="password" placeholder="Enter your password" />
                <button onClick={this.onSubmit} className="submit-btn" type="submit">Submit</button>
            </div>
                

        )
    }
}

export default Form;