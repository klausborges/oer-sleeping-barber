oer-so
======

An open educational resource developed as an assignment for the Operating
Systems I course at Universidade de São Paulo (USP), São Carlos campus.

This resource aims to describe the `name` problem, explain a possible solution
and demonstrate this solution via a graphical visualization, and provide code
implementations of the solution in different programming languages.

Dependencies
------------

* Python 3

Building
--------

Run `src/genoer.py`:

    python src/genoer.py

    chmod +x src/genoer.py
    src/genoer.py

Code implementations of the problem
-----------------------------------

Code implementations of solutions to the problem should be located at FOLDER,
where they will be automatically located. Convention is to name the files as
language-name.ext, where language-name should be ..., and ext is the usual
extension type of the language source code files.
For example, `python.py` for a Python implementation of the solution.

Code implementations will have syntax highlighting provided by PrismJS, but
the pre-built PrismJS files included in this project only support highlighting
for:

* C-like languages
* JavaScript
* Python
* Go
* Java

This decision reflects in a minimal JS code to optimize page loading times,
if an implementation in a different language is included, PrismJS should be
rebuilt. Rebuilding can be done from PrismJS's source or from their download
page, where language-specific syntax highlighters, features (such as line
numbering), and themes can be selected.

To do
-----

* [ ] Add solutions in more programming languages
* [ ] Real-time language switching in JavaScript

Contributions
-------------

Code contributions must follow conventions adopted by the project. Python code
should follow PEP8.

Language translation contributions are highly encouraged and should be done
with pull requests. There's a template for the JSON file in the `src/lang`
folder.

Corrections, for both the code and language JSON files, are also encouraged.

Thanks
------

License
-------
Code is licensed under the MIT license.