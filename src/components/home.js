import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: props.age,
            status: 0
        }
        this.onMakeOlder = this.onMakeOlder.bind(this);
        setTimeout(() =>{
            this.setState({
                status: 1
            })
        }, 3000);
    }
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }
    render() {
        console.log( this.props )
        let content = '';
        if (true) {
          content = 'hello 你好'
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-1 col-xs-offset-11'>
                        <h2>Your name is {this.props.name}, Your age is {this.state.age}</h2>
                        <p>{this.state.status}</p>                                              
                       <button className="btn btn-primary" onClick={this.onMakeOlder}>Make me older</button>
                        <div>
                            <h4>hobbies</h4>
			    <h5>{content}</h5>	
                            <ul>
                                {this.props.user.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object
}

