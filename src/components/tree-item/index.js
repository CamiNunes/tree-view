import { useState } from 'react';

function TreeItem({ label, items }){

    const [ open, setOpen ] = useState(false)

    function toggle(){
        setOpen(!open)  
    }

    return (
        <div className="item">
            <input type="checkbox" onClick={toggle} /> { label }
            <div className="list-item">
                {  open && items.map((item, i)=>(<TreeItem key={i} {...item}  />)) }
            </div>
        </div>
    )
}

export default TreeItem;