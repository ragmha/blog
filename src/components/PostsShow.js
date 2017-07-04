import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params; // provided by react-router :D
    this.props.fetchPost(id);
  }
  render() {
    return <div>Post Show!</div>;
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

export default connect(null, { fetchPost })(PostsShow);
