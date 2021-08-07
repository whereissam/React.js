import React, { Component } from 'react'
import { withRouter } from 'react-router'
class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(2)
    }
    render() {
        // console.log('Header component receive props is', this.props)
        return (
            
            <div>
                <h2>This is header</h2>
                <button onClick={this.back}>Back</button>
                <button onClick={this.forward}>Go forward</button>
                <button onClick={this.go}>Go</button>
            </div>
        )
    }
}

export default withRouter(Header)