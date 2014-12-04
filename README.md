iiiiioiooooo-dom
================

An experimental structural editor for Clojure designed for the structural (functional) editing of data structures (e.g. code) and visualized by the DOM, sadly.

Mechanism:

The application is a Clojure map containing nearly all the functions it needs to edit itself. Data structures to be edited are stored in zippers in the map and a subset of the map is visualized by DOM elements. Keystroke sequences leading to editing functions are also stored in the map (this application is keyboard only). It's not as simple as it could be yet, but it's getting there.

Visualization:

This version of iiiiioiooooo uses the DOM for visualization, which has been dropped in favour of Canvas.

Selection and Navigation:

Currently, the app uses a quite traditional navigation and selection system, which will be dropped. Navigation isn't the right way to think of it, data structures aren't 'places' they are shapes. As such, selection will be done by applying composable functions to the data structure as a whole.
