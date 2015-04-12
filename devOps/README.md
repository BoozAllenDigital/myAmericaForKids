#DevOps

## Development lifecycle


push -> jenkins -> chef server -> docker


Once a commit is pushed to a notable branch a continuous integration server, jenkins, will kickoff
an knife command to the chef server. A push  made to the api-dev branch will tell the chef server to run the chef role,
api-dev, and simililary for the front end branch. The cookbooks associated with each branch are specialized to optimze
deployment times for each technology stack. Cookbooks are used to maintain configuration and docker changes for all environments

