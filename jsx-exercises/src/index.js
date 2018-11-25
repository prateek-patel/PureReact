import React from 'react';
import ReactDom from 'react-dom';

function MyThing() {
return (
    <div className='book'>
        <div className='title'>
            The Title
        </div>
        <div className='author'>
            The Author
        </div>
        <ul className='stats'>
            <li className='rating'>
                5 stars
            </li>
            <li className='isbn'>
                12-345678-910
            </li>
        </ul>
        <div>New
            Line
        </div>
        <div>
        &nbsp; Non-breaking
        &nbsp;Space&nbsp;
        </div>
        <div>
            Line1'':;
            {'  ' }
            Line2
        </div>
    </div>
    )
}

ReactDom.render(<MyThing/>, document.getElementById('root'));