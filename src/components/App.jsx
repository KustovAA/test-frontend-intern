import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { sortByName, sortByEmail, sortByPhone, sortByCompany } from 'actions';
import * as profiles from 'profiles';

export class App extends Component {
  render() {
    const { 
      onSortByName, 
      onSortByEmail, 
      onSortByPhone, 
      onSortByCompany, 
      sortType
    } = this.props;
    const direction = this.props.direction === null ? true : this.props.direction;

    return (
      <table className="table">
        <tbody>
          <tr>
            <th>
              Name
              <button onClick={() => onSortByName(true)}>
                Up
              </button>
              <button className='down' onClick={() => onSortByName(false)}>
                Down
              </button>
            </th>
            <th>
                Email
                <button onClick={() => onSortByEmail(true)}>
                  Up
                </button>
                <button className='down' onClick={() => onSortByEmail(false)}>
                  Down
                </button>
            </th>
            <th>
                Phone
                <button onClick={() => onSortByPhone(true)}>
                  Up
                </button>
                <button className='down' onClick={() => onSortByPhone(false)}>
                  Down
                </button>
            </th>
            <th>
                Company
                <button onClick={() => onSortByCompany(true)}>
                  Up
                </button>
                <button className='down' onClick={() => onSortByCompany(false)}>
                  Down
                </button>
            </th>
          </tr>
          {profiles
            .sort((a, b) => {
              if (a[sortType] < b[sortType]) {
                return direction ? -1 : 1;
              }
              if (a[sortType] > b[sortType]) {
                return direction ? 1 : -1;
              }

              return 0;
            })
            .map(it => (
              <tr>
                <td>{it.Name}</td>
                <td>{it.Email}</td>
                <td>{it.Phone}</td>
                <td>{it.Company}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  sortType: state.sortType, 
  direction: state.direction
});

const mapDispatchToProps = dispatch => ({
  onSortByName: (direction) => {
    localStorage.setItem('direction', direction);
    localStorage.setItem('sortType', 'Name');
    dispatch(sortByName(direction))
  },
  onSortByEmail: (direction) => {
    localStorage.setItem('direction', direction);
    localStorage.setItem('sortType', 'Email');
    dispatch(sortByEmail(direction))
  },
  onSortByPhone: (direction) => {
    localStorage.setItem('direction', direction);
    localStorage.setItem('sortType', 'Phone');
    dispatch(sortByPhone(direction))
  },
  onSortByCompany: (direction) => {
    localStorage.setItem('direction', direction);
    localStorage.setItem('sortType', 'Company');
    dispatch(sortByCompany(direction))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
