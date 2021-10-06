import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User First Name: </label>
                            <div> { this.state.user.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name: </label>
                            <div> { this.state.user.surName }</div>
                        </div>
                        <div className = "row">
                            <label> User Date of Birth: </label>
                            <div> { this.state.user.dob }</div>
                        </div>
                        <div className = "row">
                            <label> User Job Title: </label>
                            <div> { this.state.user.jobTitle }</div>
                        </div>
                        <div className = "row">
                            <label> User Title: </label>
                            <div> { this.state.user.title }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
