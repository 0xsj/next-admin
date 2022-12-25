module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@/assets": "./assets",
            "@/atoms": "./atoms",
            "@/components": "./components",
            "@/constants": "./constants",
            "@/fixtures": "./fixtures",
            "@/hooks": "./hooks",
            "@/navigation": "./navigation",
            "@/screens": "./screens",
            "@/theme": "./theme",
            "@/utils": "./utils",
            "@": "./",
          },
        },
      ],
    ],
  };
};
