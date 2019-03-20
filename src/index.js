import React from 'react';
import { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends Component 
{
  constructor(props)
  {
    super(props)
    this.state ={
      lat:null,
      errormessage:null
    }  
  }
  
  componentDidMount()
  {
    console.log('Component was rendered to the screen');
  
    window.navigator.geolocation.getCurrentPosition(
      position =>{
        this.setState({
          lat:position.coords.latitude
        })
      },
      
      err =>
      {
        this.setState({
          errormessage:err.message
        });
      }
    );
    }


  componentDidUpdate()
  {
    console.log('Component was updated --> rerendered to the screen');
  }

  renderBody ()
  {
    if(this.state.errormessage && !this.state.lat)
    {
      return(<div><h3>Error = {this.state.errormessage} </h3></div>)
    }

    if(this.state.lat && !this.state.errormessage )
    {
      return <SeasonDisplay lat={this.state.lat} />
    } 

    return <div><Loader msg="Please Accept Location Request"/></div>

  }


  render() 
  {
    return(
      <div className="border green darken-9">
        <h3 className="center">Based on the latitude of users location it tells us the Season(Winter/Summer) </h3>
        {this.renderBody()}
      </div>
    )
    
  }
}

ReactDOM.render(<App />, document.getElementById('root'));