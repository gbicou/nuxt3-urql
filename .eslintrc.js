module.exports = {
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "extends": [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:vue/vue3-strongly-recommended"
    ],
    "rules": {}
}
