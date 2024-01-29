const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
    // Adds support lottie files
    "lottie"
);

module.exports = config;
