import 'react-native-gesture-handler';
import React from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TVMenuControl,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Video from 'react-native-video';
import Prismic from '@prismicio/client';
import { styles } from './styles'

// var running_on_tv = Platform.isTV;
const apiEndpoint = 'https://roh-rights-demo.cdn.prismic.io/api/v2'
const client = Prismic.client(apiEndpoint);

class Home extends React.Component {
  state = {
    results: [],
  };

  componentDidMount = () => {
    TVMenuControl.disableTVMenuKey();
    client.query(
      [Prismic.Predicates.at('document.type', 'video')]
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
            <Text style={styles.header}><Text style={{ color: '#e0ffff' }}>Royal Opera House</Text> Stream</Text>
          </View>
          {this.state.results.map(post => (
            <View style={styles.tile} key={post.id}>
              <TouchableHighlight
                style={{ borderRadius: 10, padding: 6 }}
                underlayColor='#a8dadc'
                onPress={() => this.props.navigation.navigate('Details', { post })}>
                <ImageBackground
                  style={{ width: '100%', height: '100%' }}
                  source={{ uri: post.data.cover_image.url }}
                  imageStyle={styles.background} />
              </TouchableHighlight>
              <Text style={styles.listing}>{post.data.title[0].text}</Text>
            </View>
          ))
          }
        </ScrollView>
      </ImageBackground>
    );
  }
}

class Details extends React.Component {

  componentDidMount() {
    TVMenuControl.enableTVMenuKey();
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     on: true
  //   };
  // }

  render() {
    const { post } = this.props.route.params;

    post.video_type = 'HD';
    if (post.data.maximum_resolution) { post.video_type = '4k' };

    return (
      // https://www.positronx.io/how-to-add-full-screen-background-image-in-react-native/
      <ImageBackground
        style={{ flex: 1 }}
        source={{ uri: post.data.cover_image.url }}>
        <View style={styles.listingContainer}>
          {/* Title */}
          <Text style={styles.header}>{post.data.title[0].text}</Text>
          {/* Meta */}
          <Text style={styles.meta}>{post.data.performance_type} · {post.data.duration} minutes</Text>
          {/* Description */}
          <Text style={styles.description}>{post.data.description[0].text}</Text>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#00264d"
            activeOpacity={1}
            hasTVPreferredFocus={true}
            onPress={() => this.props.navigation.navigate('Player', { post })}>
            <Text style={styles.buttonText}>Watch in {post.video_type}</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#00264d"
            activeOpacity={1}
            onPress={() => this.props.navigation.navigate('Cast', { post })}>
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

class Cast extends React.Component {

  componentDidMount() {
    TVMenuControl.enableTVMenuKey();
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     on: true
  //   };
  // }

  render() {
    const { post } = this.props.route.params;

    return (
      // https://www.positronx.io/how-to-add-full-screen-background-image-in-react-native/
      <ImageBackground
        style={{ flex: 1 }}
        source={{ uri: post.data.cover_image.url }}>
        <View style={styles.listingContainer}>
          {/* Title */}
          <Text style={styles.header}>{post.data.title[0].text} Cast</Text>
          {/* Meta */}
          <Text style={styles.meta}>{post.data.performance_type} · {post.data.duration} minutes</Text>
          {/* Description */}
          <Text style={styles.description}>{post.data.description[0].text}</Text>

          <TouchableHighlight
            style={styles.button}
            underlayColor="#00264d"
            activeOpacity={1}
            hasTVPreferredFocus={true}
            onPress={() => this.props.navigation.navigate('Details', { post })}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableHighlight>

        </View>
      </ImageBackground >
    );
  }
}


class VideoPlayer extends React.Component {

  render() {
    const { post } = this.props.route.params;

    return (
      <Video
        source={{ uri: post.data.video_stream.url }}
        style={styles.backgroundVideo}
        resizeMode="cover"
        controls={true}
        ref={(ref) => {
          this.player = ref
        }} />
    );
  }
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: 'black' },
          headerShown: false,
        }}
      >
        <Stack.Screen name="ROH Stream" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Player" component={VideoPlayer} />
        <Stack.Screen name="Cast" component={Cast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;