const account_id = 144553
let account_email = "harshitagon@gmail.com"
var account_passward = "12345"
account_city = "Jaipur"

let account_state;

// account_id = 2 // not allowed because it is defined as constant

account_email = "hg@gmail.com"
account_passward = "12321"
account_city = "kolkata"

console.log(account_id);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([account_id, account_email, account_passward, account_city, account_state])