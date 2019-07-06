import React from 'react';
import Header from './components/Header/Header'
import InfoSearch from './components/InfoSearch/InfoSearch'
import Button from './components/Button/Button'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      treeOperation: 0
     }
  }

  renderInfoSearch = () => {
    let tempArr1 = ["Ice", "Electric", "Flying", "Psychic"]
    let tempArr2 = ["Gen 1", "Not Legendary", "Ice", "Electric", "...", "Flying", "Articuno"]

    switch(this.state.treeOperation){
      case(0):
        return(
        <InfoSearch
        arrayType = "Queue"
        array = {JSON.stringify(tempArr1)}
        resultsType = "Visited"
        results={`${JSON.stringify(["Gen 1", "Legendary"])}`}
        />
        )
      case(1):
          return(
          <InfoSearch
            arrayType = "Full Path"
            array = {JSON.stringify(tempArr2)}
            resultsType = "Search"
            results={
                <div id="search-flexbox">
                  <div>Articuno</div>
                  <div>OK</div>
                  <div>CLEAR</div>
                </div>
            }
            />
          )
    }
  }
  render = () => { 
    return ( 
      <div>
        <Header />
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