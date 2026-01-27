const accountId = 404
let accountEmail = "Vikas@google.com"
var accountPassword = "Vikas1234"
accountCity = "Noida"
let accountState;

//accountId = 2// not allowed

accountEmail = "hc@.com"
accountPassword = "123456"
accountCity = "Delhi"

/* Perfer not to use var bcoz of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail, accountId, accountPassword,accountCity,accountState])
