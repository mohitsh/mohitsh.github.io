---
layout: post
title:  "MySql with Python"
date:   2016-11-25 14:26:40 +0530
---
Reauirements are: PyMySql(for connection and interaction with database), pandas(importing data to data frame for analysis purpose)
Install PyMySql from PyMySql

{% highlight python linenos%}
import pymysql as mysql
import pandas as pd

host = 'hostname' 	
user = 'username'
passwd = 'password'
db = 'dbname'

# create database connection 
conn = mysql.connect(host=host, user=user, passwd=passwd, db=db)

# cursor is required for query execution and data fetching
cur = conn.cursor()

# make a query, execute it and fetch the results
query = "SELECT * FROM users WHERE Id=1"

cur.execute(query)

result = cur.fetchall()

# write the result in a pandas dataframe
df = pd.read_sql_query(query, con=mydb)
df.to_csv('result.csv')

{% endhighlight %}
