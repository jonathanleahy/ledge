# Tech. Test

You’re free to use any tools you require, including 3rd party libraries to help you along the way. We’re
more than happy for you to use a boilerplate framework as a starting point, or to start from
scratch if that’s your thing!

Think of it as an MVP: if there are any limitations you hit or improvements you think you
could make, write them down somewhere to discuss with us later.

Here are the technical details:

We would like you to build a very simple account ledger showing your current balance,
debits (withdrawals) and credits (deposits), with the ability to pay money in and out on any
selected date while keeping within some predefined account limits.

The requirements and further details are written from the user perspective, so you can
decide on presentation, methodology and structure.

* As a user I have a bank account with a starting balance of £2,000
* As a user I have an agreed overdraft of £250 that cannot be exceeded
* As a user I want to see a list of deposits and withdrawals into and out of my account,
   ordered by date (most recent first)
* As a user I want to log money deposits into my account, storing the date and amount
   credited
* As a user I want to log money withdrawals from my account, storing the date and
   amount debited
* As a user I want to see an up-to-date balance for my account
* As a user I want to know when I have entered my agreed overdraft
* As a user I want to know when I have more than £4,000 in my account so that I can
   make relevant spending and saving choices
* As a user I want to see the limits I have in place on my account
* As a user I am obsessed with the 90s and want a retro feel to my account ledger
    Once you’re done, please provide us with a link to a git repository containing your code. If
    there are install steps, document these in a README so that we can give it a try.
    Thanks!

## Up and running

```npm install```

```npm run start```

Outstanding:

- Notification when insufficient funds available
- Sorting by date of transactions
- Input validation, such as - and weird cases
- tests


## Other Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
