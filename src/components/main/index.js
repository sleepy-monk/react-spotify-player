import React from "react";
import { connect } from "react-redux";

import './style.scss';

import {
    logout,
    getUser,
    getPlaylists,
    setView,
    setDeviceId,
    getPlayer
} from "../../actions";

import View from "../view";
import Login from "../login";
import Menu from "../menu";
import Controls from "../controls";

class Main extends React.Component {
    constructor() {
        super();
        /**
         * Aplication Initiated Flag
         * @type {Boolean}
         */
        this.initiated = false;
    }
    /**
     * Initial configuration
     * @function run
     * @return {Void}
     */
    run() {
        const { currentTrack, setDeviceId } = this.props;
        this.props.getPlayer({ currentTrack, setDeviceId })
        this.initiated = true;
    }
    UNSAFE_componentWillUpdate() {
        !this.initiated  && this.props.logged.status === true && this.run();
    }
    componentDidMount() {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const lastPage = window.localStorage.getItem('last_uri');
            // Seta a primeira view
            this.props.setView(lastPage ? { uri : lastPage} : '');
        };
    }
    onSearchChange(ev) {
        console.log(ev);
    }
    render() {
        const {
            logged,
            uri,
            tracks,
            device_id,
            getPlaylists,
            logout,
            setView,
            playlists
        } = this.props;

        if(!logged.status) {
            return <Login />;
        } else {
            return (
                <div className="main">
                    <div className="row">
                        <div className="menu-wrapper col-sm-2">
                            <Menu
                                getPlaylists={getPlaylists}
                                logout={logout}
                                setView={setView}
                                playlists={playlists}
                                uri={uri}
                            />
                        </div>
                        <div className="browser-wrapper col-sm-10">
                            <View
                                uri={uri}
                                tracks={tracks}
                            />
                        </div>
                        <div className="controls-wrapper">
                            <Controls />
                        </div>
                    </div>
                    {
                        process.env.NODE_ENV === 'development' ?
                        (
                            <div className="debug">
                                <p>{JSON.stringify(uri)}</p>
                                <p>{JSON.stringify(device_id)}</p>
                            </div>
                        ) :
                        ''
                    }
                </div>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        logged: state.logged,
        playlists: state.playlists,
        uri: state.uri,
        device_id: state.device_id
    };
};

export default connect(mapStateToProps, {
    logout,
    getUser,
    getPlaylists,
    setView,
    setDeviceId,
    getPlayer
})(Main);
