# cypress_accessibility_webfiling
Automated accessibility testing for Webfiling using Cypress.io


> You will need to have nodeJs installed on your machine, please download [nodeJs](https://nodejs.org/en/download/)

### BEFORE YOU START
You must ensure you have your proxy settings, set up correctly. Please see [here](https://docs.cypress.io/guides/references/proxy-configuration.html#Set-a-proxy-on-Linux-or-macOS) for details

**YOU MAY EXPERIENCE ISSUES WITH SETTING PROXY. PLEASE ENSURE YOU'VE SET THE DETAILS IN NPM, BY DOING THE FOLLOWING**
```
npm config set proxy http://wsproxy.internal.ch:8080
npm config set https-proxy https://wsproxy.internal.ch:8080
```

### IDE
It is recommended that you use Visual Studio Code which is optimised for Javascript. Please download [here](https://code.visualstudio.com/Download)

### Open Cypress with
`npm run cypress`

### Run all tests with
`npm run test`

### Running tests in headless mode
Running tests via the command line will run in headless mode e.g.
```
./node_modules/cypress/bin/cypress run --spec "{relative_path}\{test_name}.spec.js"
```

*When tests are executed via the command line a video of the run will be recorded in the **cypress** root folder e.g.*
`C:\Users\user\cypress\videos\test_name.spec.js.mp4 `

###### NOTE:
Video recording will be set to `false` by default. If you require video recordings from the command line you can update this from the command line or simply amending the `video` value in cypress.json to `true`.
It is also worth noting that you should specify the browser. As of cypress@3.6.0 you can record in chrome
```
--browser chrome
```
This is advisable as there have been issues using Electron.

### Accessibility
This project relies upon the following package [cypress-axe](https://www.npmjs.com/package/cypress-axe)
`cypress-axe` requires only 3 commands:
```
cy.injectAxe();
cy.checkA11y();
cy.configureAxe();
```
`cy.injectAxe()` must be called post `cy.visit('/')` then subsequently `cy.checkAlly()` can be called to validate the web page.
For further details on configuring Axe please visit [here](https://www.deque.com/axe/axe-for-web/documentation/api-documentation/#api-name-axeconfigure)

### Limitations
> When running tests in Cypress, Cypress will change it's host URL to match the application under test. Please see [here](https://docs.cypress.io/guides/guides/web-security.html#One-Superdomain-per-Test) for further details.
