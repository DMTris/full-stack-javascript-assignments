export const greeting = 'Hello World';
export const characterAt = greeting.charAt(4);
export const greetingArray = greeting.split('');
export const begins = (str, char) => {
  if(str[0] == char){
    return true;
  }
};
export const beginsInsensitive = (str, char) => { if(str[0].toUpperCase() == char.toUpperCase()){
  return true;
}
};
