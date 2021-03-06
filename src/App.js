import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom";

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <h3> Hello Vietnam </h3>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

export default tick;
