FROM centos:latest

RUN echo -e  "[10gen] \n\
name=10gen Repository \n\
baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/\n\
gpgcheck=0 \n\
enabled=1" | tee -a /etc/yum.repos.d/10gen.repo

RUN yum -y update
RUN yum install -y mongo-10gen and mongo-10gen-server

RUN yum -y install ruby-devel
RUN gem install mongo -v 1.12
RUN yum install -y vim
COPY ["","/usr/src/mongodb"]
RUN mkdir -p /data/db
VOLUME ["/data/db"]
EXPOSE 27017
#ENTRYPOINT ["/usr/bin/mongod"]
COPY ["mongo/mongod.conf", "/etc/"]
ENTRYPOINT ["/usr/bin/mongod","--config", "/etc/mongod.conf"]
WORKDIR /usr/src/mongodb
