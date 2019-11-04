import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.filterUpdate = this.filterUpdate.bind(this);
	}
	filterUpdate(e) {
		this.props.filterUpdate(e.target.value);
		//Here you will need to update the value of the filter with the value from the textbox
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		return (
			<form>
				<input type="text" placeholder="Type to Filter" onChange={this.filterUpdate}/>
			</form>
		);
	}
}
export default Search;
