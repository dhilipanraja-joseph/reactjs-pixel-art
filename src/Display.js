import React, { Component } from 'react'

class Display extends Component {

    render() {
        let { pixels, colors, pixelSize }= this.props
        if (!pixelSize) pixelSize= 20 
        if (!pixels) pixels= 16
        const block= (color, k)=> <div key={k} style={{
            display: 'inline-block',
            width: pixelSize,
            height: pixelSize,
            // margin: 'px',
            backgroundColor: color || 'white',
        }} />

        let view= []
        if (colors.length) for (let i=0; i<pixels; i++) {
            let row= []
            for(let j=0; j<pixels; j++) {
                // console.log("color: ",colors[i][j])
                row.push(block(colors[i][j], i+'-'+j))
            }
            view.push(<div key={i} style={{
                margin: '0px',
                height: pixelSize,
            }}>
                {row}
            </div>)
        }

        return <div id="display">
            <div style= {{
                margin: '20px'
            }}>
                {view}
            </div>
        </div>
    }
}

export default Display