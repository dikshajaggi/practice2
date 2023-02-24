import React from "react"

class ChildOne extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor child1")
    }

    componentDidMount() {
        console.log("mount child1")
    }
    render() {
        console.log("render child1")
        return (
            <>
                <h1>ChildOne</h1>
            </>

        )
    }
}

export default ChildOne


