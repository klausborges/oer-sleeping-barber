The Sleeping Barber Problem
===========================

The Sleeping Barber Problem is an Open Educational Resource (OER) developed for
the Operating Systems I course at University of São Paulo (USP), São Carlos campus.

This project aims to improve the course experience for teachers and students alike
by providing resources to aid in understanding a common problem in inter-process
communication and synchronization. Among these resources there is an explanation of
the problem and the core concepts needed to understand it, the development and proposal
of one of the possible solutions, a visualization tool demonstrating the state of the
semaphores and mutexes, and code implementation of the proposed solution.

Dependencies
------------

None. The project is batteries included!

Installing
----------

Installing this OER is as simple as cloning this repository, or extracting the contents
of a zip file and running `index.html` in your browser.


Code implementations of the problem
-----------------------------------

Code implementations will have syntax highlighting provided by PrismJS, but
the pre-built PrismJS files included in this project only support highlighting
for:

* C

This decision reflects in a minimal JS codebase to optimize page loading times.
If an implementation in a different language is to be included, PrismJS should be
rebuilt. Rebuilding can be done from PrismJS's source or from their download
page, where language-specific syntax highlighters, features (such as line
numbering), and themes can be selected.

To do
-----

* [ ] Add solutions in more programming languages
* [ ] Templating and translation to Portuguese
* [ ] Real-time language switching in JavaScript
* [ ] Visualization tools with real multi-threading

Contributions
-------------

Code contributions must follow conventions adopted by the project.

Language translation contributions are highly encouraged, even if there is no
real support for them yet! An implementation of a templating engine is coming.

Corrections are also very welcome.

Resources
---------

Resources used in this project:

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [jQuery](http://jquery.com/)
* [Prism](http://prismjs.com/)

License
-------
Code is licensed under the MIT license.