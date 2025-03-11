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
 * View is used almost exactly to how a `div` is used on the web: for positioning and styling.
 * All text must be surround by a `<Text>` tag
 * All styling in React Native is using flexbox, it's similar to the web, but some defaults are different

### Inline Styles
 * No units (no px, em, or rem, everything is in display points)
 * Defined as valid JavaScript objetcs
    - `backgroundColor` instead of `background-color`
 * No css animations
 * Positioning in React Native is done with Flexbox, few differences from the web:
    - all elements have `display: flex` by default
    - `dlexDirection` defaults to `column` (instead of `row`)
    - `alignContent` defaults to `flex-start` (instead of `strech`)
    - `flexShrink` defaults to `0` (instead of `1`)
    - the `flex` parameter only supports a single number

