import React from "react"
import ChildOne from "./ChildOne"

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log("constructor p")
    }

    componentDidMount() {
        console.log("mount p")
    }

    render() {
        console.log("render p")
        return (
            <>
                <h1>test</h1>
                {/* <h2>{this.props.name}</h2> */}
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>click</button>
                <h4>{this.state.count}</h4>
                {/* <ChildOne /> */}
            </>

        )
    }
}

export default Test


