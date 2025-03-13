# React Native Course Notes 📝

## Setup 🛠️

Create new app using expo:
`npx create-expo-app 'app-name' -t`
-t will show options to choose (blank typescript)

Install Dependencies:
`npm expo lint`
`npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier`

Run the app on phone
download expo go then run `npx run start` it will start the JavaScript bundler
open the camera app and scan the QR code to deep link to Expo Go.

## React Native Basics

- View is used almost exactly to how a `div` is used on the web: for positioning and styling.
- All text must be surround by a `<Text>` tag
- All styling in React Native is using flexbox, it's similar to the web, but some defaults are different

### Inline Styles

- No units (no px, em, or rem, everything is in display points)
- Defined as valid JavaScript objetcs
  - `backgroundColor` instead of `background-color`
- No css animations
- Positioning in React Native is done with Flexbox, few differences from the web:

  - all elements have `display: flex` by default
  - `flexDirection` defaults to `column` (instead of `row`)
  - `alignContent` defaults to `flex-start` (instead of `strech`)
  - `flexShrink` defaults to `0` (instead of `1`)
  - the `flex` parameter only supports a single number
  - cannot have global styles in React Native, an easy way to share styles between components is have a shared theme file

### Button

In order to make anything into a button, wrap it in a Pressable or Touchable component. The two main components you use here are `TouchableOpacity`, and `Pressable`.

### Icons
Expo icons is built on top of react-native-vector-icons and have a convenient website to search for icons https://icons.expo.fyi/Index.

To install: `npx expo install @expo/vector-icons`

SVGs are not the most optimal way to render things on react native (in particular Android).

### Navigation
React Native doesn't come with a navigation library built in, so need to use external library to handle this.
Expo Router is a file system-based navigation for React Native, and it's built on top of React Navigation.

