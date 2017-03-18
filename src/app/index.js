import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";

console.log("Log Message");

class App extends React.Component {
    render() {
        var choice = {
            name: "Sports",
            hobbies: ["Cricket", "Football"]
        };
        return (
            <div className="container">
                <hr/>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-0">
                        <Header/>
                    </div>
                </div>
                <hr/>                
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-0">
                        <Home name={"Kavien"} age={5} ch={choice}>
                            <p>I like Daddy.</p>
                        </Home>
                    </div>
                </div>
            </div>            
        );
    }
}

render(<App/>, window.document.getElementById("app"));