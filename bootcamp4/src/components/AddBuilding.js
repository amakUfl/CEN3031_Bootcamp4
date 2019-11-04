import React from 'react';

class AddBuilding extends React.Component {
	constructor(props) {
		super(props);
        this.addBuilding = this.addBuilding.bind(this);
        this.state = {
            name: '',
            id: -1,
            code: '',
            address: '',
            latitude: undefined,
            longitude: undefined
        }
	}

	addBuilding(e) {
        var newBuilding = {
            name: this.state.name,
            id: this.props.currentLength + 1,
            code: this.state.code,
            address: this.state.address,
            coordinates: this.state.latitude && this.state.longitude ? {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            } : undefined
        };
        this.props.addBuilding(newBuilding);
        this.setState({
            name: '',
            id: -1,
            code: '',
            address: '',
            latitude: undefined,
            longitude: undefined
        });
    }
    
    paremeterChange(param) {
        return (e) => {
            var tempState = this.state;
            tempState[param] = e.target.value;
            this.setState(tempState);
        }
    }

	render() {
		return (
            <div>
                <p>Code: <input type="text" onChange={this.paremeterChange('code')}></input></p>
                <p>Name: <input type="text" onChange={this.paremeterChange('name')}></input></p>
                <p>Address: <input type="text" onChange={this.paremeterChange('address')}></input></p>
                <div>
                    Coordinates: 
                    <p>Latitude: <input type="text" onChange={this.paremeterChange('latitude')}></input></p>
                    <p>Longitude: <input type="text" onChange={this.paremeterChange('longitude')}></input></p>
                </div>
                <button onClick={this.addBuilding}>Add</button>
            </div>
        );
	}
}
export default AddBuilding;