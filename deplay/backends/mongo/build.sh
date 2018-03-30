#!/bin/bash

mongod --fork --dbpath=/data/db --logpath=/var/log/mongo

mongo init.js

sign=`ps aux | grep mongod |awk '{print $2}'|sed -n '1p'`

kill -9 $sign

mongod --auth