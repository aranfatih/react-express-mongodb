import React from 'react';
import { Link } from 'react-router-dom';
import { colors, shadows, fontSize, dimensions } from './base_styles'

export default class Header extends React.Component {
  render() {
    return(
      <div style={styles.header}>
        <Link to="/" style={{color: colors.white, fontSize: fontSize.dl3}}>
          React, Express, MongoDB, Passport and Axios
        </Link>
      </div>
    )
  }
}

const styles = {
  header: {
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: dimensions.dl3,
    backgroundColor: colors.purple,
    boxShadow: shadows.sl1
  }
}
