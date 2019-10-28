import React, {useEffect} from "react";
import "./App.css";
import { fetchSmurfs, addSmurf } from "../actions/actions";
import {connect} from 'react-redux' 
import Form from './Form'
import Smurf from './Smurf'



function App (props) {

  useEffect(()=>{
    props.fetchSmurfs()
  },[])

  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form addSmurf={props.addSmurf}/>
        { props.isLoading ? ( <div className="spinner" /> ) : (

          <div>
            {props.smurfs.map(item => 
              <Smurf smurf={item} key={item.id}/>  
            )}
          </div>)}

      </div>
  );
}

const mapDispatchToProps = {
  fetchSmurfs,
  addSmurf
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading, 
    error: state.error
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
