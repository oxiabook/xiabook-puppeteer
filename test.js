// const reg = '^(https://www\.qbiqu\.com/)([0-9]{2})_([0-9]{5})*?$'

// ^(*?$)/([0-9]{2})_([0-9]{5})*?$


// ^(https\:\/\/www\.qbiqu\.com\/)([0-9]{2})_([0-9]{5})*?$


// ^(https\:\/\/www\.qbiqu\.com\/)([0-9]{2})_([0-9]{5})*?$







// ^(https\:\/\/www\.qbiqu\.com\/)([0-9]{2})_([0-9]{5})$
// const str = "https://www.qbiqu.com/41_41857/"
const str = "https://www.qbiqu.com/"
var reg = /([0-9]{2})_([0-9]{5})/;
// var reg = new RegExp(pattern, flags)
// reg.test(str)
console.log(reg.test(str)); // true

