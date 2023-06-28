# Contributing to Clipio Modules

Thank you for your interest in contributing to the Clipio Modules repository! By contributing your modules, you help expand the range of features and customizations available to the Clipio community.

To ensure a smooth contribution process, please read and follow the guidelines outlined below.

## Module Submission Guidelines

When submitting a module to the Clipio Modules repository, please adhere to the following guidelines:

- Each module should be organized in a folder with the following structure: `githubusername-module-name`.
  Here are some examples: `ptinosq-to-uppercase` | `orattray-remove-spaces` | `johndoe-extract-urls`
- The module folder must contain a `module-manifest.json` file, which provides specific information about the module. (Please refer to the provided `TEMPLATE` directory for an example of the manifest file structure.)
- The module folder must include a JavaScript file, typically named `module.js`, which exports a function called `run`. This function is the entry point for the module's functionality.
- Ensure that your module follows best practices and adheres to any relevant coding standards.
- Test your module locally to ensure it works as expected and does not conflict with other modules or the core functionality of Clipio.

## How to Contribute

To contribute a module to the Clipio Modules repository, please follow these steps:

1. Fork this repository to your GitHub account.
2. Create a new directory within the `modules` directory, following the naming convention: `githubusername-module-name` (all lowercase, kebab-case).
3. Place your module files within the created directory, including the `module-manifest.json` and the JavaScript file (e.g., `module.js`).
4. We strongly suggest using the provided `TEMPLATE` directory as a starting point for your module. It includes a well-structured folder and file setup, as well as an example manifest file.
5. Customize the module files in the new directory according to your module's functionality.
6. Ensure that your module files are organized and structured correctly, following the guidelines mentioned above.
7. Test your module locally to confirm its functionality and compatibility with Clipio.
8. Commit and push your changes to your forked repository.
9. Submit a pull request to the `clipio-modules` repository, clearly describing the purpose and details of your module.

## Legal Considerations

By submitting a module to the Clipio Modules repository, you affirm that the code you are contributing is either your original work or obtained legally and in compliance with all necessary licenses and permissions. Please avoid contributing plagiarized or infringing code.

## Code of Conduct

Please note that all contributors are expected to adhere to the [Clipio Code of Conduct](CODE_OF_CONDUCT.md) when participating in the Clipio Modules repository.

## License

By contributing your module to the Clipio Modules repository, you agree to license your code under the [GNU GPL v3 License](LICENSE).

---

We appreciate your valuable contributions to the Clipio Modules repository and the enhancement of the Clipio experience. Thank you for your dedication and support!

