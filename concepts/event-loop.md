# Event Queue

There are 6 main types of event queues which are processed by the navtive libuv event loop and 2 other types are processed by Nodejs itself.

- **Expired timers and intervals queue** -- consists of callbacks of expired timers added using `setTimeout` or interval functions added using `setInterval`

- **IO Events Queue** -- Completed IO events.

- **Immediates Queue** -- Callbacks added using `setImmediate` function

- **Close Handlers Queue** -- Any `close` event handlers.

- **Next Ticks Queue** -- Callbacks added using `process.nextTick` function

- **Other Microstasks Queue** -- Includes other microtasks such as resolved primise callbacks

## Tips

- `nextTickQueue` will be processed after the current operation is completed, regardless of the current phase of the event loop
