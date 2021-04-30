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

    enlarge() {
        // uzspiežot uz pogas, parādās plašāks apraksts un pielikumi
        let image = this.render.querySelector(".rubric-image");
        let button = this.render.querySelector(".details-button");

        image.classList.toggle("hide");  // Switches between hide and don't hide depending if it has "hide" already
    
        if (image.classList.contains("hide")) {
            button.innerHTML = "X";
        } else {
            button.innerHTML = "DETAĻAS";
        }
    }
}