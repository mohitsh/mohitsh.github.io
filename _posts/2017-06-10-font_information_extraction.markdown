---
layout: post
title:  "Font Information From ttf File"
description: "Using Python-Pillow's Image Font Module to Extract Font Information (font-name, size, offset, mask)"
date:   2017-06-11 10:42:02 +0530
tags: [Pillow, Python, Font, ttf]
comments: true
share: true
---

There are two ways to include font face information for a webpage
> Include the font source link

```css
@font-face{
	font-family:PrettiestFontEver;
	src:url(someSecretLocation.ttf);
}
```

> Include an extra long, strange looking, string instead of font source 
AAEAAAAPAIAAAwBwRkZUTTnS5HcAAL5cAAAAHEdERUYAegAEAA


This extra long string is the font file converted to a base64 encoded data. Base64 is a binary to text encoding scheme.
So now, instead of including font-face file, paste the base64 text data in the source file. 
This method has its pros and cons. For example firewall won't bother you anymore since you are not sourcing any font-file. 
Besides server requests are reduced. On the other side your main file gets cluttered due to the presence of base64 string.

#### Font Information Extraction

```python
from base64 import b64decode # for python3
from PIL import ImageFont
from io import BytesIO

# python2
free_type_font_object = ImageFont.FreeTypeFont(BytesIO(open(fname, 'rb').read().decode('base64')))

# python3
free_type_font_object = ImageFont.FreeTypeFont(BytesIO(b64decode(open(fname, 'r').read())))

# list all the callable attributes of free_type_font_object
methods = [elem for elem in dir(free_type_font_object) if callable(getattr(free_type_font_object, elem))]
print(methods)
#[............., font_variant, getmastk, getmask2, getmetrics, getname, getoffset, getsize]

print(free_type_font_object.getname())
# ('FMNDFC+TimesNewRomanPSMT', 'Regular')

print(free_type_font_object.getmetrics())
# (7, 2)

print(free_type_font_object.getsize())
# (49, 9) 

print(free_type_font_object.getoffset('text'))
# (-1 1)

mask1 = free_type_font_object.getmask('text')
# available methods for mask1
met_mask1 = [elem for elem in dir(mask1) if callable(getattr(mask1, elem))]
print(len(met_mask1))
# 83

print(mask1.histogram())
#[34, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 20]

mask2 = free_type_font_object.getmask2('text')
# available methods for mask2
met_mask2 = [elem for elem in dir(mask2) if callable(getattr(mask2, elem))]
print(len(met_mask2))
# 31

# font related information
font_info = free_type_font_object.font

print(font_info.ascent)
# 7
print(font_info.descent)
# 2
print(font_info.family)
# FMNDFC+TimesNewRomanPSMT
print(font_info.style)
# Regular
print(font_info.height)
# 9
print(font_info.x_ppem)
# 10
print(font_info.y_ppem)
# 10

```

