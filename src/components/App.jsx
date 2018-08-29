import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sort } from 'actions';
import './App.css'; 

class App extends Component {

  render() {
    const { onSort, profiles } = this.props;

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
  profiles: state.profiles,
  sortType: state.sortType, 
  direction: state.direction
});

const mapDispatchToProps = dispatch => ({
  onSort: ({ type, direction}) => {
    dispatch(sort({ type, direction }))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
