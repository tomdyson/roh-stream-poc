import React from 'react'
import {
    ImageBackground,
    Image,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    TVMenuControl,
} from 'react-native';
import { colours, styles } from './styles'
import Prismic from '@prismicio/client';

const apiEndpoint = 'https://roh-rights-demo.cdn.prismic.io/api/v2';
const client = Prismic.client(apiEndpoint);

class Home extends React.Component {
    state = {
        results: [],
    };

    componentDidMount = () => {
        TVMenuControl.disableTVMenuKey();
        client.query(
            [Prismic.Predicates.at('document.type', 'video'),],
            { orderings: '[my.video.is_live desc]' }
        ).then(res => {
            this.setState({ results: res.results });
            // console.log(res.results[0].data);
        })
            .catch(err => {
                console.log('err is ', err);
            })
    }

    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={require('./roh-bg-dark.jpg')}>
                <ScrollView contentContainerStyle={styles.homeContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.logo} source={require('./logo-roh.png')} />
                        <Text style={styles.header}>
                            <Text style={{ color: colours.mint }}>Royal Opera House</Text> Stream
                        </Text>
                    </View>
                    {this.state.results.map(video => (
                        <View style={styles.tile} key={video.id}>
                            <TouchableHighlight
                                style={{ borderRadius: 10, padding: 6 }}
                                underlayColor={colours.cyan}
                                onPress={() => this.props.navigation.navigate('Details', { video: video })}>
                                <ImageBackground
                                    style={{ width: '100%', height: '100%' }}
                                    source={{ uri: video.data.cover_image.url }}
                                    imageStyle={styles.background} />
                            </TouchableHighlight>
                            <Text style={styles.listing}>{video.data.is_live === true ? '⚡ ' : ''}{video.data.title[0].text}</Text>
                        </View>
                    ))
                    }
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default Home;