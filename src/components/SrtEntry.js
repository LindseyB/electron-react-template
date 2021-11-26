import React from "react"
import PropTypes from 'prop-types';

export default class SrtEntry extends React.Component {
    render() {
        return (
            <>
                <input type="checkbox" id="{this.props.id}" name="{this.props.id}" />
                <label htmlFor="scales">{this.props.subtitle}</label>
            </>
        )
    }
}

SrtEntry.propTypes = {
    subtitle: PropTypes.string,
    id: PropTypes.string
}