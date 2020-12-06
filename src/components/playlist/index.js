import React from "react";
import { connect } from "react-redux";
import Styled from 'styled-components';

const StyledPlaylist = Styled.div`
`

import { getView, setView } from "../../actions";

import TracklistHeader from "../tracklist-header";
import Tracklist from "../tracklist";
import Tracklist from "../loading";

class Playlist extends React.Component {

    componentWillMount() {
        this.props.getView({
            uri: this.props.uri
        });
    }

    UNSAFE_componentWillUpdate(nextProps) {
        if (
            ((nextProps.view || {}).tracks || []).length &&
            ((this.props.view || {}).tracks || []).length &&
            this.props.uri !== nextProps.uri
        ) {
            this.props.getView({ uri: nextProps.uri });
        }
    }

    render() {
        if (Object.keys(this.props.view||{}).length && Object.keys(this.props.view.table|| {}).length) {
            return (
                <StyledPlaylist className="playlist">
                    {/* <TracklistHeader
                        props={view}
                    /> */}
                    <Tracklist
                        table={this.props.view.table}
                    />
                </StyledPlaylist>
            );
        } else {
            return <Loading />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        uri: state.uri,
        view: state.view
    };
};

export default connect(mapStateToProps, {
    getView,
    setView,
})(Playlist);
