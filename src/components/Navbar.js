import React, { Component } from 'react';
import Identicon from 'identicon.js';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Icon } from 'semantic-ui-react'


function topicLoad() {
  return(
    <Dropdown.Item href="#/action-1">Topic1</Dropdown.Item> 
  )
}

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-grey flex-md-nowrap p-0 shadow">

        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-topics">
           Topics
          </Dropdown.Toggle>

          <Dropdown.Menu>
           <Dropdown.Item href="#/action-1">Cats</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Bitcoin</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Freedom</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>

        <Icon></Icon>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt='avatar'
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}


export default Navbar;