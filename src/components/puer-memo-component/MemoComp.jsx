import React from 'react';


const MemoComp = () => {
    console.log('MemoComp.jsx');
    return ( 
        <div>
            
        </div>
     );
}
 
export default React.memo(MemoComp);