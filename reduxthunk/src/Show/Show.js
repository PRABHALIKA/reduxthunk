import React    from "react";
import template from "./Show.jsx";
import {connect} from 'react-redux'

class Show extends React.Component {
  render() {
    return template.call(this);
  }
}

function mapStateToProps(state) {
  return {
       'name':state.loginReducer.u,
       'pwd':state.loginReducer.p       
    };
}

export default connect(mapStateToProps)(Show);
