# rpi-nest-radiator-switch
A nodejs project to get a Raspberry PI to control a towel radiator using the Nest API

## Setting up the hardware parts
You'll need:

* A Raspberry PI, I'm using v3 (with OS installed, plus git, daemontools, and node)
* A 10A 240V relay (eg [this one from eBay](http://www.ebay.co.uk/itm/161846583843?_trksid=p2057872.m2749.l2649&ssPageName=STRK%3AMEBIDX%3AIT))
* GPIO connectors (I've used [female-to-female](http://www.ebay.co.uk/itm/40pcs-Dupont-Cables-FEMALE-TO-FEMALE-Jumper-GPIO-Wire-Ribbon-Breadboard-Arduino-/262202710636?hash=item3d0c7fda6c:g:v~gAAOSwuAVWzUtn))

This is my hardware set up:
![](https://www.dropbox.com/s/mlqv38lcv16dwik/2016-12-22%2014.58.45.jpg?raw=1)

I use PINs 12 (BCM 18), 1 (5V), and 14 (Ground) to connect to the relay (you're able to change this in the code). Here's a handy chart: https://pinout.xyz/

## Getting your auth settings
This project uses the `config.json` to hold your access token. Thankfully Nest 
[uses non-expiring tokens](https://developers.nest.com/documentation/cloud/authorization-reference) so to get your 
access token simply follow these steps:

1. Do everything as *root* (I know, I know)
1. Open `/etc/rc.local` and add `svscan /service &` before `exit 0`
1. Make a folder `/service`
1. `cd` into `/service` and clone the repo, this'll create a folder within called `rpi-nest-radiator-switch`
1. `cd` into the repo folder, run `chmod +x run`
1. Register a new Nest project for yourself: https://developers.nest.com/products
1. Create a whack 'Redirect URI'
1. Take note of the Product ID and Product Secret and hit the Authorization URL
1. Take note of the `code` in the URL once you've authed
1. Make the CURL request displayed here: https://developers.nest.com/documentation/cloud/sample-code-auth
1. Copy and paste the response into `config.json` (it ought to look like 
`{ "access_token": "xxx", "expires_in": 315360000 }`)
1. Don't forget to set your `target_thermostat` too, this is the ID (key) under `devices > thermostats` object: 
https://developers.nest.com/documentation/api-reference
