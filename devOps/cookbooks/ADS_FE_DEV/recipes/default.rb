
#%w[source2swagger bundler].each do |gem|
#gem_package gem do
#   gem_binary '/usr/bin/gem'
#   action :install
# end
#end

### GIT [DOES NOT PULL OR CLONE]###
package 'git'

directory "/home/ec2-user/fe_dev_deployment"

git "/home/ec2-user/fe_dev_deployment/dryrun2" do
  repository "git@github.com:booz-allen-agile-delivery/dryrun2.git"
  reference "frontend_dev"
  action :sync
end

package 'docker'

service "docker" do
  action :start
end

bash "docker_stop" do 
  cwd '/home/ec2-user/fe_dev_deployment/dryrun2/www'
  code <<-EOH
    sudo docker stop -t=0 $(sudo docker ps -a -q)
    sudo docker rm $(sudo docker ps -a -q)
    sudo docker tag fe_dev_new fe_dev_old
    sudo docker build -t fe_dev_new .
    sudo docker rmi -f fe_dev_old
    sudo docker run -p 9000:9000 -v /home/ec2-user/fe_dev_deployment/dryrun2/www/app/:/usr/src/app/client/app/ -d fe_dev_new
  EOH
end

