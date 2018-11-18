import React, { Component } from 'react'

class Test extends Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))
    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    // componentDidUpdate() {
    //     console.log("component did update");
    // }

    // componentWillUpdate() {
    //     console.log("componentWillUpdate");
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log('componentWillRecieveUpdate');
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('getSnapshotBefore');
    // }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <h1>{body}</h1>
            </div>
        )
    }
}

export default Test;