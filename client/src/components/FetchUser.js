import React from 'react';
import { connect } from 'react-redux';
import { tryFetchUser } from '../actions/user';

class FetchUser extends React.Component {
  state = { loaded: false }

  loaded = () => {
    this.setState({ loaded: true });
  }

  componentDidMount() {
    let { isAuthenticated, dispatch } = this.props;
    if (isAuthenticated) {
      this.loaded();
    } else {
      dispatch(tryFetchUser(this.loaded))
    }
  }

  render() {
    let { loaded } = this.state;
    return loaded ? this.props.children : null
  }
}
//what happens when returning null?
//where did the children props come from? 

const mapStateToProps = (state) => {
  return { isAuthenticated: state.user._id }
}

export default connect(mapStateToProps)(FetchUser);
