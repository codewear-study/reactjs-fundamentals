import React from 'react';

function Potato( { favorite }){
  return <h1>i like {favorite} </h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Potato favorite = "Kimchi"/>
    </div>

  );
}

export default App;
