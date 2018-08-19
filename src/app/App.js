import React, { Component } from 'react'
import debounce from 'debounce';
import { connect } from 'react-redux'
import ListWrapper from '../list_wrapper/ListWrapper'
import { fetchGifs } from '../actions'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.onScroll = debounce(this.handleScroll.bind(this), 250);
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  handleScroll(event) {
    if (window.innerHeight + window.pageYOffset < document.body.offsetHeight - 10) return;
    this.props.dispatch(fetchGifs())
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <div className="app-header-text">
            Scroll down
          </div>
        </div>
        <div className="app-intro">
          <ListWrapper/>
        </div>
      </div>
    );
  }
}

export default connect()(App)
