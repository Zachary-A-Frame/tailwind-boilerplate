import React from 'react';
import ReactDOM from 'react-dom';
import "./tailwind.output.css";

import WorkCation from "./Components/WorkCation"

const App = () => (
    <div>
      <WorkCation></WorkCation>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<App />, document.querySelector('#root'));
