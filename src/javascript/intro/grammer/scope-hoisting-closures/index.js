export const ssn = value => {

  const sanitize = () => value.replace(/\D+/g, '');

  const format = (value) => `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;

  const isValid = () => {
    if(value.isNaN == false && value.length == 9){
      return 'Yes'
    };// Your code goes here....
    return 'No';//  return ??
  };

  return {

    isValid,

    toString(){
      return format(sanitize());
    }
  };
};



// Why does this work?
export const result = calculate(1,2);

function calculate(x, y) {
  return x + y;
}

/*1. scoping is a way to define what your looking at with your code

2. everything

3. by returning into an object it makes that information private until called upon

4. creating visibility in your code

5. a variable is declared with the function as the value first.  JS defines variables first then runs the function call

6. something not really used. calling something like a function before it’s defined
*/
