/*
<div id='parent'><div id='child'><h1>I am H1 tag</h1><h2>I am H2 tag</h2>
<div id='child2'><h1>I am H1 tag</h1><h2>I am H2 tag</h2>
</div>

*/
//React.createElement("div",{id:'child'},{React.createElement("h1",{id:'heading'},"I am H1 tag")})
const parent = React.createElement('div',{id:'parent'},
    [
        React.createElement("div",{id:'child'},
    [React.createElement("h1",{id:'heading'},"I am H1 tag"),React.createElement("h2",{id:'heading'},"I am H2 tag")]),
    React.createElement("div",{id:'child1'},
    [React.createElement("h1",{id:'heading'},"I am H1 tag"),React.createElement("h2",{id:'heading'},"I am H2 tag")])
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);