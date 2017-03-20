//question response:  We tend to use an if, else style of language. "If you don't do your homework then you get in trouble"
//greeting function
export const greeting = (age) => {
  if (age > 18){
    return 'Hello!'
  } else {
    return 'Yo!'
  };
};
//isTacoTuesday function
export const isTacoTuesday = (day) => {
  if (day === 'tuesday'){
    return true
  } else {
    return false
  };
};
