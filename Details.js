import { styles } from './styles'
import React from 'react'
import {
    ImageBackground,
    Text,
    View,
    TouchableHighlight,
    TVMenuControl,
} from 'react-native';

class Details extends React.Component {

    componentDidMount() {
        TVMenuControl.enableTVMenuKey();
    }

    render() {
        const { video } = this.props.route.params;

        video.res = video.data.maximum_resolution ? '4k' : 'HD';
        video.button_text = video.data.is_live ? 'Watch live' : 'Watch in ' + video.res;
        video.duration_msg = video.data.is_live ? 'Streaming' : video.data.duration + ' minutes';

        return (
            // https://www.positronx.io/how-to-add-full-screen-background-image-in-react-native/
            <ImageBackground
                style={{ flex: 1 }}
                source={{ uri: video.data.cover_image.url }}>
                <View style={styles.listingContainer}>
                    {/* Title */}
                    <Text style={styles.header}>{video.data.title[0].text}</Text>
                    {/* Meta */}
                    <Text style={styles.meta}>{video.data.performance_type} · {video.duration_msg}</Text>
                    {/* Description */}
                    <Text style={styles.description}>{video.data.description[0].text}</Text>

                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="#00264d"
                        activeOpacity={1}
                        hasTVPreferredFocus={true}
                        onPress={() => this.props.navigation.navigate('Player', { video })}>
                        <Text style={styles.buttonText}>{video.button_text}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="#00264d"
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('Cast', { video })}>
                        <Text style={styles.buttonText}>Cast</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.button}
                        underlayColor="#00264d"
                        activeOpacity={1}
                        onPress={() => this.props.navigation.navigate('ROH Stream')}>
                        <Text style={styles.buttonText}>More performances</Text>
                    </TouchableHighlight>

                </View>
            </ImageBackground >
        );
    }
}

export default Details;