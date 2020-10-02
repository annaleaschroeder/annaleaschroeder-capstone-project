# Budgetly

## Never loose track of you monthly budget again!

It is so easy to lose track of your monthly expenses: The early morning coffee from the local bakery, going out to eat with friends, having a beer with colleagues... That's where Budgetly comes into play: Budgetly helps you to keep a comfortable overview of your financial status at any time.

This app was developed as my capstone project during the final four weeks of the neuefische Web Development Bootcamp in September 2020 in Hamburg, Germany.
Budgetly is optimized for mobile usage, so please switch your browser to responsive mode (iPhone 6/7/8)

Take a look at the app here here or watch the demo below.

![demo](public/anna-lea_schroeder_budgetly.gif)

## App impressions

![Homescreen](public/Transaction_Overview.png) ![Add new Transactions](public/Add_new_Transaction.png) ![Edit Transaction](public/Edit_Transaction.png)

## Tech stack

- React
- React Hooks
- React Router
- Styled Components
- Vercel
- PropTypes
- uuid
- Storybook
- Jest
- React Testing Library
- Cypress
- Formik
- Yup

## How to set it up

clone this repository, install all npm dependencies: `npm install`

to run the app in development mode `npm start`, then open http://localhost:3000 to view it in the browser

to run Storybook: `npm run storybook`

to run React Testing Library & Jest: `npm test`

to run Cypress `npm run cypress`

## Features in Backlog

- Sorting: explicit sorting of the TransactionList by date

- Filter: Filter the display of the TransactionList by month, so that only the transactions of the current month are shown

- Create History: The user is able to switch between existing monthly histories by using arrows next to the month headline

- Filter: By clicking on tags, the user is able to filter the entries belonging to the category from one month and display the total sum of transactions of the chosen category and to set it into relation to the monthly balance

- Donut chart based on tags: to help the user keep track of the transaction history, a dynamic donut chart is created based on the assigned tags (percentage values)
