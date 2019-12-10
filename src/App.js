import React, { Component } from 'react';
import Routes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      
    };

    return (
      <div className="wrapper">
        <div style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}> 
          <Header style={styles}/>
          <Route exact path="/" component={()=>this.props.children?this.props.children : <Routes />} style={styles}/>
          <Routes />
          <Footer style={styles}/>
        </div>
      </div>
    );
  }
};

export default App; 