import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		var buildingToShow = this.props.data.concat(this.props.addedBuildings).filter(building => building.id === this.props.buildingToView);
		if (this.props.buildingToView && buildingToShow && buildingToShow.length)
			return buildingToShow.map(building => {
				return (
					<div>
						<p><b>Code:</b> {building.code}</p>
						<p><b>Name:</b> {building.name}</p>
						{building.address && <p><b>Address:</b> {building.address}</p>}
						{building.coordinates && <div>
							<b>Coordinates:</b> 
							<div class="row">
								<div class="col-6"><b>Latitude:</b> {building.coordinates.latitude}</div>
								<div class="col-6"><b>Longitude:</b> {building.coordinates.longitude}</div>
							</div>
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
