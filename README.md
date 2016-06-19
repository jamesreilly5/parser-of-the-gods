# Directory of the Gods
A React app that reads/searches from an API and displays the results

![Alt text](/screenshot.png?raw=true "Parser of the Gods App")

## Technical Test For Javascript (UI) Developer

- Good Endpoint: https://athena-7.herokuapp.com/ancients.json
- Search Endpoint: https://athena-7.herokuapp.com/ancients.json?search=Ath
- Error Endpoint: https://athena-7.herokuapp.com/ancients.json?error=true

Using a JS MVC framework of your choice (or regular Javascript/jQuery), please carry out the following tasks:

1. Consume the good endpoint and display a list of the results on-screen.
2. Display the results in capitals without using CSS transforms.
3. Add search functionality to the UI that uses the search endpoint instead.
4. Take the error endpoint and display the error message it returns.
5. If the search term called a second time then fetch it from a local JS cache rather than hitting the network.

You can style the application in any way that you choose.

### Dependencies
* Node/npm
* Gulp

### Development
**Running the app**

- Run `NODE_ENV=development gulp`
- Go to `localhost:8889` to display the app

**Run tests in browser**

Go to `localhost:8889/testrunner.html` to see your tests

**Minify the code, ready for production**

Run `NODE_ENV=production gulp deploy`

### Known issues / design issues
* Should use less over css
