### GIT [DOES NOT PULL OR CLONE]###
package 'git'

directory "/home/ec2-user/pre_prod_deployment"
#directory "/home/ec2-user/api_preprod_deployment"

git "/home/ec2-user/pre_prod_deployment/dryrun2" do
  repository "git@github.com:booz-allen-agile-delivery/dryrun2.git"
  reference "master"
  action :sync
end

package 'docker'

service "docker" do
  action :start
end

bash "remove_all_containers" do
  code <<-EOH
   sudo docker stop -t=0 $(sudo docker ps -a -q)
   sudo docker rm $(sudo docker ps -a -q)
   EOH
end

bash "fe_pre_production" do 
code <<-EOH
   cd /home/ec2-user/pre_prod_deployment/dryrun2/www
   sudo docker tag fe_pre_prod fe_pre_prod_old
   sudo docker build -t fe_pre_prod .
   sudo docker rmi -f fe_pre_prod_old
   sudo docker run -p 9000:9000 -v /home/ec2-user/pre_prod_deployment/dryrun2/www/app/:/usr/src/app/client/app/ -d fe_pre_prod
EOH
end

bash "api_pre_production" do 
code <<-EOH
   cd /home/ec2-user/pre_prod_deployment/dryrun2/api
   sudo docker run -p 9292:9292 -v /home/ec2-user/pre_prod_deployment/dryrun2/api/:/usr/src/api -d api_pre_prod
EOH
end
