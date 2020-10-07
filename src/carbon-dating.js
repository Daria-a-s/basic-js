const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!(/[0-9]/.test(sampleActivity) && (typeof(sampleActivity) == "string") && (+sampleActivity > 0 && +sampleActivity < MODERN_ACTIVITY))) return false;
  let res = (Math.log10(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
  console.log(res);
  return Math.ceil(res);
};
 
