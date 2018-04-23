import React, { Component} from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

import {
  LocationButtonGroup,
  LocationSearchHeader,
  LocationSearchResults,
  SearchResultsList,
  NavigationIcon,
} from '../components'

const mapStateToProps = (state) => ({
  recentLocations: state.recentLocations,
  shortcutLocations: state.recentLocations.slice(0, 3),
})

class Main extends React.Component {

  render() {
    const {recentLocations, shortcutLocations} = this.props

    return (
      <View>

      </View>
    )
  }
}

const styles = StyleSheet.create({

})

export default connect(mapStateToProps)(Main)
