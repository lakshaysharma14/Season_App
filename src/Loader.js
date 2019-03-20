import React from 'react'

 const Loader = ({msg}) =>{
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{msg}</div>
      </div>
    )
  
}

//====================IMPORTANT --> DEFAULT PROPS IN REACT============================

Loader.defaultProps = {
    msg:"Loading..."
}

export default Loader;