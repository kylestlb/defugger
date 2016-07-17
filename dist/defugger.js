var defugger = (function () {
    function defugger() {
        this.el = document.createElement('div');
        this.el.id = 'defugger';
        for (var style in defugger.styles) {
            this.el.style[style] = defugger.styles[style];
        }
        document.body.insertBefore(this.el, document.body.firstChild);
    }
    defugger.prototype.log = function (message, severity) {
        var fontColor = defugger.colors.green;
        var date = new Date(Date.now());
        var timeStamp = '[' +
            date.getMonth() + '-' +
            date.getDate() + '-' +
            date.getFullYear() + '_' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds() + ':' +
            date.getMilliseconds() +
            ']';
        if (severity) {
            switch (severity) {
                case defugger.level.INFO:
                    fontColor = defugger.colors.green;
                    break;
                case defugger.level.WARN:
                    fontColor = defugger.colors.yellow;
                    break;
                case defugger.level.DANGER:
                    fontColor = defugger.colors.red;
                    break;
                default:
                    fontColor = defugger.colors.green;
                    break;
            }
        }
        this.el.innerHTML += '<br><span style="color: ' + fontColor + ';">' + timeStamp + ':' + message + '</span>';
    };
    defugger.level = {
        INFO: 'INFO',
        WARN: 'WARN',
        DANGER: 'DANGER'
    };
    defugger.colors = {
        green: 'rgb(10,255,143)',
        yellow: 'rgb(255,221,0)',
        red: 'red',
    };
    defugger.styles = {
        'color': defugger.colors.green,
        'width': '100%',
        'height': '100px',
        'overflow-y': 'scroll',
        'font-family': 'monospace',
        'background-color': 'rgb(0,0,0)'
    };
    return defugger;
})();
