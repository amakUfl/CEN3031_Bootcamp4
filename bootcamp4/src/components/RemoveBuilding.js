import React from 'react';

class RemoveBuilding extends React.Component {
	constructor(props) {
		super(props);
		this.removeBuilding = this.removeBuilding.bind(this);
	}

	removeBuilding(e) {
		this.props.removeBuilding(this.props.building);
	}

	render() {
        return (<i onClick={this.removeBuilding}>Remove</i>);
	}
}
export default RemoveBuilding;