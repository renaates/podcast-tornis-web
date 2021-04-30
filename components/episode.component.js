class Episode extends React.Component {

    render() {
        let itemAttributes = {
            className: "episode-item item",
        };
        let imageAttributes = {
            className: "rubric-image",
            src: this.props.imageSrc,
        };
        let descriptionAttributes = {
            className: "episode-description",
        };
        let buttonAttributes = {
            className: "details-button",
            onClick: this.enlarge.bind(this),
        };
        let itemContent = [
            React.createElement("img", imageAttributes, null),
            React.createElement("h2", null, this.props.episodeNr),
            React.createElement("h4", null, this.props.episodeName),
            React.createElement("div", descriptionAttributes, this.props.description),
            React.createElement("div", buttonAttributes, "DETAĻAS")
        ];
    
        return React.createElement("div", itemAttributes, itemContent);
    }

    enlarge() {
        // uzspiežot uz pogas, parādās youtube un spotify linki uz epizodi
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