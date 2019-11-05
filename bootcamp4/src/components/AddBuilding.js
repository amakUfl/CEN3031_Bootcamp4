import React from 'react';

class AddBuilding extends React.Component {
	constructor(props) {
		super(props);
        this.addBuilding = this.addBuilding.bind(this);
        this.cancel = this.cancel.bind(this);
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

    cancel() {
        this.props.cancelAddBuilding();
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
            <form class="form-horizontal">
                <h4><b>Building:</b></h4>
                <div class="row">
                    <div class="form-group col-6">
                        <input type="text" placeholder="Code" class="form-control" onChange={this.paremeterChange('code')}></input>
                    </div>
                    <div class="form-group col-6">
                        <input type="text" placeholder="Name" class="form-control" onChange={this.paremeterChange('name')}></input>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-12">
                        <input type="text" placeholder="Address" class="form-control" onChange={this.paremeterChange('address')}></input>
                    </div>
                </div>
                <h4><b>Coordinates:</b></h4>
                <form class="row">
                    <div class="form-group col-6">
                        <input type="text" placeholder="Latitude" class="form-control" onChange={this.paremeterChange('latitude')}></input>
                    </div>
                    <div class="form-group col-6">
                        <input type="text" placeholder="Longitude" class="form-control" onChange={this.paremeterChange('longitude')}></input>
                    </div>
                </form>
                <button class="btn btn-success" onClick={this.addBuilding}><i class="fa fa-plus"></i>&nbsp;Add</button>
                <button class="btn btn-danger" onClick={this.cancel}><i class="fa fa-times"></i>&nbsp;Cancel</button>
            </form>
        );
	}
}
export default AddBuilding;