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
The filename-to-URL mapping is more obvious on the web. Making it work for mobile has some additional difficulties because we have different types of navigation patterns:
 - Stack 
    - displaying screens in Stack is the default way to navigate. It means that when you navigate to a new screen, it's rendered on top of the current screen.
 - Modal
    - rendering a screen as a Modal, means rendering it on top of the other content. It's important to note that in order for this to work, the modal screen must be defined above or adjacent to the other screens it's being rendered on top of. So for example you couldn't render a screen within a tab navigator modally over the navigator. 
 - Tabs --> Bottom tab navigation
    - the bottom tab navigaion means rendering the screens (or stacks of screens) as bottom tabs where the tabs are always visible so you can easily switch between them.

The key is to making it work is `_layout` routes.
Each folder may have exactly one layout route and it will dictate how the files in the route get laid out.

To install: `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`

Change the main entry in `package.json` to `"main": "expo-router/entry"`
Modify `app.json` to add a sheme: { "sheme": "app-name" }
  --> the reason this is required is that Expo Router comes with deep linking built in 
    (deep linking is basically creating a URL that opens your app to a specific screen)
  --> the way deep linking works on mobile is that your mobile app registers to listen to a specific scheme

#### Ways to navigate
There are 3 main ways to navigate between screens:

Using the `Link` component
Programmatically with the `useRouter` hook
Using the built-in header and bottom tabs button

#### Nested navigators
You can nest navigators pretty much infinitely: a stack within a stack, a stack within a tab, a tab within a stack within a screen.


### Useful Commands
--> restart the bundler: `npx expo start --reset-cache`

