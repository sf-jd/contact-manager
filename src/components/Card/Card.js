import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Consumer } from "../Context";

export default class Card extends Component {
  state = {
    showContactInfo: false
  };

  revealCard = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  deleteCard = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { contact } = this.props;
    const { name, email, id, phone } = contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3" data-id={id.toString()}>
              <h4>
                {name}
                <FontAwesomeIcon
                  icon={["fa", "sort-down"]}
                  onClick={this.revealCard}
                />
                <FontAwesomeIcon
                  icon={["fa", "times"]}
                  style={{ color: "red", float: "right" }}
                  onClick={this.deleteCard.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Card.propTypes = {
  contact: PropTypes.object.isRequired
};
