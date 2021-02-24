import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    homeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    listingContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tile: {
        flexBasis: '32%',
        height: 480,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingBottom: 60,
    },
    background: {
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },
    listing: {
        fontSize: 32,
        fontWeight: '500',
        // https://github.com/react-native-training/react-native-fonts
        fontFamily: 'AvenirNext-Bold',
        textAlign: 'left',
        paddingTop: 6,
        paddingLeft: 6,
        color: 'white',
        opacity: .9,
    },
    header: {
        flexBasis: '90%',
        paddingLeft: 30,
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 100,
        fontFamily: 'AvenirNext-Bold',
        // fontFamily: 'San Francisco',
        fontWeight: '600',
        textAlign: 'left',
        color: 'white',
        opacity: 1,
    },
    logo: {
        // flexBasis: '10%',
        width: 120,
        height: 120,
        marginTop: 30,
        marginLeft: 30,
    },
    meta: {
        marginLeft: 30,
        marginBottom: 30,
        padding: 20,
        fontSize: 30,
        fontFamily: 'AvenirNext-Bold',
        fontWeight: '500',
        textAlign: 'left',
        color: 'white',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    description: {
        marginLeft: 30,
        lineHeight: 52,
        padding: 20,
        marginRight: 500,
        fontSize: 40,
        fontFamily: 'AvenirNext-Bold',
        fontWeight: '500',
        textAlign: 'left',
        color: 'white',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    buttonText: {
        padding: 20,
        fontSize: 40,
        color: 'white',
        fontFamily: 'AvenirNext-Bold',
        fontWeight: '500'
    },
    button: {
        borderRadius: 10,
        padding: 6,
        marginLeft: 30,
        marginTop: 30,
        width: 440,
        backgroundColor: '#004d99',
        opacity: 0.9
    }
});

export { styles }