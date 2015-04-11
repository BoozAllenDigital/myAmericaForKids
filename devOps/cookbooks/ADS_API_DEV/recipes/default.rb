
#%w[source2swagger bundler].each do |gem|
#gem_package gem do
#		gem_binary '/usr/bin/gem'
#		action :install
#	end
#end

### GIT [DOES NOT PULL OR CLONE]###
package 'git'

directory "/home/ec2-user/api_dev_deployment"

git "/home/ec2-user/api_dev_deployment/dryrun2" do
  repository "git@github.com:booz-allen-agile-delivery/dryrun2.git"
  reference "api_dev"
  action :sync
end

package 'docker'

service "docker" do
  action :start
end


bash "docker" do 
code <<-EOH
   cd /home/ec2-user/api_dev_deployment/dryrun2/api
   sudo docker stop $(sudo docker ps -a -q)
   sudo docker rm $(sudo docker ps -a -q)
   sudo docker run -p 9292:9292 -v /home/ec2-user/api_dev_deployment/dryrun2/api/:/usr/src/api -d api_dev
EOH
end
