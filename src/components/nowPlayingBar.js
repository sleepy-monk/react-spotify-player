import React, { useState } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import NowPlayingInfo from './nowPlayingInfo';
import TimerContainer from './timer/timerContainer';
import Timer from './timer';

const StyledPlayingBar = Styled.div`
    background-color: #282828;
    border-top: 1px solid #000;
    display: grid;
    grid-template-columns: 20%;
    grid-template-rows: auto;
    grid-template-areas:
      "sidebar main main ."
      "footer footer footer footer";

    .playing-wrapper {
        grid-area: sidebar;
    }
    .inner-now-playing {
        grid-area: main;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .controls-buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-self: center;
            width: 150px;

            .control-button {
                color: #b3b3b3;
                position: relative;
                width: 32px;
                min-width: 32px;
                height: 32px;

                &.play {
                    border: 1px solid #b3b3b3;
                    border-radius: 32px;
                }

                svg {
                    position: relative;
                    top: -3px;
                    left: -3px;
                    height: 15px;
                    width: 15px;
                }
            }
        }

        .playback-bar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 45%;
            max-width: 722px;
            align-self: center;
            align-items: center;

            .playback-progress-bar {
                width: 100%;
                margin: 0 10px;
                background-color:#1a1a1a;
                .progress-bar-inner {
                    background-color: #b3b3b3;
                    border-radius: 2px;
                    height: 4px;
                    width: 0;
                }
            }
        }
    }
`

const NowPlaying = ({player,currentTrack}) => {

    const [barTracking,setBarTracking] = useState(0);

    const togglePlayButton =() => {
        const paused = (currentTrack || {}).paused;
        if(paused === false || paused === null) {
            return (
                <button
                    className="btn btn-outline-secondary control-button play"
                    onClick={player.pause}
                >
                    <i class="fas fa-pause"></i>
                </button>
            )
        }

        return (
            <button
                className="btn btn-outline-secondary control-button play"
                onClick={() => {
                    player.resume()
                }}
            >
                <i className="fas fa-play"></i>
            </button>
        )
    }

    const onChangePosition = (position) => {
        setBarTracking(Math.floor(100*position/(currentTrack || {}).duration_ms));
    }

    if(Object.keys((player || {})).length === 0 && (currentTrack || {})) return (<div className="now-playing">não existe</div>)
    return(
        <StyledPlayingBar className="now-playing">
            <div className="playing-wrapper">
                <NowPlayingInfo currentTrack={currentTrack} />
            </div>
            <div className="inner-now-playing">
                <div className="controls-buttons">
                    <button className="btn control-button" onClick={player.prev}>
                        <i className="fas fa-backward"></i>
                    </button>
                    {togglePlayButton()}
                    <button className="btn control-button" onClick={player.next}>
                        <i className="fas fa-forward"></i>
                    </button>
                </div>
                <div className="playback-bar">
                    <TimerContainer currentTrack={currentTrack || {}} onChangePosition={onChangePosition} />
                    <div className="playback-progress-bar">
                        <div className="progress-bar-inner" style={{width: barTracking+'%'}}></div>
                    </div>
                    {
                        (currentTrack || {}).duration_ms && <Timer fixed={(currentTrack || {}).duration_ms} />
                    }
                </div>
            </div>
        </StyledPlayingBar>
    )
}

NowPlaying.propTypes = {
    player : PropTypes.object,
    currentTrack : PropTypes.object
}


export default NowPlaying;

