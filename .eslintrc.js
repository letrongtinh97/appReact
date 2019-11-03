module.exports = {
    root: true,
    plugins: ["react", "react-native"],
    extends: ["plugin:react/recommended", "eslint:recommended"],
    parser: "babel-eslint",
    rules: {
        "react-native/no-unused-styles": 2,
        "react/jsx-filename-extension": "off",
        "react/react-in-jsx-scope": "off"
    },
    env: {
        es6: true,
        node: true,
        jest: true,
        "react-native/react-native": true
    }
};
