import React, { Component} from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import TableApp from './components/TableApp'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {   
    };
  }

  render() {
    return(
      <div className="App">
        
        <div>
          <Header/>
        </div>
      
        <div className="App-form">
          <TableApp/>
        </div>

        <div>
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default App;
