# GerogeFxTest

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

React: ^18.2.0
TailwindCSS: ^3.2.4

## How install and run

run command "npm install"
after instalation run command "npm start"
open localhost:3000

## Deep linking

To use deep linking add currencies after root. Split currencies with '&'.
There is no case sensitivity.
At least one currency should be valid.

### Examples:

http://localhost:3000 -> returns all

http://localhost:3000/RON -> returns RON
http://localhost:3000/ron -> returns RON

http://localhost:3000/ATS&BEF&BHD&RON -> returns ATS, BEF, BHD and RON

http://localhost:3000/ATS&BEF&XYZ -> retunrns ATS and BEF

http://localhost:3000/XYZ -> retunrns error message

http://localhost:3000/XYZ&RON -> retunrns RON

## Sources

autocomplete and tooltips: https://mui.com/

icons: https://fontawesome.com/

currency mapping: https://github.com/datasets/currency-codes/blob/master/data/codes-all.csv

flag placeholder: https://www.freeimages.com/illustrations/icon/no-image-available-icon?ref=findicons
