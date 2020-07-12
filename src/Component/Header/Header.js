import React from 'react';
import { useContext } from 'react';
import { categoryContext } from '../../App';
const Header = () => {
    const [count,setCount] = useContext(categoryContext)
    return (
        <div className="text-center">
            {/* <h1>This is header {count} </h1> */}
            <button onClick={()=>setCount('laptop')} >Laptop</button>
            <button onClick={()=>setCount('mobile')} >Mobile</button>
            <button onClick={()=>setCount('camera')} >Camera</button>
        </div>
    );
};

export default Header;