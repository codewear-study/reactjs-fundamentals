import React from 'react';

class App extends React.Component
{
  state = {
    isLoading:true,
    movies:[],
  }

  componentDidMount()
  {
    setTimeout(() => {
      this.setState({isLoading:false});
    }, 6000);
  }

  render(){
    const {isLoading} = this.state;
    return (
      <h1>{isLoading ? "is Loading..." : "The Movies"} </h1>
    )
  }
}

export default App;

