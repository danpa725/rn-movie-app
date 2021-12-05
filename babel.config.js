module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          root: ['./src'],
          extensions: [
                      '.ios.js', 
                      '.ios.ts',
                      '.ios.tsx',
                      '.android.js',  
                      '.android.ts',
                      '.android.tsx',
                      '.js',
                      '.ts',
                      '.tsx',
                      '.json'
                      ],
          alias: {
            '@': "./src",
            '@tests': "./__tests__",
            '@components': "./src/components",
            "@assets": "./src/assets",
            "@constants": "./src/constants",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils"
          }
        }
      ]
    ]
  };
};
