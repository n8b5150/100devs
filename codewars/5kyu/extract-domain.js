// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

const url = "http://github.com/carbonfive/raygun" //-> domain name = "github"
const url2 = "http://www.zombie-bites.com"         //-> domain name = "zombie-bites"
const url3 = "https://www.cnet.com"                //-> domain name = 'cnet"

function extractDomain(url){
    let domain = []
    if (url.includes('www')){
        domain = url.replace('www','').split('.')
    }else {
        domain = url.replace('//','.').split('.')
    }
    return domain[1]
}

console.log(extractDomain(url))
console.log(extractDomain(url2))
console.log(extractDomain(url3))

// best answer
// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };