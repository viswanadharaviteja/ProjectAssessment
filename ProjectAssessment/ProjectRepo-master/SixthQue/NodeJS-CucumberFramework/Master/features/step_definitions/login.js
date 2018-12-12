'use strict';

var assert=require('assert');
var seleniumWebdriver=require('selenium-webdriver');

module.exports = function() {
    this.World = require('../support/world.js').World;


    this.Given(/^Open browser and Start Open Cart Application$/, function () {

        this.driver.get("https://www.opencart.com/");
        this.driver.manage().window().maximize ();
        this.driver.sleep(4000);


    });


    this.Then(/^I click on Login link$/, function () {

        this.driver.findElement({ linkText: 'Login' }).click();

        //this.driver.sleep(2000);
    });


    this.When(/^I enter the "([^"]*)"$/, function (arg1) {

        this.driver.findElement({ id:'input-email'}).sendKeys(arg1)

    });
    
    this.When(/^I enter "([^"]*)" in password field$/, function (arg1) {
        this.driver.findElement({ id:'input-password'}).sendKeys(arg1)
        /*this.driver.sleep(2000);*/
    });

    this.Then(/^I click on Login button$/, function () {
        this.driver.findElement({xpath: '//*[@id="account-login"]/div[2]/div/div[1]/form/div[3]/div[1]/button[1]'}).click();

    });


    this.Then(/^I should see the error message as ”([^”]*)”$/, function (arg1) {

        this.driver.findElement({xpath: '//*[@id="account-login"]/div[2]/div[1]'}).getText().then(function(ele){

            var errormessage = ele;

        console.log('Error message is:', errormessage)

            var errormessage=  errormessage.replace(/[^a-zA-Z0-9,/,. ]/g, "")

            assert.equal(errormessage, arg1);

        });


    });

};

