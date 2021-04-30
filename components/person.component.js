class Person extends React.Component {
    render() {
        let itemAttributes = {
            className: "person-item",
        };
        let imageAttributes = {
            className: "person-image",
            src: this.props.imageSrc,
        };
        let descriptionAttributes = {
            className: "person-description",
        };
        let descriptionContent = [
            React.createElement("h4", null, this.props.name),
            React.createElement("p", null, this.props.role),
        ];
        let itemContent = [
            React.createElement("img", imageAttributes, null),
            React.createElement("div", descriptionAttributes, descriptionContent),
        ];

    return React.createElement("div", itemAttributes, itemContent);
    }
}