import { useState } from 'react'
import './App.css'


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}



function App() {
  return (
    <>
    <div className="gameBoard">
    </div>
    </>
  )
}

export default App
