import React,{useState} from 'react';
import store from '../store/store'

function MYorm() {
    const [state, setState]=  useState({})

    const updatefield = (e) => {
        state[e.target.id] = e.target.value
        setState({ ...state })

    }


    const getState = (event) => {
        //mongo
        event.preventDefault()
           store.dispatch({
            type:"My_Data",
            payload:state

           })


    }
    return (
        <div>
            <label>User name</label> <input placeholder="Username" id="UserName" onChange={updatefield} />
            <label> father name</label> <input placeholder="fathername" id="fatherName" onChange={updatefield} />
          
           

            <button onClick={getState}>GetState</button>
        </div>
    );

};

export default  MYorm;