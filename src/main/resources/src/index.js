// console.log("fgebgrh ry");
// alert("OK!!!");

import React from 'react'
import ReactDOM from 'react-dom'

import Comp from './components/Comp.jsx'

var aa = 'erty'



//const myh1 = React.createElement('h1', null, 'hello');
const dog ={
    name: 'gemin',
    age: 26,
    gender:'male'
}

const mydiv = <div id="mydiv" title="div aaa">this is a div {aa + 'qqq'}</div>

ReactDOM.render(<Comp name={dog.name}></Comp>, document.getElementById('app'));