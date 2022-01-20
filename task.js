// ToDo
/*
Task 1
Import array with users (from user1.json file) and write a function that will check if the phone number for every single user contains only digits
Result:
- if the phone number contains only digits then log true in the console
- if the phone number does not contain only digits then log which user's phone number is not correct e.g. "Phone number of user with ID 2 is not correct"

Task 2
Import array with users (from user1.json file) and users (from user2.js file) and compare them
Result:
- if the first email address of users1 is the same as the first email address of users2 (users1.users[1].emailAddress === users2.users[1].emailAddress) then do not log anything
- if the first email address of users1 is not the same as the first email address of users2 then log in the console e.g. "Email addresses of user with ID 1 are not the same. First email is: racks.jacson@test.tt; but second email is: racks.jecson@test.tt".

Compare email addresses, first names, last names and phone numbers.
*/

import list from './users1.json'; //import json file
import users from './users2.js'; //import js file 

let users1 = list.users; // direct access to array of objects from json file
let users2 = users.users; // direct access to array of objects from js file


//function to task 1 
function validatePhoneNumber()
{
        //Loop goes thru the array and checks if the phone numbers match the regexp            
         users1.forEach((user) => {
            if (user.phoneNumber.match(/^[0-9]+$/) != null){
                console.log("true");
            }
            else
            {
                console.log("Phone number of user with id: " + user.userId + " is not correct.")
            }
          });
  
}

console.log("Task number 1: "); // information and blank space for the clarity
console.log("");
validatePhoneNumber(); //call the function to task1 


//function to task 2
function compareUsersProperties()
{
        //email compare
        users1.forEach((email1, index) => {
        const email2 = users2[index];
        if (JSON.stringify(email1.emailAddress) === JSON.stringify(email2.emailAddress)){
            
        }
        else{
            console.log("Email addresses of user with ID " + email1.userId + " are not the same. First email is: " + email1.emailAddress + " but the second email is: " + email2.emailAddress);
        }
    });

        //first name compare
        users1.forEach((fName, index) => {
        const fName2 = users2[index];
        if (JSON.stringify(fName.firstName) === JSON.stringify(fName2.firstName)){
            
        }
        else{
            console.log("First names of user with ID " + fName.userId + " are not the same. First name is: " + fName.firstName + " but the second name is: " + fName2.firstName);
        }
    
    });

        //last name compare
        users1.forEach((lName, index) => {
        const lName2 = users2[index];
        if (JSON.stringify(lName.lastName) === JSON.stringify(lName2.lastName)){

        }
        else{
        console.log("Last names of user with ID " + lName.userId + " are not the same. Last name is: " + lName.lastName + " but the second name is: " + lName2.lastName);
        }

    });

        //phone number compare
        users1.forEach((phone1, index) => {
        const phone2 = users2[index];
        if (JSON.stringify(phone1.phoneNumber) === JSON.stringify(phone2.phoneNumber)){
            
        }
        else{
            console.log("Phone numbers of user with ID " + phone1.userId + " are not the same. Phone number is: " + phone1.phoneNumber + " but the second number is: " + phone2.phoneNumber);
        }

    });


}

console.log(""); //information and blank space for the clarity
console.log("Task number 2: ");
console.log("");
compareUsersProperties(); //call the function to task 2




