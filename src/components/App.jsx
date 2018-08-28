import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sort } from 'actions';
import * as profiles from 'profiles';
import './App.css'; 

class App extends Component {

  sort = (a, b, sortType, direction) => {
    const arg_a = a[sortType].toLowerCase().split(/\(|\)/).join('');
    const arg_b = b[sortType].toLowerCase().split(/\(|\)/).join('');
    if (arg_a < arg_b) {
      return direction ? -1 : 1;
    }
    if (arg_a > arg_b) {
      return direction ? 1 : -1;
    }

    return 0;
  }

  render() {
    const { 
      onSort,
      sortType
    } = this.props;
    const direction = this.props.direction === null ? true : this.props.direction;

    return (
      <table className="table">
        <tbody>
          <tr>
            {Object.keys([...profiles][0]).map(it => (
              <th key={it}>
                {it}
                <button onClick={() => onSort({type: it, direction: true})}>
                  Up
                </button>
                <button className='down' onClick={() => onSort({type: it, direction: false})}>
                  Down
                </button>
            </th>
            ))}
          </tr>
          {profiles
            .sort((a, b) => this.sort(a, b, sortType, direction))
            .map((it, ndx) => {
              return (
                <tr key={ndx + new Date().getTime()}>
                  {Object.keys(it).map((type, ndx) => (
                    <td key={ndx + new Date().getTime()}>{it[type]}</td>
                  ))}
                </tr>
              )
            })
          }
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
  onSort: ({ type, direction}) => {
    localStorage.setItem('direction', direction);
    localStorage.setItem('sortType', type);
    dispatch(sort({ type, direction }))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
