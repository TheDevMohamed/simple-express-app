<h1>Simple Node.js Express app </h1>
This repository demonstrates how to use Docker Compose to run a simple Node.js Express app in different environments, with Nginx load balancing and Docker Swarm replicas.


[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/inessadl/readme/issues)




## Quick start

_### Getting started_

1- Clone the cd to the app 
`git clone https://github.com/TheDevMohamed/simple-express-app.git && cd simple-express-app`

2- Run `npm install`

### _**Dev image**_
> **Build** `docker-compose -f docker-compose.yml -f docker-compose.dev.yml build`
>
> **Start** `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`
> 
> **Push to your own repo** `docker-compose -f docker-compose.yml -f docker-compose.dev.yml push express-app`

### **_Prod image_**
> **Build** `docker-compose -f docker-compose.yml -f docker-compose.prod.yml build`
>
> **Start** `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up`
>
> **Push to your own repo** `docker-compose -f docker-compose.yml -f docker-compose.prod.yml push express-app`


## API/Route Table

Route | Description
--- | ---
/ | main page
/users | empty for now
/* | Goes to a not found page

## Contributing 

Thank you for considering contributing to Your Project Name!

Please first note we have a code of conduct, please follow it in all your interactions with the project.

We welcome any type of contribution, not only code. You can help with:
- **QA**: File bug reports, the more details you can give the better (e.g. screenshots with the console open)
- **Community**: Presenting the project at meetups, organizing a dedicated meetup for the local community

## Demo

http://15.185.142.226/

## TODO

* [ ] Add DB, Redis to **prod** env.
* [ ] Add more routes.
* [ ] Integrate k8s
