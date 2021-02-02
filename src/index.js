module.exports = function toReadable (number) {
  let result = "";
  const lut19 = ["zero","one","two","three","four","five","six","seven","eight","nine","ten", "eleven","twelve",
      "thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const lutTens = ["0","10","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  if (number >= 100){
      result += lut19[(number/100) | 0] + " hundred";
      if (number % 100 == 0){
          return result;
      }else{
          result += " ";
      }
  }

  number %= 100;
  if (number < 20){
      return result + lut19[number];
  }

  result += lutTens[(number/10) | 0];
  if (number%10 === 0){
      return result;
  } else{
      result += " ";
  }

  result += lut19[(number%10) | 0];

  return result;
}
