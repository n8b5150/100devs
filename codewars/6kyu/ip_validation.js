// DESCRIPTION:
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function isValidIP(str) {
    let ipArr = str.split('.')
    ipArr = ipArr.map(e => parseInt(e))
    if (ipArr.join('.') != str) return false
    if (ipArr.length == 4){
        let status = false
        for (let i = 0; i < ipArr.length; i++){
            if (ipArr[i] >= 0 && ipArr[i] < 256) {
                status = true
            }else return false
        }
        return status
    }
    return false;
}

  console.log(isValidIP("0.0.0.0"), true);
  console.log(isValidIP("12.255.56.1"), true);
  console.log(isValidIP("137.255.156.100"), true);
  
  console.log(isValidIP(''), false);
  console.log(isValidIP('abc.def.ghi.jkl'), false);
  console.log(isValidIP('123.456.789.0'), false);
  console.log(isValidIP('12.34.56'), false);
  console.log(isValidIP('01.02.03.04'), false);
  console.log(isValidIP('256.1.2.3'), false);
  console.log(isValidIP('1.2.3.4.5'), false);
  console.log(isValidIP('123,45,67,89'), false);