import React from "react";

export class Main extends React.Component {
    render() {
        var inputText;
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                       <input type = "text" onChange = {(input) => {console.log(input.target.value)}} />
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.changeUsername()}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}