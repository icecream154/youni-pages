set timeout -1
npm run build
zip -r build.zip build
echo "zip done"

expect -c "
set timeout -1
spawn scp build.zip root@124.71.108.172:/usr/local/tomcat/apache-tomcat-10.0.11/webapps
expect \"*password*\"
send \"hyftp154FUDAN\n\"
expect eof"

expect -c "
set timeout -1
spawn ssh root@124.71.108.172 \"rm -rf /usr/local/tomcat/apache-tomcat-10.0.11/webapps/build\n\"
expect \"*password*\"
send \"hyftp154FUDAN\n\"
expect eof
"

expect -c "
set timeout -1
spawn ssh root@124.71.108.172 \"cd /usr/local/tomcat/apache-tomcat-10.0.11/webapps\n unzip build.zip\n\"
expect \"*password*\"
send \"hyftp154FUDAN\n\"
expect eof
"

rm build.zip