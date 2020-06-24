import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
    getHome,
    setView
} from "../../actions";

const StyledHome = styled.main`

    .album-row {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        width: 100%;
        white-space: nowrap;
        height: 270px;
        padding: 10px 0;
        margin-bottom: 25px;
        .album {
            width: 240px;
        }
    }

`;

class Main extends React.Component {
    renderAlbums(playlist,index) {
        return (
            <div className="album col-sm-3" onClick={() => { this.props.setView({uri : playlist.uri}) }} key={index}>
                <img className="img-thumbnail" src={playlist.images.length && playlist.images[0].url} alt={playlist.name}/>
                <div className="card-body">
                    <p className="card-title">{playlist.name}</p>
                    <small className="card-text">{playlist.description}</small>
                </div>
            </div>
        )
    }
    renderRow(row) {
        return (
            <>
                <h2>
                    {row.message}
                </h2>
                <div class="album-row">
                    {row.items.map(this.renderAlbums.bind(this))}
                </div>
            </>
        )
    }
    componentDidMount() {
        this.props.getHome();
    }
    render() {
        if(Object.keys(this.props.home).length) {
            return (
                <>
                    <StyledHome>
                        <div className="container">
                            {Object.values(this.props.home).map(this.renderRow.bind(this))}
                        </div>
                    </StyledHome>
                </>
            );
        } else {
            return (
                <>
                    <StyledHome>
                        Loading...
                    </StyledHome>
                </>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home,
        view : state.view,
        device_id: state.device_id
    };
};

export default connect(mapStateToProps, {
    getHome,
    setView
})(Main);
