import React, { Component } from "react";
import { getUsers, getAddress } from "../../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Users extends Component {
  componentDidMount() {
    let requestObject = {
      page: 0,
      size: 5
    };
    this.props.getUsers(requestObject);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, this.props);
    if (prevProps.users.length !== this.props.users.length) {
      let userIds = [];
      this.props.users.forEach(user => {
        userIds.push(user.id);
      });
      console.log(userIds);
      let requestObject = {
        user_ids: userIds
      };
      this.props.getAddress(requestObject);
    }
  }
  render() {
    let { users, addresses } = this.props;
    console.log(users, addresses);
    if (users && users.length <= 0) {
      return <div>Loading ...</div>;
    }
    return (
      <React.Fragment>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td style={{ marginBottom: "10px", marginTop: "10px" }}>
                  {addresses.map(address => {
                    if (address.user_id === user.id) {
                      return <li key={address.id}>{address.area}</li>;
                    }
                  })}
                </td>
              </tr>
            );
          })}
        </table>
      </React.Fragment>
    );
  }
}
Users.propTypes = {
  users: PropTypes.array.isRequired
};

Users.defaultProps = {
  users: [],
  addresses: []
};
const mapStateToProps = state => ({
  users: state.user.users.data,
  addresses: state.user.addresses.data
});
export default connect(
  mapStateToProps,
  { getUsers, getAddress }
)(Users);
