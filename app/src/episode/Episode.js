import React from 'react';

export class Episode extends React.Component {
    render() {
        return <div className="episode-item item">
            <img className="rubric-image" src={this.props.imageSrc}/>
            <h2>{this.props.episodeNr}</h2>
            <h4>{this.props.episodeTitle}</h4>
            <div className="episode-description">{this.props.description}</div>
            <div className="details-button" onClick={this.enlarge.bind(this)}>DETAĻAS</div>
        </div>
    }
}