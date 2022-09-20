import PropTypes from 'prop-types'
import React from 'react'

function Header({text}) {
  return (
    <header>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}


Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header