import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super();
        console.log(props);
        this.state = {
            age: props.age,
            level: 1
        };
    }

    onGrow() {
        this.setState({age: this.state.age + 2});
    }

    onNextLevel() {
        this.setState({level: this.state.level + 1});
    }

    render() {
        return (
            <div>
                <p>Welcome {this.props.name}, your age is {this.state.age}</p>
                <div>
                    {this.props.ch.name} with Level {this.state.level}
                    <ul>
                        {this.props.ch.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
                    </ul>
                </div>
                {this.props.children}
                <hr/>
                <button className="btn btn-primary" onClick={() => this.onGrow()}>
                    Click Me to Grow
                </button>&nbsp;&nbsp;
                <button className="btn btn-primary" onClick={() => this.onNextLevel()}>
                    Next Level
                </button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    ch: React.PropTypes.object
};