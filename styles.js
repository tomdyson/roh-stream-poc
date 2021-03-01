import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    homeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    listingContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10
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
        paddingLeft: 40,
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 110,
        fontFamily: 'AvenirNext-Bold',
        fontWeight: '600',
        textAlign: 'left',
        color: 'white',
        opacity: 1,
    },
    logo: {
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
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
    },
    castListing: {
        flexBasis: '90%',
        marginLeft: 50,
        lineHeight: 58,
        marginRight: 500,
        marginBottom: 0,
        fontSize: 40,
        fontFamily: 'AvenirNext-Bold',
        fontWeight: '500',
        textAlign: 'left',
        color: 'white',
    },
    subhead: {
        marginLeft: 48,
        // marginTop: 25,
        lineHeight: 70,
        paddingTop: 40,
        paddingRight: 20,
        marginBottom: 6,
        marginRight: 500,
        fontSize: 70,
        fontFamily: 'AvenirNext-Bold',
        fontWeight: '500',
        color: 'white',
        opacity: 0.9
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