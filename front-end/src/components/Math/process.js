let pendingScripts = [];
let pendingCallbacks = [];
let needsProcess = false;

function process(MathJax, script, callback) {
    pendingScripts.push(script)
    pendingCallbacks.push(callback)
    if (!needsProcess) {
        needsProcess = true
        setTimeout(() => doProcess(MathJax), 0)
    }
}

function doProcess(MathJax) {
    MathJax.Hub.Queue(function() {
        const oldElementScripts = MathJax.Hub.elementScripts
        MathJax.Hub.elementScripts = (element) => pendingScripts

        try {
            return MathJax.Hub.Process(null, () => {
                for (const callback of pendingCallbacks) {
                    callback()
                }

                pendingScripts = []
                pendingCallbacks = []
                needsProcess = false
            })
        } catch (e) {
            throw e
        } finally {
            MathJax.Hub.elementScripts = oldElementScripts
        }
    })
}

module.exports = process
