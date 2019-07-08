import React from 'react';
import Header from './components/Header/Header'
import InfoSearch from './components/InfoSearch/InfoSearch'
import Button from './components/Button/Button'
import './stylesheets/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      treeOperation: true,
      searchInput: ''
     }
  }

  renderInfoSearch = () => {
    let tempArr1 = ["Ice", "Electric", "Flying", "Psychic"]
    let tempArr2 = ["Gen 1", "Not Legendary", "Ice", "Electric", "...", "Flying", "Articuno"]

    switch(this.state.treeOperation){
      // true for generation, false for traversal
      case(true):
        return(
        <InfoSearch
        arrayType = "Queue"
        array = {JSON.stringify(tempArr1)}
        resultsType = "Visited"
        results={`${JSON.stringify(["Gen 1", "Legendary"])}`}
        />
        )
      case(false):
          return(
          <InfoSearch
            arrayType = "Full Path"
            array = {JSON.stringify(tempArr2)}
            resultsType = "Search"
            results={
                <div id="search-flexbox">
                  <div id="input-container">
                  <input type="text" 
                         value={this.state.searchInput} 
                         onChange={this.handleInput} 
                          />
                  </div>
                  <div className="text-button">OK</div>
                  <div className="text-button">CLEAR</div>
                </div>
            }
            />
          )
    }
  }

  handleInput = event => {
    this.setState({searchInput: event.target.value});
  }

  treeClick = newState => {
    this.setState({treeOperation: newState});
  }
  render = () => { 
    return ( 
      <div>
        <Header 
          onClick1={() => this.treeClick(true)}
          onClick2={() => this.treeClick(false)}
        />
        {this.renderInfoSearch()}
        <div id="button-flexbox">
        <Button treeType="BFS" />
        <Button treeType="DFS" />
        </div>
        </div>

     );
  }
}
 
export default App;