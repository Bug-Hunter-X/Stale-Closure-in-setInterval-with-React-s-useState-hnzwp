```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The callback doesn't have access to the latest state values.
    const intervalId = setInterval(() => {
      setCount(count + 1); // count is stale
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```