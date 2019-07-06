import React from 'react';
import Header from './components/Header/Header'
import InfoSearch from './components/InfoSearch/InfoSearch'
import Button from './components/Button/Button'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  renderInfoSearch = () => {

  }
  render = () => { 
    return ( 
      <div>
        <Header />
        <InfoSearch
        arrayType = "Queue"
        array = {JSON.stringify(["Ice", "Electric", "Flying", "Psychic"])}
        resultsType = "Visited"
        results={`${JSON.stringify(["Gen 1", "Legendary"])}`}
        />

        <div id="button-flexbox">
        <Button treeType="BFS" />
        <Button treeType="DFS" />
        </div>
      </div>
     );
  }
}
 
export default App;