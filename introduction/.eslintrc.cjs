//Harsh  -- Lead (uses semicolon, uses double quote)
//Swikar -- Junior dev (don't uses semicolon, uses backtick)
//Sarthak -- Junior dev (uses single quote in string)


//Due to this , there cause merge conflict
//so eslint is used to overcome this.

// eslintrc.cjs
module.exports = {
  // Makes ESLint stop searching for configs in parent folders
  root: true,

  // Defines global environments
  env: {
    browser: true, // window, document, etc.
    es2021: true,  // modern JavaScript features
    node: true,    // Node.js globals
  },

  // Base rule sets to extend
  extends: [
    "eslint:recommended",              // core ESLint rules
    "plugin:react/recommended",         // React best practices
    "plugin:react-hooks/recommended",   // Rules for React Hooks
  ],

  // JavaScript parsing options
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  // React settings
  settings: {
    react: {
      version: "detect", // Automatically detects React version
    },
  },

  // ESLint plugins used
  plugins: ["react", "react-hooks"],

  // Custom rule overrides
  rules: {
    // React 17+ with Vite doesn't need React import in JSX
    "react/react-in-jsx-scope": "off",

    // Beginners often don't use PropTypes
    "react/prop-types": "off",

    // Warn instead of error for unused variables
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

    // Allow console logs during development
    "no-console": "off",
  },
};
