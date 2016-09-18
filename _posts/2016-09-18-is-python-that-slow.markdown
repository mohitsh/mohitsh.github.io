---
layout: post
title:  "Is Python that Slow ?"
date:   2016-09-18 14:26:40 +0530
categories: jekyll update
---
I have often heard people ranting about Python's speed limits. Being an interpreting language, it has its limits but the trade-off between friendliness and speed is worth it. 
Being a Python enthusiast I tend to collect all the evidences I come across to support usability of Python. Today, while reading the book [Python for Finance][py4fin]  I found this neat example to support my case.
The example below shows that use of (pre-compiled) libraries can help reduce processing time drastically. In first scenario a native Python list has been used to store elementsi followed by implementation of Numpy to store elements. Numpy array improves performance significantly. Use of Numpy brought the processing down to 15.4 seconds from 34 seconds which is less than half.  
Wait! There is more, using numexpr can further improve the performance to 7.9 seconds while using only one thread. 
Now using four threads can further bring the processing time down to 2.8 seconds. 
So finally, it is down to almost 2.5 seconds  from 34 seconds. Hence, Python's speed isn't that bad once you know what tools to use.  

{% highlight python linenos%}
from math import *
from time import time
import numpy as np
import numexpr as ne

loops = 25000000
a = range(1, loops)

def f(x):
  return 3*log(x) + cos(x)**2

s1 = time()
result1 = [f(x) for x in a]
e1 = time()

t1 = e1 -s1
print(t1)
#=> prints: 34.30237698554993

a2 = np.arrange(1, loops)
s2 = time()
result2 = 3*np.log(a2) + np.cos(a)**2
e2 = time()
t2 = e2 - s2
print(t2)
#=> prints: 15.437289476394653 

ne.set_num_threads(1)
f = '3*log(a2) + cos(a2)**2'
s3 = time()
result3 = ne.evaluate(f)
e3 = time()
t3 = e3 - s3
print(t3)
#=> prints: 7.91935658454895

ne.set_num_threads(4)
f = '3*log(a2) + cos(a2)**2'
s4 = time()
result4 = ne.evaluate(f)
e4 = time()
t4 = e4 - s4
print(t4)
#=> prints: 2.794750928878784 
{% endhighlight %}


[py4fin]: http://shop.oreilly.com/product/0636920032441.do 
