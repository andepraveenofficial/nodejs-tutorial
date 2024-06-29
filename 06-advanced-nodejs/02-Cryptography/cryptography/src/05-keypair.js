const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
    format: 'pem',
    // cipher: 'aes-256-cbc',
    // passphrase: 'top secret'
  },
});

// console.log(publicKey);
// console.log(privateKey);

module.exports = {
    privateKey, publicKey
}



/*
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs+qfr/tRxc0gloeVdHsu
IlIkm3cC8NQpKkbhdbSGN4ECg54vsAe65c+tge7V4opJy/3Uu4NOJItI+azp6OpU
b8D/9u0qVZuBnz/GIGJGd2Ll6HwjUrJw8y2Vek379qQKUcXMbbEiwmOvExFn6B/5
mF4Iuy6cKzCABINObYo8C6vvkCe9eb3qgjmRKTcRj2on7pj2bUKecmQJtBA6DWXh
/MDCATiGxVr4miuA/LrYkU1nlDZeKSERJq9YzLCVrNY7nndSaoTyqEaM6fOarzxn
JNtZrW6kSgHtlsQpe/n4EFUDAi1g6IffTFM3h0dQ/7Uwg+Z4VXV3sOSPLsucNXwx
RQIDAQAB
-----END PUBLIC KEY-----

-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCz6p+v+1HFzSCW
h5V0ey4iUiSbdwLw1CkqRuF1tIY3gQKDni+wB7rlz62B7tXiiknL/dS7g04ki0j5
rOno6lRvwP/27SpVm4GfP8YgYkZ3YuXofCNSsnDzLZV6Tfv2pApRxcxtsSLCY68T
EWfoH/mYXgi7LpwrMIAEg05tijwLq++QJ715veqCOZEpNxGPaifumPZtQp5yZAm0
EDoNZeH8wMIBOIbFWviaK4D8utiRTWeUNl4pIREmr1jMsJWs1jued1JqhPKoRozp
85qvPGck21mtbqRKAe2WxCl7+fgQVQMCLWDoh99MUzeHR1D/tTCD5nhVdXew5I8u
y5w1fDFFAgMBAAECggEAH6P7+GF85InqGL74cDc3ik6i5HpeGIdfQ/GaNe6NChbU
n9wCa/U4D7FhxK+BiukiCE94CZASfofGSi54Jn+LYOnyufTElLCX768yA0D1Poq0
fxnRxnneNk4Gcy9ix+HadL4R8RqNT91jDTnq6Z4x8XNcGrscONY7NU/4S3hbjfuf
p3RMN71d2Y/pwEBIRPM98U1x3SSrZPzPUEgV54iEUztVlrmRXs4MPcoa11/TpQDv
GdM+Wbr6V5VzianxYfttbcTmZy3lvfbEhPZjUdjHGbXEfWp3o7cadIx+bNEso3Eo
tsm2zz4d3CNs2VFbUSJvZ56cO4aay57VYxU6UaAq4QKBgQDmCJGwyn8f7mgEbRdZ
txk+9qmDLEYHkZpRFCFX6tsHhIy4sGa6+RX83w+dgtTNL9FUHNE8s1dabM1uvWvB
W3TJ/IfsRUKFraLXQF9A0/3XxR60ZbnfTJnHrwUtZ8mgFBZNVsnAK7cYq5FhIv97
CZWLEGXjEoanwX67Ls2RngU9dQKBgQDIOcp/m0wgnZ6AIElUxqhWXBcMwaK4ZyzB
kBk27NYhuAkxtMpgEwxxT8wDQBbSHKYtA91haG50qtmMhiKAEiX8QDrkeOyI/bGA
3xQHOVd7j703+9fihCMZdp+W0f76t1aBhI3C2wZkeBqEg6k7EaNh7Ti7VEL0LfQ0
VWeSKdyakQKBgQCfk+I92rxF0oWmTGeefT6uRz9hGB2cso1zIZvf+bToijN1DCq4
GoP+YF/czR4DGeEFkNg2W9OFj2UUJaPTBzcFyIIijgmP4tzMpoNt3aKDROQAEXHY
TrN/qxLUZOOigUzXahWbkrf6DUtVL4o8OHHdfwqvc/Kl/b2E7Pr+wbiw4QKBgQCQ
pwe/5v85tQXUhP7Vi2wEcCWK5r3bQVbZRHSi9LnCxIWH7pgijsB3gHHgi0WxaFc5
wEgI3nymNuRSnHmCUxo0QmcJtr8UPUwm0YNTsL6eGvtV3dFa6aG9/LBRMsdmdFu/
2HbeJoRYw1hNEh2J+jUyQ0KwO7DfXe/Ge0kHFM02sQKBgHum3RAnX4IpveJUGpba
7TpjEVELobjteh/dP1Z9U+HwOh7OHjdbOKmTK4v7qgq/G+YlJxL43mDw8xS2Yb//
mw69IeId7jhVju60nRHfvZrxFXe/cC5U3Q0bOB/xt1wPljXhEhJj8dD3C7nrHEwg
Uh1jTdhtAHFLHlynVXgz4hOG
-----END PRIVATE KEY-----
*/