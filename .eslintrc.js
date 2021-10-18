module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 12,
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true
    },
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:vue/vue3-strongly-recommended"
    ],
    rules: {
        "vue/singleline-html-element-content-newline": "off",
        "vue/max-attributes-per-line": ["error", {"singleline": 3}]
    },
    overrides: [
        {
            files: "nuxt.d.ts",
            rules: {
                "@typescript-eslint/triple-slash-reference": "off"
            }
        }
    ],
    ignorePatterns: [
        "gql/**/*.ts"
    ]
}
