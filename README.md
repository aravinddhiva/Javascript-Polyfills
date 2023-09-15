# JavaScript Polyfills

![GitHub](https://img.shields.io/github/license/aravinddhiva/Javascript-Polyfills)

This repository contains a collection of JavaScript polyfills to fill in gaps and add support for modern JavaScript features in older browsers. Polyfills are code snippets or libraries that enable you to use features from the latest ECMAScript specifications in browsers that may not support them natively.

## Table of Contents

- [Introduction](#introduction)
- [Polyfills](#polyfills)
  - [Promise.all](#promiseall-polyfill)
  - [Promise.any](#promiseany-polyfill)
  - [Promise.race](#promiserace-polyfill)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

As web development evolves, it's crucial to ensure your web applications work across various browsers, including older ones. This repository aims to provide a collection of well-documented and maintained polyfills for common JavaScript features.

## Polyfills

### Promise.all Polyfill

[Promise.all](promise-all.js) is a polyfill that provides support for the `Promise.all` method. It allows you to wait for all promises in an iterable (e.g., an array) to fulfill or any to reject. This is especially useful for scenarios where you need to perform multiple asynchronous operations concurrently and wait for all of them to complete.

### Promise.any Polyfill

[Promise.any](promise-any.js) is a polyfill that provides support for the `Promise.any` method. It allows you to wait for the first promise in an iterable to fulfill. This is useful when you want to handle the result of the first successful promise and ignore the rest.

### Promise.race Polyfill

[Promise.race](promise-race.js) is a polyfill that provides support for the `Promise.race` method. It allows you to wait for the first promise in an iterable to settle (either fulfill or reject). This can be helpful in scenarios where you want to race multiple promises and handle the result of the first one to settle.

Please refer to each polyfill's individual documentation for installation and usage instructions.

## Usage

To use any of the polyfills provided in this repository, follow these general steps:

1. Clone or download this repository to your local machine.
2. Navigate to the polyfill you want to use.
3. Follow the installation and usage instructions provided in the polyfill's documentation.

Keep in mind that polyfills should be included selectively based on the specific features you need to support in your project. Including unnecessary polyfills can bloat your code and affect performance.

## Contributing

Contributions to this repository are welcome! If you have a JavaScript polyfill that you'd like to share or if you'd like to improve existing polyfills, please follow these steps:

1. Fork this repository.
2. Create a new branch for your contribution.
3. Make your changes or add your polyfill.
4. Document your polyfill, including installation and usage instructions.
5. Submit a pull request, describing your changes and their purpose.

Your contributions will help improve the compatibility of web applications across different browsers.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute these polyfills in your projects, both commercial and open source. However, we encourage you to contribute back to this repository if you make improvements or create new polyfills.
