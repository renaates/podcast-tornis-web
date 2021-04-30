import React from 'react';

export class Person extends React.Component {
    render() {
        return <div className="person-item">
            <img className="person-image" src={this.props.imageSrc}/>
            <div className="person-description">
                <h4>{this.props.personName}</h4>
                <p>{this.props.personRole}</p>
            </div>
        </div>
    }
}