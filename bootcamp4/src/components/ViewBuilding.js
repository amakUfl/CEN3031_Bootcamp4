import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		var buildingToShow = this.props.data.concat(this.props.addedBuildings).filter(building => building.id === this.props.buildingToView);
		if (this.props.buildingToView && buildingToShow && buildingToShow.length)
			return buildingToShow.map(building => {
				return (
					<div>
						<p>Code: {building.code}</p>
						<p>Name: {building.name}</p>
						{building.address && <p>Address: {building.address}</p>}
						{building.coordinates && <div>
							Coordinates: 
							<p>Latitude: {building.coordinates.latitude}</p>
							<p>Longitude: {building.coordinates.longitude}</p>
						</div>}
					</div>
				);
			})[0];
		else return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
