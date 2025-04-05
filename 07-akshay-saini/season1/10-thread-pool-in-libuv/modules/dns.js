const dns = require('dns');

dns.lookup('www.themeask.com',  (err, address, family) => {
  console.log('address:', address);
  console.log('family:', family);
});

