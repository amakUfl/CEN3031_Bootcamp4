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
        return (<i class="fa fa-trash red" onClick={this.removeBuilding}></i>);
	}
}
export default RemoveBuilding;