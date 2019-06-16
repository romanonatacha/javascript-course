function count() {
    let init = document.getElementById('txti')
    let end = document.getElementById('txte')
    let step = document.getElementById('txts')
    let res = document.getElementById('res')

    if (init.value.length == 0 || end.value.length == 0 || step.value.length == 0 ) {
        res.innerHTML = 'Impossible to count!'
    } else {
        res.innerHTML = 'Counting: <br>'
        let i = Number(init.value)
        let e = Number(end.value)
        let s = Number(step.value)

        if (s <- 0) {
            window.alert('Invalid step! Considering 1 step')
            s = 1
        }

        if (i < e) {
            // contagem crescente
            for (let c = i; c <= e;  c += s) {
                res.innerHTML += ` ${c} `
            }
            res.innerHTML += `\u{1F47B}`
        } else {
            // contagem regressiva
            for (let c = i; c >= e; c -= s) {
                res.innerHTML += ` ${c} `
            }
        }
    }
}