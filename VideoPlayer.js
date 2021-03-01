import { styles } from './styles'
import React from 'react'
import Video from 'react-native-video'

class VideoPlayer extends React.Component {

    render() {
        const { video } = this.props.route.params;

        return (
            <Video
                source={{ uri: video.data.video_stream.url }}
                style={styles.backgroundVideo}
                resizeMode="cover"
                controls={true}
                ref={(ref) => {
                    this.player = ref
                }} />
        );
    }
}

export default VideoPlayer;