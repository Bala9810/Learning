const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data recieved for user ${name} with id:${id}`);
});

customEmitter.on("response", () => {
  console.log("some other logic here");
});

customEmitter.emit("response", "bala", 23);
