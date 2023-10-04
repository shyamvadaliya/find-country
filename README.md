## Install

```
$ npm install find-country
```

## Usage
### Country
```
const findCountry = require('find-country');

// If Get All Country that Call below method
findCountry.getAll();

// If pass country name and get specific Country that Call below method
findCountry.getCountryName('India');

// If pass country code and get specific Country that Call below method
findCountry.getCountryCode('IN');

// If pass currency code and get specific Country that Call below method
findCountry.getCountryCurrency('INR');

output return a country array
    "name": "India",
    "code": "IN",
    "id": 103,
    "phone": 91,
    "symbol": "₹",
    "capital": "New Delhi",
    "currency": "INR",
    "continent": "Asia",
    "continent_code": "AS",
    "alpha_3": "IND"
```