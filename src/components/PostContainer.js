import React, { useEffect } from "react";
import { fetchPostApi } from "../redux";
import { connect } from "react-redux";
import "./index.css";

function PostContainer({ postItem, fetchPostApi }) {
  useEffect(() => {
    fetchPostApi();
  }, []);
  console.log(postItem);

  return (
    <div>
      <div className="Heading">Post Items</div>
      <div className="Post">
        {postItem &&
          postItem.post &&
          postItem.post.map((post) => {
            return (
              <div key={post.id} className="post-item">
                <div>{post.title}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postItem: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostApi: () => dispatch(fetchPostApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
