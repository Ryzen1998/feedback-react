import React from 'react'


function Header(props) {
  
  return (
   <header style={{backgroundColor:'blue',color:'red'}}>
    <div className='container'>
        <h2>{props.text}</h2>
    </div>
   </header>
  )
}
Header.defaultProps={
  text:'ashwin',
};
export default Header
