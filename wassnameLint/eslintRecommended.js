/** 
 * eslint.recommended (annotated)
 * ================
 * Annotated defaults based on eslint.recommended
 *
 * @author: wassname
 * @license: MIT
 * @website https://gist.github.com/wassname/4693303388396c5f074b10865a969b43
 * @date 2017-11-13T23:08
 * @eslint-version: 4.11.0
 */

module.exports = {
    "plugins": [
        // e.g. "react"
    ],
    "globals": {
        // e.g "jquery": true,
    },
    "rules": {
        /**
         *  Rules
         *
         * Rules in ESLint are grouped by category to help you understand their purpose.
         *
         * No rules are enabled by default. The `"extends": "eslint:recommended"` property in a [configuration file](../user-guide/configuring#extending-configuration-files) enables rules that report common problems, which have a check mark (recommended) below.
         *
         * The `--fix` option on the [command line](../user-guide/command-line-interface#fix) automatically fixes problems (currently mostly whitespace) reported by rules which have a wrench (fixable) below.
         *
         *
        **/
        /**
         Possible Errors
         *
         * These rules relate to possible syntax or logic errors in JavaScript code:
         *
         *
        **/
        "no-cond-assign": "error", // disallow assignment operators in conditional expressions (recommended)
        "no-console": "error", // disallow the use of 'console` (recommended)
        "no-constant-condition": "error", // disallow constant expressions in conditions (recommended)
        "no-control-regex": "error", // disallow control characters in regular expressions (recommended)
        "no-debugger": "error", // disallow the use of 'debugger` (recommended)
        "no-dupe-args": "error", // disallow duplicate arguments in 'function` definitions (recommended)
        "no-dupe-keys": "error", // disallow duplicate keys in object literals (recommended)
        "no-duplicate-case": "error", // disallow duplicate case labels (recommended)
        "no-empty": "error", // disallow empty block statements (recommended)
        "no-empty-character-class": "error", // disallow empty character classes in regular expressions (recommended)
        "no-ex-assign": "error", // disallow reassigning exceptions in 'catch` clauses (recommended)
        "no-extra-boolean-cast": "error", // disallow unnecessary boolean casts (recommended)
        "no-extra-parens": "off", // disallow unnecessary parentheses
        "no-extra-semi": "error", // disallow unnecessary semicolons (recommended) (fixable)
        "no-func-assign": "error", // disallow reassigning 'function` declarations (recommended)
        "no-inner-declarations": "error", // disallow 'function` or `var` declarations in nested blocks (recommended)
        "no-invalid-regexp": "error", // disallow invalid regular expression strings in 'RegExp` constructors (recommended)
        "no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments (recommended)
        "no-negated-in-lhs": "off", // disallow negating the left operand in 'in` expressions (recommended)
        "no-obj-calls": "error", // disallow calling global object properties as functions (recommended)
        "no-prototype-builtins": "off", // Disallow use of 'Object.prototypes` builtins directly
        "no-regex-spaces": "error", // disallow multiple spaces in regular expression literals (recommended)
        "no-sparse-arrays": "error", // disallow sparse arrays (recommended)
        "no-unexpected-multiline": "error", // disallow confusing multiline expressions (recommended)
        "no-unreachable": "error", // disallow unreachable code after 'return`, `throw`, `continue`, and `break` statements (recommended)
        "no-unsafe-finally": "error", // disallow control flow statements in 'finally` blocks (recommended)
        "use-isnan": "error", // require calls to 'isNaN()` when checking for `NaN` (recommended)
        "valid-jsdoc": "off", // enforce valid JSDoc comments
        "valid-typeof": "error", // enforce comparing 'typeof` expressions against valid strings (recommended)

        /**
         Best Practices
         *
         * These rules relate to better ways of doing things to help you avoid problems:
         *
         *
        **/
        "accessor-pairs": "off", // enforce getter and setter pairs in objects
        "array-callback-return": "off", // enforce 'return` statements in callbacks of array methods
        "block-scoped-var": "off", // enforce the use of variables within the scope they are defined
        "complexity": "off", // enforce a maximum cyclomatic complexity allowed in a program
        "consistent-return": "off", // require 'return` statements to either always or never specify values
        "curly": "off", // enforce consistent brace style for all control statements
        "default-case": "off", // require 'default` cases in `switch` statements
        "dot-location": "off", // enforce consistent newlines before and after dots
        "dot-notation": "off", // enforce dot notation whenever possible
        "eqeqeq": "off", // require the use of '===` and `!==`
        "guard-for-in": "off", // require 'for-in` loops to include an `if` statement
        "no-alert": "off", // disallow the use of 'alert`, `confirm`, and `prompt`
        "no-caller": "off", // disallow the use of 'arguments.caller` or `arguments.callee`
        "no-case-declarations": "error", // disallow lexical declarations in case clauses (recommended)
        "no-div-regex": "off", // disallow division operators explicitly at the beginning of regular expressions
        "no-else-return": "off", // disallow 'else` blocks after `return` statements in `if` statements
        "no-empty-function": "off", // disallow empty functions
        "no-empty-pattern": "error", // disallow empty destructuring patterns (recommended)
        "no-eq-null": "off", // disallow 'null` comparisons without type-checking operators
        "no-eval": "off", // disallow the use of 'eval()`
        "no-extend-native": "off", // disallow extending native types
        "no-extra-bind": "off", // disallow unnecessary calls to '.bind()`
        "no-extra-label": "off", // disallow unnecessary labels
        "no-fallthrough": "error", // disallow fallthrough of 'case` statements (recommended)
        "no-floating-decimal": "off", // disallow leading or trailing decimal points in numeric literals
        "no-implicit-coercion": "off", // disallow shorthand type conversions
        "no-implicit-globals": "off", // disallow 'var` and named `function` declarations in the global scope
        "no-implied-eval": "off", // disallow the use of 'eval()`-like methods
        "no-invalid-this": "off", // disallow 'this` keywords outside of classes or class-like objects
        "no-iterator": "off", // disallow the use of the '__iterator__` property
        "no-labels": "off", // disallow labeled statements
        "no-lone-blocks": "off", // disallow unnecessary nested blocks
        "no-loop-func": "off", // disallow 'function` declarations and expressions inside loop statements
        "no-magic-numbers": "off", // disallow magic numbers
        "no-multi-spaces": "off", // disallow multiple spaces (fixable)
        "no-multi-str": "off", // disallow multiline strings
        "no-native-reassign": "off", // disallow assignments to native objects or read-only global variables (recommended)
        "no-new": "off", // disallow 'new` operators outside of assignments or comparisons
        "no-new-func": "off", // disallow 'new` operators with the `Function` object
        "no-new-wrappers": "off", // disallow 'new` operators with the `String`, `Number`, and `Boolean` objects
        "no-octal": "error", // disallow octal literals (recommended)
        "no-octal-escape": "off", // disallow octal escape sequences in string literals
        "no-param-reassign": "off", // disallow reassigning 'function` parameters
        "no-proto": "off", // disallow the use of the '__proto__` property
        "no-redeclare": "error", // disallow 'var` redeclaration (recommended)
        "no-return-assign": "off", // disallow assignment operators in 'return` statements
        "no-script-url": "off", // disallow 'javascript:` urls
        "no-self-assign": "error", // disallow assignments where both sides are exactly the same (recommended)
        "no-self-compare": "off", // disallow comparisons where both sides are exactly the same
        "no-sequences": "off", // disallow comma operators
        "no-throw-literal": "off", // disallow throwing literals as exceptions
        "no-unmodified-loop-condition": "off", // disallow unmodified loop conditions
        "no-unused-expressions": "off", // disallow unused expressions
        "no-unused-labels": "error", // disallow unused labels (recommended)
        "no-useless-call": "off", // disallow unnecessary calls to '.call()` and `.apply()`
        "no-useless-concat": "off", // disallow unnecessary concatenation of literals or template literals
        "no-useless-escape": "error", // disallow unnecessary escape characters
        "no-void": "off", // disallow 'void` operators
        "no-warning-comments": "off", // disallow specified warning terms in comments
        "no-with": "off", // disallow 'with` statements
        "radix": "off", // enforce the consistent use of the radix argument when using 'parseInt()`
        "vars-on-top": "off", // require 'var` declarations be placed at the top of their containing scope
        "wrap-iife": "off", // require parentheses around immediate 'function` invocations
        "yoda": "off", // require or disallow "Yoda" conditions

        /**
         Strict Mode
         *
         * These rules relate to strict mode directives:
         *
         *
        **/
        "strict": "off", // require or disallow strict mode directives

        /**
         Variables
         *
         * These rules relate to variable declarations:
         *
         *
        **/
        "init-declarations": "off", // require or disallow initialization in 'var` declarations
        "no-catch-shadow": "off", // disallow 'catch` clause parameters from shadowing variables in the outer scope
        "no-delete-var": "error", // disallow deleting variables (recommended)
        "no-label-var": "off", // disallow labels that share a name with a variable
        "no-restricted-globals": "off", // disallow specified global variables
        "no-shadow": "off", // disallow 'var` declarations from shadowing variables in the outer scope
        "no-shadow-restricted-names": "off", // disallow identifiers from shadowing restricted names
        "no-undef": "error", // disallow the use of undeclared variables unless mentioned in '/*global */` comments (recommended)
        "no-undef-init": "off", // disallow initializing variables to 'undefined`
        "no-undefined": "off", // disallow the use of 'undefined` as an identifier
        "no-unused-vars": "error", // disallow unused variables (recommended)
        "no-use-before-define": "off", // disallow the use of variables before they are defined

        /**
         Node.js and CommonJS
         *
         * These rules relate to code running in Node.js, or in browsers with CommonJS:
         *
         *
        **/
        "callback-return": "off", // require 'return` statements after callbacks
        "global-require": "off", // require 'require()` calls to be placed at top-level module scope
        "handle-callback-err": "off", // require error handling in callbacks
        "no-mixed-requires": "off", // disallow 'require` calls to be mixed with regular `var` declarations
        "no-new-require": "off", // disallow 'new` operators with calls to `require`
        "no-path-concat": "off", // disallow string concatenation with '__dirname` and `__filename`
        "no-process-env": "off", // disallow the use of 'process.env`
        "no-process-exit": "off", // disallow the use of 'process.exit()`
        "no-restricted-modules": "off", // disallow specified modules when loaded by 'require`
        "no-sync": "off", // disallow synchronous methods

        /**
         Stylistic Issues
         *
         * These rules relate to style guidelines, and are therefore quite subjective:
         *
         *
        **/
        "array-bracket-spacing": "off", // enforce consistent spacing inside array brackets (fixable)
        "block-spacing": "off", // enforce consistent spacing inside single-line blocks (fixable)
        "brace-style": "off", // enforce consistent brace style for blocks
        "camelcase": "off", // enforce camelcase naming convention
        "comma-dangle": "off", // require or disallow trailing commas (fixable)
        "comma-spacing": "off", // enforce consistent spacing before and after commas (fixable)
        "comma-style": "off", // enforce consistent comma style
        "computed-property-spacing": "off", // enforce consistent spacing inside computed property brackets (fixable)
        "consistent-this": "off", // enforce consistent naming when capturing the current execution context
        "eol-last": "off", // enforce at least one newline at the end of files (fixable)
        "func-names": "off", // require or disallow named 'function` expressions
        "func-style": "off", // enforce the consistent use of either 'function` declarations or expressions
        "id-blacklist": "off", // disallow specified identifiers
        "id-length": "off", // enforce minimum and maximum identifier lengths
        "id-match": "off", // require identifiers to match a specified regular expression
        "indent": "off", // enforce consistent indentation (fixable)
        "jsx-quotes": "off", // enforce the consistent use of either double or single quotes in JSX attributes (fixable)
        "key-spacing": "off", // enforce consistent spacing between keys and values in object literal properties (fixable)
        "keyword-spacing": "off", // enforce consistent spacing before and after keywords (fixable)
        "linebreak-style": "off", // enforce consistent linebreak style (fixable)
        "lines-around-comment": "off", // require empty lines around comments
        "max-depth": "off", // enforce a maximum depth that blocks can be nested
        "max-len": "off", // enforce a maximum line length
        "max-lines": "off", // enforce a maximum file length
        "max-nested-callbacks": "off", // enforce a maximum depth that callbacks can be nested
        "max-params": "off", // enforce a maximum number of parameters in 'function` definitions
        "max-statements": "off", // enforce a maximum number of statements allowed in 'function` blocks
        "max-statements-per-line": "off", // enforce a maximum number of statements allowed per line
        "multiline-ternary": "off", // enforce newlines between operands of ternary expressions
        "new-cap": "off", // require constructor 'function` names to begin with a capital letter
        "new-parens": "off", // require parentheses when invoking a constructor with no arguments
        "newline-after-var": "off", // require or disallow an empty line after 'var` declarations
        "newline-before-return": "off", // require an empty line before 'return` statements
        "newline-per-chained-call": "off", // require a newline after each call in a method chain
        "no-array-constructor": "off", // disallow 'Array` constructors
        "no-bitwise": "off", // disallow bitwise operators
        "no-continue": "off", // disallow 'continue` statements
        "no-inline-comments": "off", // disallow inline comments after code
        "no-lonely-if": "off", // disallow 'if` statements as the only statement in `else` blocks
        "no-mixed-operators": "off", // disallow mixes of different operators
        "no-mixed-spaces-and-tabs": "error", // disallow mixed spaces and tabs for indentation (recommended)
        "no-multiple-empty-lines": "off", // disallow multiple empty lines (fixable)
        "no-negated-condition": "off", // disallow negated conditions
        "no-nested-ternary": "off", // disallow nested ternary expressions
        "no-new-object": "off", // disallow 'Object` constructors
        "no-plusplus": "off", // disallow the unary operators '++` and `--`
        "no-restricted-syntax": "off", // disallow specified syntax
        "no-spaced-func": "off", // disallow spacing between 'function` identifiers and their applications (fixable)
        "no-ternary": "off", // disallow ternary operators
        "no-trailing-spaces": "off", // disallow trailing whitespace at the end of lines (fixable)
        "no-underscore-dangle": "off", // disallow dangling underscores in identifiers
        "no-unneeded-ternary": "off", // disallow ternary operators when simpler alternatives exist
        "no-whitespace-before-property": "off", // disallow whitespace before properties (fixable)
        "object-curly-newline": "off", // enforce consistent line breaks inside braces (fixable)
        "object-curly-spacing": "off", // enforce consistent spacing inside braces (fixable)
        "object-property-newline": "off", // enforce placing object properties on separate lines
        "one-var": "off", // enforce variables to be declared either together or separately in functions
        "one-var-declaration-per-line": "off", // require or disallow newlines around 'var` declarations
        "operator-assignment": "off", // require or disallow assignment operator shorthand where possible
        "operator-linebreak": "off", // enforce consistent linebreak style for operators
        "padded-blocks": "off", // require or disallow padding within blocks (fixable)
        "quote-props": "off", // require quotes around object literal property names
        "quotes": "off", // enforce the consistent use of either backticks, double, or single quotes (fixable)
        "require-jsdoc": "off", // require JSDoc comments
        "semi": "off", // require or disallow semicolons instead of ASI (fixable)
        "semi-spacing": "off", // enforce consistent spacing before and after semicolons (fixable)
        "sort-vars": "off", // require variables within the same declaration block to be sorted
        "space-before-blocks": "off", // enforce consistent spacing before blocks (fixable)
        "space-before-function-paren": "off", // enforce consistent spacing before 'function` definition opening parenthesis (fixable)
        "space-in-parens": "off", // enforce consistent spacing inside parentheses (fixable)
        "space-infix-ops": "off", // require spacing around operators (fixable)
        "space-unary-ops": "off", // enforce consistent spacing before or after unary operators (fixable)
        "spaced-comment": "off", // enforce consistent spacing after the '//` or `/*` in a comment (fixable)
        "unicode-bom": "off", // require or disallow the Unicode BOM (fixable)
        "wrap-regex": "off", // require parenthesis around regex literals

        /**
         ECMAScript 6
         *
         * These rules relate to ES6, also known as ES2015:
         *
         *
        **/
        "arrow-body-style": "off", // require braces around arrow function bodies
        "arrow-parens": "off", // require parentheses around arrow function arguments (fixable)
        "arrow-spacing": "off", // enforce consistent spacing before and after the arrow in arrow functions (fixable)
        "constructor-super": "error", // require 'super()` calls in constructors (recommended)
        "generator-star-spacing": "off", // enforce consistent spacing around '*` operators in generator functions (fixable)
        "no-class-assign": "error", // disallow reassigning class members (recommended)
        "no-confusing-arrow": "off", // disallow arrow functions where they could be confused with comparisons
        "no-const-assign": "error", // disallow reassigning 'const` variables (recommended)
        "no-dupe-class-members": "error", // disallow duplicate class members (recommended)
        "no-duplicate-imports": "off", // disallow duplicate module imports
        "no-new-symbol": "error", // disallow 'new` operators with the `Symbol` object (recommended)
        "no-restricted-imports": "off", // disallow specified modules when loaded by 'import`
        "no-this-before-super": "error", // disallow 'this`/`super` before calling `super()` in constructors (recommended)
        "no-useless-computed-key": "off", // disallow unnecessary computed property keys in object literals
        "no-useless-constructor": "off", // disallow unnecessary constructors
        "no-useless-rename": "off", // disallow renaming import, export, and destructured assignments to the same name (fixable)
        "no-var": "off", // require 'let` or `const` instead of `var` (fixable)
        "object-shorthand": "off", // require or disallow method and property shorthand syntax for object literals (fixable)
        "prefer-arrow-callback": "off", // require arrow functions as callbacks
        "prefer-const": "off", // require 'const` declarations for variables that are never reassigned after declared (fixable)
        "prefer-reflect": "off", // require 'Reflect` methods where applicable
        "prefer-rest-params": "off", // require rest parameters instead of 'arguments`
        "prefer-spread": "off", // require spread operators instead of '.apply()`
        "prefer-template": "off", // require template literals instead of string concatenation
        "require-yield": "error", // require generator functions to contain 'yield` (recommended)
        "rest-spread-spacing": "off", // enforce spacing between rest and spread operators and their expressions (fixable)
        "sort-imports": "off", // enforce sorted import declarations within modules
        "template-curly-spacing": "off", // require or disallow spacing around embedded expressions of template strings (fixable)
        "yield-star-spacing": "off", // require or disallow spacing around the '*` in `yield*` expressions (fixable)

        /**
         Removed
         *
         * These rules from older versions of ESLint have been replaced by newer rules:
         *
         * |Removed rule|Replaced by
         * |---|---
         * |[generator-star](generator-star.md)|[generator-star-spacing](generator-star-spacing.md)
         * |[global-strict](global-strict.md)|[strict](strict.md)
         * |[no-arrow-condition](no-arrow-condition.md)|[no-confusing-arrow](no-confusing-arrow.md) and [no-constant-condition](no-constant-condition.md)
         * |[no-comma-dangle](no-comma-dangle.md)|[comma-dangle](comma-dangle.md)
         * |[no-empty-class](no-empty-class.md)|[no-empty-character-class](no-empty-character-class.md)
         * |[no-empty-label](no-empty-label.md)|[no-labels](no-labels.md)
         * |[no-extra-strict](no-extra-strict.md)|[strict](strict.md)
         * |[no-reserved-keys](no-reserved-keys.md)|[quote-props](quote-props.md)
         * |[no-space-before-semi](no-space-before-semi.md)|[semi-spacing](semi-spacing.md)
         * |[no-wrap-func](no-wrap-func.md)|[no-extra-parens](no-extra-parens.md)
         * |[space-after-function-name](space-after-function-name.md)|[space-before-function-paren](space-before-function-paren.md)
         * |[space-after-keywords](space-after-keywords.md)|[keyword-spacing](keyword-spacing.md)
         * |[space-before-function-parentheses](space-before-function-parentheses.md)|[space-before-function-paren](space-before-function-paren.md)
         * |[space-before-keywords](space-before-keywords.md)|[keyword-spacing](keyword-spacing.md)
         * |[space-in-brackets](space-in-brackets.md)|[object-curly-spacing](object-curly-spacing.md) and [array-bracket-spacing](array-bracket-spacing.md)
         * |[space-return-throw-case](space-return-throw-case.md)|[keyword-spacing](keyword-spacing.md)
         * |[space-unary-word-ops](space-unary-word-ops.md)|[space-unary-ops](space-unary-ops.md)
         * |[spaced-line-comment](spaced-line-comment.md)|[spaced-comment](spaced-comment.md)
        **/
    },
    "parserOpts":{
        /**
         Specifying Parser Options
         *
         * ESLint allows you to specify the JavaScript language options you want to support. By default, ESLint expects ECMAScript 5 syntax. You can override that setting to enable support for other ECMAScript versions as well as JSX by using parser options.
         *
         * Please note that supporting JSX syntax is not the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn't recognize. We recommend using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) if you are using React and want React semantics.
         * By the same token, supporting ES6 syntax is not the same as supporting new ES6 globals (e.g., new types such as
         * `Set`).
         * For ES6 syntax, use `{ "parserOptions": { "ecmaVersion": 6 } }`; for new ES6 global variables, use `{ "env":
         * { "es6": true } }` (this setting enables ES6 syntax automatically).
         * Parser options are set in your `.eslintrc.*` file by using the `parserOptions` property. The available options are:
         *
         *
        **/
        // ecmaVersion: undefined, // set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript syntax you want to use. You can also set to 2015 (same as 6), 2016 (same as 7), or 2017 (same as 8) to use the year-based naming.
        // sourceType: undefined, // set to `"script"` (default) or `"module"` if your code is in ECMAScript modules.
        // ecmaFeatures: undefined, // an object indicating which additional language features you'd like to use:
        // {
            // globalReturn: undefined, // allow `return` statements in the global scope
            // impliedStrict: undefined, // enable global [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (if `ecmaVersion` is 5 or greater)
            // jsx: undefined, // enable [JSX](http://facebook.github.io/jsx/)
            // experimentalObjectRestSpread: undefined, // enable support for the experimental [object rest/spread properties](https://github.com/tc39/proposal-object-rest-spread) (**IMPORTANT:** This is an experimental feature that may change significantly in the future. It's recommended that you do *not* write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
        // }
    },
    "env": {
        /**
         Specifying Environments
         *
         * An environment defines global variables that are predefined. The available environments are:
         *
         *
        **/
        "browser": "false", // browser global variables.
        "node": "false", // Node.js global variables and Node.js scoping.
        "commonjs": "false", // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
        "shared-node-browser": "false", // Globals common to both Node.js and Browser.
        "es6": "false", // enable all ECMAScript 6 features except for modules (this automatically sets the `ecmaVersion` parser option to 6).
        "worker": "false", // web workers global variables.
        "amd": "false", // defines `require()` and `define()` as global variables as per the [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) spec.
        "mocha": "false", // adds all of the Mocha testing global variables.
        "jasmine": "false", // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
        "jest": "false", // Jest global variables.
        "phantomjs": "false", // PhantomJS global variables.
        "protractor": "false", // Protractor global variables.
        "qunit": "false", // QUnit global variables.
        "jquery": "false", // jQuery global variables.
        "prototypejs": "false", // Prototype.js global variables.
        "shelljs": "false", // ShellJS global variables.
        "meteor": "false", // Meteor global variables.
        "mongo": "false", // MongoDB global variables.
        "applescript": "false", // AppleScript global variables.
        "nashorn": "false", // Java 8 Nashorn global variables.
        "serviceworker": "false", // Service Worker global variables.
        "atomtest": "false", // Atom test helper globals.
        "embertest": "false", // Ember test helper globals.
        "webextensions": "false", // WebExtensions globals.
        "greasemonkey": "false", // GreaseMonkey globals.
    },
}
