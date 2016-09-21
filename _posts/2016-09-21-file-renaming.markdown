---
layout: post
title:  "File Renaming"
#date:   2016-09-18 14:26:40 +0530
categories: jekyll update
---
In almost all of the projects involving some kind of document handling/parsing, we get lots of files to deal with. 
Usually these files have cumbersome, non-uniform names, hence renaming. In case of limited number of files say 10-15
it is okay to do this manually but when dealing with large number of files, manual labor is frustrating and not recommended.
I wrote a python script some times back to do this job that I am going to mention below. Although, same thing can be done
using shell script but I'll go with Python, simple because it's easier and usable for wide range of audience.

{% highlight python linenos%}
"""
Assuming all the files are present inside a folder 
and this script is present in the parent directory
"""
import os
os.chdir('path_of_folder_containing_files')
# change directory since all the files are present inside a folder

def rename_files(list_of_files, new_names):
  for i in range(len(list_of_files)):
    os.rename(list_of_files[i], new_names[i])

list_of_files = os.listdir('.')
# a list of all file names

new_names = []
for i in range(len(list_of_files)):
  new_names.append(''.join(['new_name',str(i+1),'.pdf']))
# new file names

rename_files(list_of_files, new_names)

mod_names = os.listdir('.')
for elem in mod_names:
  print(elem)

{% endhighlight %}
