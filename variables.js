const accountId = 23456
let accountEmail = "pal@gmail.com"
var accountPassword = "pal1234"
accountCity = "Delhi"
let accountState;

// accountId = 34567      // Not allowed, const cannot be reassigned
accountEmail = "pal_updated@gmail.com"
accountPassword = "pal_updated1234"
accountCity = "Mumbai"

/*
Prefer not to use var, use let or const instead
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(accountId)