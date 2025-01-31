import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 }
];

const listNotifications = [
  { id: 1, type: 'default', value: "New course available" },
  { id: 2, type: 'urgent', value: "New resume available" },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

class App extends Component {
  // Define prop types and default value for logOut
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  };

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
  };

  // Add event listener when the component mounts
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // Remove event listener when the component unmounts
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // Handle keydown event to check for Control + h
  handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      alert("Logging you out");
      this.props.logOut()
    }
  };

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />
          <div className="App-body">
            {this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
