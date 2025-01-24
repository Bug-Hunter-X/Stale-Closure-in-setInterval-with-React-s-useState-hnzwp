# Stale Closure Bug in React

This repository demonstrates a common error in React applications involving the use of `setInterval` with the `useState` hook.  The problem arises from closures and how they capture state values.

## The Bug

The `bug.js` file contains a component that attempts to increment a counter every second using `setInterval`. However, the callback function within `setInterval` uses a stale closure. This means it uses the value of `count` from when the `useEffect` hook was initially called, not the current value.  As a result, the counter will not increment correctly.

## The Solution

The `bugSolution.js` file provides a corrected version of the component. The solution leverages the functional update form of `setCount` to ensure that the counter increments with the latest state value. 

This updated `setCount` call uses a functional update, preventing the stale closure problem. The provided callback receives the latest value of the state as an argument and returns the updated state value.