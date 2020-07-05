import React from 'react';
const form= props =>{
    return(
          
        <div className='container'>
             <div>{props.error?error():null}
             </div>

             <form onSubmit={props.loadweather}>
 
                <input type="text"
                name='city'
                placeholder='city'
                autoComplete='off'
                />

                <input type="text"
                name='country'
                placeholder='country'
                autoComplete='off'
                />

                <button>Get Weather</button>
            </form>
           
        </div>
    );
}

function error(){
    return(
        <div style={{color:'white',textAlign:'center'}}role='alert'>Please Enter City And Country Both</div>
    )
}

export default form