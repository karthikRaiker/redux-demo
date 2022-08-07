import React, { useEffect } from "react";
import { fetchUser } from "../redux";
import { connect } from "react-redux";

fetchUser();
function UserContainer({ userData, fetchUser }) {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      {userData.loading ? (
        <div>Loading...</div>
      ) : userData.error ? (
        <div>{userData.error}</div>
      ) : (
        <>
          <h3>User Names</h3>
          <div>
            {userData && userData.users && userData.users.length
              ? userData &&
                userData.users.map((user) => {
                  return <div key={user.id}>{user.name}</div>;
                })
              : null}
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
