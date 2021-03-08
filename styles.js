import { Platform, StyleSheet } from 'react-native'

const colours = {
    'mint': '#e0ffff',
    'darkBlue': '#00264d',
    'midBlue': '#004d99',
    'cyan': '#a8dadc',
}

let defaults = {
    'headerSize': 110,
    'logoSize': 120,
    'headerPaddingLeft': 40,
    'tileHeight': 480,
    'listingFontSize': 32,
    'tilePaddingBottom': 60,
    'headerFontFamily': 'AvenirNext-Bold',
    'descriptionFontSize': 40,
    'descriptionLineHeight': 52,
    'descriptionMarginRight': 500,
    'metaFontSize': 30,
    'buttonWidth': 440,
    'buttonFontSize': 40,
    'subheadFontSize': 70,
    'castListingFontSize': 40,
    'castListingLineHeight': 58,
    'subheadLineHeight': 70,
    'buttonTextPadding': 20,
}
if (Platform.OS == 'android' && Platform.isTV) {
    console.log('  is android tv');
    defaults = {
        'headerSize': 60,
        'logoSize': 80,
        'headerPaddingLeft': 33,
        'tileHeight': 240,
        'listingFontSize': 18,
        'tilePaddingBottom': 30,
        'headerFontFamily': 'sans-serif-medium',
        'descriptionFontSize': 18,
        'descriptionLineHeight': 30,
        'descriptionMarginRight': 300,
        'metaFontSize': 18,
        'buttonWidth': 240,
        'buttonFontSize': 20,
        'subheadFontSize': 40,
        'castListingFontSize': 20,
        'castListingLineHeight': 28,
        'subheadLineHeight': 24,
        'buttonTextPadding': 10,
    }
}

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
        height: defaults.tileHeight,
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingBottom: defaults.tilePaddingBottom,
    },
    background: {
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'black',
    },
    header: {
        flexBasis: '90%',
        paddingLeft: defaults.headerPaddingLeft,
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: defaults.headerSize,
        fontFamily: defaults.headerFontFamily,
        fontWeight: '600',
        textAlign: 'left',
        color: 'white',
        opacity: 1,
    },
    listing: {
        fontSize: defaults.listingFontSize,
        fontWeight: '500',
        // https://github.com/react-native-training/react-native-fonts
        fontFamily: defaults.headerFontFamily,
        textAlign: 'left',
        paddingTop: 6,
        paddingLeft: 6,
        color: 'white',
        opacity: .9,
    },
    logo: {
        width: defaults.logoSize,
        height: defaults.logoSize,
        marginTop: 30,
        marginLeft: 30,
    },
    meta: {
        marginLeft: 30,
        marginBottom: 30,
        padding: 20,
        fontSize: defaults.metaFontSize,
        fontFamily: defaults.headerFontFamily,
        fontWeight: '500',
        textAlign: 'left',
        color: 'white',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    description: {
        marginLeft: 30,
        lineHeight: defaults.descriptionLineHeight,
        padding: 20,
        marginRight: defaults.descriptionMarginRight,
        fontSize: defaults.descriptionFontSize,
        fontFamily: defaults.headerFontFamily,
        fontWeight: '500',
        textAlign: 'left',
        color: 'white',
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
    },
    castListing: {
        flexBasis: '90%',
        marginLeft: 50,
        lineHeight: defaults.castListingLineHeight,
        marginRight: 500,
        marginBottom: 0,
        fontSize: defaults.castListingFontSize,
        fontFamily: defaults.headerFontFamily,
        fontWeight: '500',
        textAlign: 'left',
        color: 'white',
    },
    subhead: {
        marginLeft: 48,
        // marginTop: 25,
        lineHeight: defaults.subheadLineHeight,
        paddingTop: 40,
        paddingRight: 20,
        marginBottom: 6,
        marginRight: 500,
        fontSize: defaults.subheadFontSize,
        fontFamily: defaults.headerFontFamily,
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
        padding: defaults.buttonTextPadding,
        fontSize: defaults.buttonFontSize,
        color: 'white',
        fontFamily: defaults.headerFontFamily,
        fontWeight: '500'
    },
    button: {
        borderRadius: 10,
        padding: 6,
        marginLeft: 30,
        marginTop: 30,
        width: defaults.buttonWidth,
        backgroundColor: colours.midBlue,
        opacity: 0.9
    }
});

export { colours, styles }