import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      addBuilding: false,
      selectedBuilding: 0,
      removedBuildings: [],
      addedBuildings: []
    };
    this.selectedUpdate = this.selectedUpdate.bind(this);
    this.filterUpdate = this.filterUpdate.bind(this);
    this.removeBuilding = this.removeBuilding.bind(this);
    this.enableAddBuilding = this.enableAddBuilding.bind(this);
    this.addBuilding = this.addBuilding.bind(this);
    this.cancelAddBuilding = this.cancelAddBuilding.bind(this);
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    var tempState = this.state;
    tempState.filterText = value;
    this.setState(tempState);
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    var tempState = this.state;
    tempState.selectedBuilding = id;
    tempState.addBuilding = false;
    this.setState(tempState);
  }

  removeBuilding(id) {
    var tempState = this.state;
    tempState.removedBuildings.push(id);
    tempState.selectedBuilding = 0;
    this.setState(tempState);
  }

  enableAddBuilding(e) {
    var tempState = this.state;
    tempState.addBuilding = true;
    this.setState(tempState);
  }

  addBuilding(building) {
    var tempState = this.state;
    tempState.addedBuildings.push(building);
    tempState.addBuilding = false;
    tempState.selectedBuilding = building.id;
    this.setState(tempState);
  }

  cancelAddBuilding() {
    var tempState = this.state;
    tempState.addBuilding = false;
    tempState.selectedBuilding = 0;
    this.setState(tempState);
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search filterUpdate={this.filterUpdate}/>
        <main>
          <div className="row">
            <div className="column1">
              <button class="btn btn-primary" onClick={this.enableAddBuilding}>Add Building</button>
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <td>
                        <b>Building Code</b>
                      </td>
                      <td>
                        <b>Building Name</b>
                      </td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    <BuildingList
                      data={this.props.data}
                      searchQuery={this.state.filterText}
                      selectedUpdate={this.selectedUpdate}
                      removedBuildings={this.state.removedBuildings}
                      removeBuilding={this.removeBuilding}
                      addedBuildings={this.state.addedBuildings}
                    />
                  </tbody>
                </table>
              </div>
            </div>
            {!this.state.addBuilding && <div className="column2 card">
              <ViewBuilding buildingToView={this.state.selectedBuilding} data={this.props.data} addedBuildings={this.state.addedBuildings} />
            </div>}
            {this.state.addBuilding && <div className="column2 card">
              <AddBuilding currentLength={this.props.data.length + this.state.addedBuildings.length} addBuilding={this.addBuilding} cancelAddBuilding={this.cancelAddBuilding}/>
            </div>}
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
