import React    from "react";
import template from "./Child.jsx";
import loginAction from '../action/loginAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
class Child extends React.Component {
  render() {
    return template.call(this);
  }

  fnLoginData(){
    let loginData={
      'u':this.refs.un.value,
      'p':this.refs.pwd.value
    }
    this.props.loginAction(loginData);
  }
}

const mdp=(d)=>{
  return {
     'loginAction':bindActionCreators(loginAction,d)
  }
}

export default connect(null,mdp)(Child);
