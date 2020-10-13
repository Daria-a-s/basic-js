const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === null) str = String(str);
  if (options.addition === null) options.addition = String(options.addition);
  if (typeof str !== 'string') str = str.toString();
  if (typeof options.addition !== 'string' && typeof options.addition !== 'undefined') options.addition = options.addition.toString();
  const newOptions = {  
    repeatTimes : options.repeatTimes || 1,
    separator : options.separator || '+',
    addition : options.addition || '',
    additionRepeatTimes : options.additionRepeatTimes || 1,
    additionSeparator : options.additionSeparator || '|'
  }
  let res = '';
  for (let i = 0; i <newOptions.repeatTimes; i++)
  {
    res+=str;
    for (let j = 0; j < newOptions.additionRepeatTimes; j++)
    {
      res+=newOptions.addition;
      if (j != newOptions.additionRepeatTimes-1)
        res+=newOptions.additionSeparator;
    }
    if (i != newOptions.repeatTimes-1)
      res+=newOptions.separator;
  }
  console.log(res);
  return res;
};