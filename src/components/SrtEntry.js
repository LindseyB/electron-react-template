import React from "react"

export default class SrtEntry extends React.Component {
    render() {
        return (
            <>
                <input type="checkbox" id="{this.props.id}" name="{this.props.id}" />
                <label for="scales">{this.props.subtitle}</label>
            </>
        )
    }
}