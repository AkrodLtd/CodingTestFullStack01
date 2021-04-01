import 'dotenv/config';

export default {
  expo: {
    name: "movie-app",
    slug: "movie-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/images/favicon.png",
    },
    extra: {
      TMDB_TOKEN: process.env.REACT_NATIVE_TMDB_TOKEN,
      TMDB_API_URL: process.env.REACT_NATIVE_TMDB_API_URL,
      WATCHLIST_API_URL: process.env.REACT_NATIVE_WATCHLIST_API_URL,
    },
  },
};
