Problem number 1:
How to split the string with department and number if it doesn't have a delimiter
Solution: Using regex

Problem 2
How to validate if the type of data is a year or if it's a semester, since the order may change. It can be Fall 2016 or 2016 Fall:
Solution: I used the ternary operation to check wether the string parsed to integer is not NaN. If it's not NAN, then we know it's the year since it's an integer.

otherwise, we store the last element from the array.

Problem 3:
If the semester and year don't have a space delimiter, there might be a length inconsistence when I use the split method on the string and the semester could be confused with another type of data.
Solution: Check the mutated array after we shifted the department and the course from it. If the length is 1, then we know the semester and year are together, and then we have to split that array element as well.

Problem 4:
If the Department and Course have a space delimiter, the length of the array can be either shorter or longer.
Solution: Split the first element of the array with regex (.split(/([0-9]+)/)) and if the array is of length 1, then departmentCourse had a space in the middle.

Refactor:
Validations - What if the user enters first the course name and then department (eg. 111:CS )? Or what if there are no spaces. It's time to add the validations! Please check the comments on App.js for more detail.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
