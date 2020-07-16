
# HIDUTIL key remapping generator for MacOS ⌨

Basic MacOS key remapping without external software using [hidutil](https://developer.apple.com/library/archive/technotes/tn2450/_index.html). With most of the key remapping software not working in MacOS Big Sur Beta, this is the easiest way to do it.

## Instructions

1. Open the [hidutil generator tool](https://hidutil-generator.netlify.app/)
2. Setup your key remaps
3. Copy the generated configuration to `~/Library/LaunchAgents/com.local.KeyRemapping.plist`
4. Reboot computer

## Setting up locally

`yarn install`

Install npm dependencies.

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
