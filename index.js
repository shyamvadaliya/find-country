"use strict";

const countryJSON = require('./assets/country.json');
const stateJSON = require('./assets/state.json');
function getAll() {
    return countryJSON;
}

function getCountryName(name) {
    if (!name) {
        return [];
    } else {
        let newArray = countryJSON.filter(function (el) {
            return el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        });
        return newArray;
    }
}


function getCountryCode(code) {
    if (!code) {
        return [];
    } else {
        let newArray = countryJSON.filter(function (el) {
            return el.code.toLocaleLowerCase() === code.toLocaleLowerCase()
        });
        return newArray;
    }
}


function getCountryCurrency(currency) {
    if (!currency) {
        return [];
    } else {
        let newArray = countryJSON.filter(function (el) {
            return el.currency.toLocaleLowerCase() === currency.toLocaleLowerCase()
        });
        return newArray;
    }
}

module.exports.getAll = getAll;
module.exports.getCountryName = getCountryName;
module.exports.getCountryCode = getCountryCode;
module.exports.getCountryCurrency = getCountryCurrency;