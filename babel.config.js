module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    //reanimated should be last pulgins in the list
    'react-native-reanimated/plugin',
  ],
};
