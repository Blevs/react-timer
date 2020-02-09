# React Timer

<img src="https://i.imgur.com/C81a9kw.gif">

Let's build a timer with React, and learn some very important lessons about `useState` and `useEffect` along the way.

We will be learning about how `useState` modifies values, how `useEffect` allows us to run code sometimes, and what the heck a 'cleanup function' is.

## Goals

* [ ] Create a working timer. It should start counting when the page loads via `useEffect`.
* [ ] Track the number of seconds with `useState`.
* [ ] Have a 'pause' button stop the timer.
* [ ] Have a 'play' button re-start the timer.
* [ ] Have a 'reset' button clear and stop the timer.

## Stretch Goals

* [ ] Display the pause button when the timer is running, and start button when the timer is stopped.
* [ ] Disable the reset button when it isn't useful.
* [ ] Display the time in a [hh:]mm:ss format.
* [ ] Make your timer keep track of time more accurately by using [`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) instead of assuming exactly a second has passed.
* [ ] Make it a count down timer, instead of a stopwatch.
* [ ] Allow the user to set the amount of time with an input.
* [ ] Try to figure out the weird css to get the circle (and animation) around the time.

## Notes

* You can have a callback function run repeatedly with some delay using [`window.setInterval(func, delay)`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval).
* [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) let's us run code with 'side effects' _sometimes_.

## Install and Use

To run and edit the project, clone the project to your computer, `cd` into the project directory and follow the instructions below for your javascript pacakge manager of choice.

### yarn

In the project directory run `yarn install` to install the depenencies, and `yarn start` to star the development server. It should open a browser tab to `localhost:3000`.

### npm

In the project directory run `npm install` to install the depenencies, and `npm start` to star the development server. It should open a browser tab to `localhost:3000`.
