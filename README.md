# rpi-nest-radiator-switch
A nodejs project to get a Raspberry PI to control a towel radiator using the Nest API

## Getting your auth settings
This project uses the `config.json` to hold your access token. Thankfully Nest 
[uses non-expiring tokens](https://developers.nest.com/documentation/cloud/authorization-reference) so to get your 
access token simply follow these steps:

1. Register a new Nest project for yourself: https://developers.nest.com/products
2. Create a whack 'Redirect URI'
3. Take note of the Product ID and Product Secret and hit the Authorization URL
4. Take note of the `code` in the URL once you've authed
5. Make the CURL request displayed here: https://developers.nest.com/documentation/cloud/sample-code-auth
6. Copy and paste the response into `config.json` (it ought to look like 
`{ "access_token": "xxx", "expires_in": 315360000 }`)
