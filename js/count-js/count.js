let notMore = false
function effectNumber(element, initial = 0, end, time = 10, acc = 1, callback = function () { }) {
    if (!notMore) {
        let count = Number(initial)
        const displayTimer = document.querySelector(element)
        let status = 'crescente'

        if (Number(initial) > Number(end)) {
            status = 'regressivo'
        } else if (Number(initial) === Number(end)) {
            status = 'nulo'
        } else if (Number(initial) < Number(end)) {
            status = 'crescente'
        }

        if (status === 'regressivo') {
            displayTimer.innerHTML = count
            const timer = setInterval(() => {
                if ((count - 1) >= end) {
                    count = Number((count - Number(acc)).toFixed(2))
                    displayTimer.innerHTML = count
                } else {
                    displayTimer.innerHTML = end
                    clearInterval(timer)
                    callback()
                }
            }, time)
        } else if (status === 'crescente') {
            displayTimer.innerHTML = count
            const timer = setInterval(() => {
                if ((count + 1) <= end) {
                    count = Number((count + Number(acc)).toFixed(2))
                    displayTimer.innerHTML = count
                    notMore = true
                } else {
                    displayTimer.innerHTML = end
                    clearInterval(timer)
                    callback()
                    notMore = true
                }
            }, time)
        } else if (status === 'nulo') {
            displayTimer.innerHTML = end
        }

    }else{
        window.onscroll = null
    }


}