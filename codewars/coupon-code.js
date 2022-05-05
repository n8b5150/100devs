// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(userCode,validCode,userDate,validDate){
    return userCode === validCode && parseDate(userDate) <= parseDate(validDate)
}

function parseDate(dateStr){
    let month = ['January','February','March','April','May','June','July','August','September','October','November','December']

    //remove comma from string
    //split date string
    let dateArr = dateStr.replace(',','').split(' ')
    
    //return month array index + day + year
    //so that yyyymmdd
    //console.log(dateArr)
    //console.log(month.indexOf(dateArr[0]))
    //console.log(month.indexOf(dateArr[0])*100 + +dateArr[1] + +dateArr[2]*10000)
    return month.indexOf(dateArr[0])*100 + +dateArr[1] + +dateArr[2]*10000
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"), 'true')
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"), 'false')
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), 'true')
console.log(checkCoupon('123a','123','September 5, 2014','November 1, 2014'), 'false')

// best answer used Date.parse

function checkCoupon1(userCode,validCode,userDate,validDate){
    return userCode === validCode && Date.parse(userDate) <= Date.parse(validDate)
}

console.log(checkCoupon1("123", "123", "July 9, 2015", "July 9, 2015"), ' - true')
console.log(checkCoupon1("123", "123", "July 9, 2015", "July 2, 2015"), ' - false')
console.log(checkCoupon1('123','123','September 5, 2014','October 1, 2014'), ' - true')
console.log(checkCoupon1('123a','123','September 5, 2014','November 1, 2014'), ' - false')