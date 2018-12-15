/* global google */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Geosuggest from 'react-geosuggest'

class GeosuggestWrapper extends Component {
  render() {
    const { onSuggestSelect, value } = this.props
    return (
      <div className='form-group'>
        <Geosuggest
          onSuggestSelect={onSuggestSelect}
          inputClassName='input-group referral-form__field w-100'
          queryDelay={0}
          country='ca'
          types={['address']}
          ignoreTab
          location={new google.maps.LatLng(49.2827291, -123.12073750000002)}
          radius='20'
          placeholder=''
          initialValue={value}
        />
      </div>
    )
  }
}

GeosuggestWrapper.propTypes = {
  onSuggestSelect: PropTypes.func.isRequired
}

export default GeosuggestWrapper
