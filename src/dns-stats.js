const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsObj = {};
  let dnsArr = [];

  domains.forEach((e) => {
    let dns = "." + e.split(".").reverse().join(".");
    dns = dns.split("");
    while (dns.length) {
      dnsArr.push(dns.join(""));
      dns.splice(dns.lastIndexOf("."));
    }
  });
  for (let elem of dnsArr) {
    if (dnsObj[elem]) {
      dnsObj[elem] += 1;
    } else {
      dnsObj[elem] = 1;
    }
  }
  return dnsObj;
}

module.exports = {
  getDNSStats,
};
