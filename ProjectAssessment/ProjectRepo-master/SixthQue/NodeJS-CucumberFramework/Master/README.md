Dependencies:

1. Install node js
2. Install gulp using below command
	npm install -g gulp
3. Selenium-cucumber-js
	npm install selenium-cucumber-js --save-dev
    
    
    Note: Install necessary files through NPM if it is missing
Run script:
CALL gulp cucumber --file=%file%
CALL gulp cucumberReports

gulp cucumber

// to run all the gulp task in gulpfile.js file

gulp cucumber --file file-name

// to run a particular task in the gulpfile.js file

Ex: gulp cucumber --file loginApp

//To get the reports

Eg:

CALL gulp cucumberReports

