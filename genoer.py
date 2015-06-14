#!/usr/bin/env python3
import json
from os import path, environ

# Loads HTML template from file as a string
# TODO: extend to load multiple files
templ = ''
templ_file = path.join('src', 'templates', 'index.html')
print('Loading template {}'.format(templ_file))
with open(templ_file, 'r') as f:
    templ = f.read()

# Loads JSON data into a dictionary for further substitions on the template
subst = {}
with open('src/english.json', 'r') as f:
    subst = json.load(f)
print(subst)

# Writes out template with the appropriate substitions made from the data
# obtained from the language-specific JSON file
with open('index2.html', 'w') as index:
    index.write(templ)

print('index.html generated at index2.html')
