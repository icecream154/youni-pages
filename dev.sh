set timeout -1
npm run build
zip -r build.zip build
echo "zip done"

expect -c "
set timeout -1
spawn scp build.zip root@120.55.170.127:~
expect \"*password*\"
send \"a4d14B835d7116Fa\n\"
expect eof"

expect -c "
set timeout -1
spawn ssh root@120.55.170.127 \"rm -rf ~/build\n\"
expect \"*password*\"
send \"a4d14B835d7116Fa\n\"
expect eof
"

expect -c "
set timeout -1
spawn ssh root@120.55.170.127 \"cd ~\n unzip build.zip\n\"
expect \"*password*\"
send \"a4d14B835d7116Fa\n\"
expect eof
"

rm build.zip