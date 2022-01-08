const handlers = {};

console.log("prueba del shell");

window.publish = (topic, message) => {
  window.dispatchEvent(new CustomEvent('pubsub', {
    detail: { topic, message },
  }));
};

window.subscribe = (topic, handler) => {
  const topicHandlers = handlers[topic] || [];
  topicHandlers.push(handler);
  handlers[topic] = topicHandlers;
};

window.unsubscribe = (topic, handler) => {
  const topicHandlers = handlers[topic] || [];
  const index = topicHandlers.indexOf(handler);
  index >= 0 && topicHandlers.splice(index, 1);
};

window.addEventListener('pubsub', ev => {
  const { topic, message } = ev.detail;
  const topicHandlers = handlers[topic] || [];
  topicHandlers.forEach(handler => handler(message));
});
