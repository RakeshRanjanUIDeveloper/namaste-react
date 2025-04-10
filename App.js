import React from 'react';
import ReactDOM from 'react-dom/client'

// const heading = React.createElement("h1", {
//     id:'heading',
//     abc:'xyz'
// }, "Hello World from React");

const parent = React.createElement('div', {id:'parent'}, 
    [
        React.createElement('div', {id:'child'},[
            React.createElement('h1', {}, 'I am h1 tag'),
            React.createElement('h1', {}, 'I am another h1 tag'),
        ]),
        React.createElement('div', {id:'child2'},[
            React.createElement('h1', {}, 'I am h1 tag'),
            React.createElement('h1', {}, 'I am another h1 tag'),
        ])
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)