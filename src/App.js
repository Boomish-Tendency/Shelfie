import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import axios from 'axios';

class App extends Component{
  constructor(){
    super()

    this.state = {
        inventoryList: [
          {image_url: 'img1',
            name: 'Prod1',
            price: 1111
        },
          {image_url: 'img2',
            name: 'Prod2',
            price: 2222
        },
          {image_url: 'img3',
            name: 'Prod3',
            price: 3333
        }
        ]
    }
  }
  render(){
        return (
        <div>
            <Header/>
            <Dashboard inventoryList={this.state.inventoryList}>
            </Dashboard>
            <Form/>
        </div>
    );
  }
}

export default App;