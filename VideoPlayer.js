import React from 'react';
import VideoPlayerAndroid from './VideoPlayerAndroid';

class VideoPlayer extends React.Component {

    render() {
        const { video } = this.props.route.params;

        return (
            <VideoPlayerAndroid
                uri={video.data.video_stream.url}
                ref={(ref) => {
                    this.player = ref
                }} />
        );
    }
}

export default VideoPlayer;
