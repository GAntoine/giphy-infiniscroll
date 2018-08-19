import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListWrapper from '../list_wrapper/ListWrapper';
import { fetchGifs } from '../actions'
import './App.css';

class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.props.dispatch(fetchGifs())
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-text">
            Scroll to begin
          </div>
        </div>
        <p className="app-intro">
          <ListWrapper/>
        </p>
      </div>
    );
  }
}

export default connect()(App)
