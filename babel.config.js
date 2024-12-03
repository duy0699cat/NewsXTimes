module.exports = {
  presets: ['@react-native/babel-preset'], // Changed from metro-react-native-babel-preset

  plugins: [
    ['react-native-reanimated/plugin', {
      relativeSourceLocation: true, // Add this for Reanimated
    }],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
