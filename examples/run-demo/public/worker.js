
importScripts('/behavior.js')
importScripts('/behavior.js')


function Validator() {
  let ctx
  return function (worker) {
    function send(instanceId, payload) {
      worker.postMessage({ instanceId, payload })
    }
    ctx = ctx || {
      send,
      worker
    }
    worker.onmessage = function handleOnMessage(e) {
      const { instanceId, action } = e.data;
      behavior(ctx, action)
      console.log(instanceId, action, 'action');
      setTimeout(() => {
        send(instanceId, action)
      }, 1500)
    }
  }
}


(Validator)(this)


