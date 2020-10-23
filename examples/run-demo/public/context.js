const Context = (function Context() {
  let _worker, _instance;
  return function (worker) {
    if (_instance) return _instance;
    _worker = worker;
    _instance = Object.create(null);
    Object.defineProperties(_instance, {
      setWorker: {
        value: function (worker) {
          _worker = worker;
          return _instance;
        },
        writable: false,
      },


    })
    return _instance;
  }
})()