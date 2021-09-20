/**
 * logger
 */
const log = new class {

    // Add to div
    private logs = document.getElementById('logs') as HTMLDivElement

    info(log: string) {
        this.logs.innerHTML += '<span style=\'background-color: gray\'>' + log + '</span><br/>'
        console.log(log)
    }

    success(log: string) {
        this.logs.innerHTML += '<span style=\'background-color: darkgreen\'>' + log + '</span><br/>'
        console.log(log)
    }

    error(log: string) {
        this.logs.innerHTML += '<span style=\'background-color: darkred\'>' + log + '</span><br/>'
        console.log(log)
    }

    clear() {
        this.logs.innerHTML = ''
    }

}

export {log}