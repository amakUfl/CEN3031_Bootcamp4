import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	constructor(props) {
		super(props);
		this.selectBuilding = this.selectBuilding.bind(this);
	}

	selectBuilding(e) {
		this.props.selectedUpdate(e);
	}

	render() {
		const { data } = this.props;
		const buildingList = data
			.concat(this.props.addedBuildings)
			.filter(directory => this.props.removedBuildings.indexOf(directory.id) === -1)
			.filter(directory => directory.name.toLowerCase().includes(this.props.searchQuery.toLowerCase()))
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td>{directory.code} </td>
						<td onClick={() => this.selectBuilding(directory.id)}> {directory.name} </td>
						<td><RemoveBuilding building={directory.id} removeBuilding={this.props.removeBuilding}/></td>
					</tr>
				);
			});

		return buildingList;
	}
}
export default BuilingList;
