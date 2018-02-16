[MERN Website Basic Skeleton]

***Common Errors***:

 - [nodemon] Internal watch failed: watch /home/ericnam/Projects/ericnam/services ENOSPC -
 - Fix this error by running the following in terminal:
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
