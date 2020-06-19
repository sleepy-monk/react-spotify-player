import React from 'react';
import styled from 'styled-components'

const StyledControls = styled.div`
    background-color: #282148;
    height: 8vh;
    .controls {
        button svg { color: #fff; }
    }
`

const Controls = (props) => {
    const { current } = props;
    const { player } = current;
    return(
        <>
            <StyledControls>
                {/* <div className="controls">
                    <button className="btn btn-outline-secondary" onClick={previous}>
                        <i className="fas fa-backward"></i>
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => play(current.uris)}
                    >
                        <i className="fas fa-play"></i>
                    </button>
                    <button className="btn btn-outline-secondary" onClick={pause}>
                        <i className="fas fa-pause"></i>
                    </button>
                    <button className="btn btn-outline-secondary" onClick={next}>
                        <i className="fas fa-forward"></i>
                    </button>
                    {current.name}
                </div> */}
            </StyledControls>
        </>
    )
}

export default Controls;
