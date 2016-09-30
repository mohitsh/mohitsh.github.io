---
layout: post
title:  "Pandas, Finance and Tesla"
date:   2016-04-02 16:12:40 +0530
categories: jekyll update
---
A demonstration of Pandas' basic operations and its application to financial analysis using Tesla's stock prices.

{% highlight python linenos%}
import numpy as np
import pandas as pd

# a basic pandas data frame
df = pd.DataFrame([1,2,3,4],columns = ['num'], index=['a','b','c','d'])
print(df.index)         # print indices
#Index(['a', 'b', 'c', 'd'], dtype='object')
print(df.columns)       # print column names
#Index(['num'], dtype='object')
print(df.ix['c'])       # print row entries at index 'c'
#num    3
#Name: c, dtype: int64
print(df.ix[['a','c']]) # print both row entries
#   num
#a    1
#c    3 
print(df.sum())         # print col sums
#num    10
#dtype: int64
print(df**2)            # operation on entire row
#   num
#a    1
#b    4
#c    9
#d   16
# add list as column
df['names'] = ['name1', 'name2', 'name3', 'name4']
print(df)
#    num  names
#a     1  name1
#b     2  name2
#c     3  name3 
#d     4  name4

# add data-frame as column
df['age'] = pd.DataFrame([20,21,21,20],index=['a','b','c','d'])
print(df)
#    num  names  age
#a     1  name1   20
#b     2  name2   21
#c     3  name3   21
#d     4  name4   20

# append a new row
df = df.append(pd.DataFrame({'num':5, 'names':'name5', 'age':22}, index=['e',]))
print(df)
#    num  names  age
#a     1  name1   20
#b     2  name2   21
#c     3  name3   21
#d     4  name4   20
#e     5  name5   22

# join two data frames
df = df.join(pd.DataFrame([1,4,9,16,25], 
              index=['a','b','c','d','e'],
              columns=['num_squares'],
              how='outer'
              ))
#    num  names  age   num_squares
#a     1  name1   20             1
#b     2  name2   21             4
#c     3  name3   21             9
#d     4  name4   20            16
#e     5  name5   22            25

{% endhighlight %}
