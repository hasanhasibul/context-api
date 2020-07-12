import React from 'react';
import '../CategoryDetails/CategoryDetails.css'
const CategoryDetails = (props) => {
   const  {name,img,dis}  = props.product;
    console.log(name)
    return (
        
       <div className="container">
          <div className=" col-md-3 text-center divStyle  float-left">
                 <h3>{name}</h3>
                 <p>{dis}</p>
                 <img style={{width:"200px"}} src={img} alt=""/>
          </div>
       </div>
    );
};

export default CategoryDetails;