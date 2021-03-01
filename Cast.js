import { styles } from './styles'
import React from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    TVMenuControl,
} from 'react-native';

class Cast extends React.Component {

    componentDidMount() {
        TVMenuControl.enableTVMenuKey();
    }

    render() {
        const { video } = this.props.route.params;

        return (
            // https://www.positronx.io/how-to-add-full-screen-background-image-in-react-native/
            <ScrollView contentContainerStyle={styles.homeContainer}>
                <View style={styles.listingContainer}>
                    <Text style={styles.subhead}>Cast</Text>
                    <Text style={styles.castListing}>
                        {video.data.performers.map(performer => (
                            <Text key={performer.name}><Text style={{ color: '#e0ffff' }}>{performer.role}:</Text> {performer.name}{"\n"}</Text>
                        ))
                        }
                    </Text>

                    <Text style={styles.subhead}>Crew</Text>
                    <Text style={styles.castListing}>
                        {video.data.members.map(member => (
                            <Text key={member.name}><Text style={{ color: '#e0ffff' }}>{member.role}:</Text> {member.name}{"\n"}</Text>
                        ))
                        }
                    </Text>

                    <View style={{ marginLeft: 20 }}>
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="#00264d"
                            activeOpacity={1}
                            hasTVPreferredFocus={true}
                            onPress={() => this.props.navigation.navigate('Details', { video })}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableHighlight>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

export default Cast;