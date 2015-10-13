iiiiioiooooo-dom
================

An experimental structural editor for Clojure designed for the structural (functional) editing of data structures (e.g. code) and visualized by the DOM.

Mechanism:

The application is a Clojure map containing nearly all the functions it needs to edit itself. Data structures to be edited are stored in zippers in the map and a subset of the map is visualized by DOM elements. Keystroke sequences leading to editing functions are also stored in the map (this application is keyboard only). It's not as simple as it could be yet, but it's getting there. The aim is for the app to contain the environment in which functions are evaluated so that all its functions can be edited within the app.

Visualization:

This version of iiiiioiooooo uses the DOM for visualization. Currently the synchronisation of state with the DOM is inefficient (each modification results in a replacement of the parent).

Selection and Navigation:

Currently, the app uses a quite traditional navigation and selection system, which will be dropped. Navigation isn't the right way to think of it, data structures aren't 'places' they are shapes. As such, selection will be done by applying composable functions to the data structure as a whole.

Status:

Barely usable. There are loads of bugs.
