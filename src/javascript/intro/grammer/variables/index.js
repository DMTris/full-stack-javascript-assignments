//1.
var message = "hello";
let greeting = "Yo!";
const saying = "What up";

//2. yes
message = "world";
//3. yes
greeting = "Hello";
//4. no
saying = "Booyah";

//1. var is global, let is expression scoped
//2. let can be re-used, const is defined once only
//3. let shold be used for math and parameter variables, and const for a variable description that needs to remain "constant". You never want to change that variable. (IP of server, )
