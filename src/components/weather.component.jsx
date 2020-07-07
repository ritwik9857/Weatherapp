import React from 'react';
const weather = props =>{
    return(

        <div style={{textAlign:'center',color:'white'}}className='container'>
            <div className='place'>
                <h1 style={{fontSize:'50px'}}>{props.city}</h1>
                <h5>
                <i style={{fontSize:'70px'}}className={`wi ${props.weathericon}`}></i>
                </h5>
                  {props.celsius?(<h1 style={{fontSize:'50px'}}>{props.celsius}&deg;</h1>):null}
                {minmax(props.temp_min, props.temp_max)}
                <h4 style={{fontSize:'40px'}}>{props.description}</h4>
            </div>

        </div>
    );
}

function minmax(min,max,props){
    if(min,max){
        return(
            <h3>
        <span style={{fontSize:'40px',margin:'20px'}}>{min}&deg;</span>
        <span style={{fontSize:'40px',margin:'20px'}}>{max}&deg;</span>
    
    </h3>
        );
    }
}
export default weather;