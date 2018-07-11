# Process Manager for Node app
## Overview 
PM2 is production process manager for Node.js application with a built-in load balancer. Which allow application to keep alive forever, to reload them without downtime and to facilitate common system admin task.
Starting application in production mode. 
-  Forever alive
- Process Management
- Log Management
- Zero Config Load-Balancer
- In-terminal Monitoring
- Easy deploy with SSH
 
 ## Usages 
When you run Express apps for production, it is helpful to use a process manager to achieve the following tasks:
- Restart the app automatically if it crashes.
- Gain insights into runtime performance and resource consumption.
- Modify settings dynamically to improve performance.
- Control clustering.
## Installation
> npm install pm2 -g
## Basic use

Starting an Node app by using the pm2 command, you must specify the path of the app. However, when you stop, restart, or delete an app, you can specify just the name or the id of the app.

- Starting node app : 
> pm2 start app.js
- Monitor CPU and memory usage  app : 
> pm2 monit
- Get more detail about an app : 
> pm2 show app.js
- Display logs of the app : 
> pm2 log app.js
- Stop application  : 
> pm2 stop app.js
- Restart application  : 
> pm2 restart app.js





 
