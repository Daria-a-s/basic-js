const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) return THROWN;

  let res_arr = [];
  let arr_length = arr.length;
  let i = 0;
  if ((arr[0] == '--discard-prev' ) || (arr[0] == '--double-prev')) i++;
  if ((arr[arr_length-1] == '--discard-next') || (arr[arr_length-1] == '--double-next')) arr_length--;

  while ( i < arr_length)
  {
    switch (arr[i])
      {
        case '--discard-next':
          i+=2;
          if ((arr[i] == '--discard-prev') || (arr[i] == '--double-prev')) i++;
          break;
        
        case '--discard-prev':
          res_arr.splice(res_arr.length-1,1);
          i++;
          break;

        case '--double-next':
            i++;
            res_arr.push(arr[i]);
            break;

        case '--double-prev':
            res_arr.push(arr[i-1]);
            i++;
            break;

        default:
            res_arr.push(arr[i]);
            i++;
            break;
      }
  }
  
  return res_arr;
};