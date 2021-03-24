## ROH TV app POC

A proof of concept using React Native.

## Set up

Run in the Apple TV simulator

`react-native run-ios  --simulator "Apple TV" --scheme "ROHTV-tvOS"`

Run in an Android simulator

`react-native run-android`

Build Android APK

```
npx react-native run-android --variant=release
```
https://reactnative.dev/docs/signed-apk-android#generating-the-release-apk

## Todo

 - [x] Styling improvements
 - [x] Bigger buttons
 - [ ] Catch keyboard movements
 - [x] Get working on Android
 - [x] Different styles for different devices
 - [ ] Look at video controls https://github.com/itsnubix/react-native-video-controls
 - [ ] Fonts https://betterprogramming.pub/using-custom-fonts-in-react-native-2019-289099609837
        https://medium.com/@mehrankhandev/ultimate-guide-to-use-custom-fonts-in-react-native-77fcdf859cf4
 - [ ] Look at responsive screen sizes https://github.com/marudy/react-native-responsive-screen
 - [ ] Look into Hermes https://reactnative.dev/docs/hermes

 ## Links

  - https://reactnative.dev/docs/debugging#accessing-the-in-app-developer-menu
  - https://reactnative.dev/docs/running-on-device
  - https://developer.amazon.com/docs/fire-tv/connecting-adb-to-device.html