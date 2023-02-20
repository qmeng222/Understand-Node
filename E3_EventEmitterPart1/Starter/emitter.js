function Emitter() {
  this.events = {};
}

/*
eg:
type: "onFileSave", ...
emitter.events = {
	onFileSave: [listener1, listener2, ...]
}
*/
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
};

module.exports = Emitter;
