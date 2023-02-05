# GerogeFxTest

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React: ^18.2.0

TailwindCSS: ^3.2.4

## How install and run

run command "npm install"

after installation run command "npm start"

open localhost:3000

## Testing

React Testing Library: "^13.4.0",

Jest DOM: "^5.16.5",

Mock Service Worker: "^0.47.4",

all tests can be found under **tests**

to run tests run command "npm test"

## Deep linking

To use deep linking add currencies after root. Split currencies with '&'.

There is no case sensitivity.

At least one currency should be valid.

Adding one currecny several times will return only one list item.

### Examples:

http://localhost:3000 -> returns all

http://localhost:3000/RON -> returns RON

http://localhost:3000/ron -> returns RON

http://localhost:3000/ATS&BEF&BHD&RON -> returns ATS, BEF, BHD and RON

http://localhost:3000/ATS&BEF&XYZ -> retunrns ATS and BEF

http://localhost:3000/XYZ -> retunrns error message

http://localhost:3000/XYZ&RON -> retunrns RON

http://localhost:3000/RON&RON&RON -> retunrns RON

## Sources

autocomplete and tooltips: https://mui.com/

icons: https://fontawesome.com/

currency mapping: https://github.com/datasets/currency-codes/blob/master/data/codes-all.csv

flag placeholder: https://www.freeimages.com/illustrations/icon/no-image-available-icon?ref=findicons
