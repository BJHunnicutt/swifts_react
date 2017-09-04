import React, { Component } from 'react'
import P5Wrapper from '../components/swift_background'

// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'


class CountdownPage extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    // const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <P5Wrapper />
      </div>
    )
  }
}

// AsyncApp.propTypes = {
  // selectedSubreddit: PropTypes.string.isRequired,
  // posts: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // lastUpdated: PropTypes.number,
  // dispatch: PropTypes.func.isRequired
// }
//
// const CountdownPage = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)
//
export default CountdownPage
