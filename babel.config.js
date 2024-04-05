module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './app/components',
          navigations: './app/navigations',
          screens: './app/screens',
          hooks: './app/hooks',
          constants: './app/constants',
          types: './app/types',
          utils: './app/utils',
          store: './app/store',
        },
      },
    ],
    'nativewind/babel',
  ],
};
