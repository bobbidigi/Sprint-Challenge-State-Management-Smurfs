import React, {useState} from 'react'
import { addSmurf } from '../actions/actions'
import {connect } from 'react-redux'

function Form(props) {
    console.log("form",props)

const [newSmurf, setNewSmurf] =useState({})

const handleChange = (e) => {
    setNewSmurf({
        ...newSmurf,
        [e.target.name]: e.target.value,
    })
 }
 
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newsmurf",newSmurf)
    props.addSmurf(newSmurf)
}

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} value={newSmurf.name}/>
            <input name="age" onChange={handleChange} value={newSmurf.age}/>
            <input name="height" onChange={handleChange} value={newSmurf.height}/>
            <button type="submit">Submit</button>
        </form>
    )
}

function mapStateToProps(state){
 return {
     smurf: state.smurf,
     isLoading: state.isLoading,
     error: state.error
 }
}

export default connect(mapStateToProps, {addSmurf})(Form)