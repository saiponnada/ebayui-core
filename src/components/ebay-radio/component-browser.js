module.exports = {
    handleClick: forwardEvent('change'),
    handleFocus: forwardEvent('focus'),
    handleKeyDown: forwardEvent('keydown')
};

function forwardEvent(eventName) {
    return function(originalEvent, el) {
        if (!el.disabled) {
            this.emit(`radio-${eventName}`, {
                originalEvent,
                value: (el || this.el.querySelector('input')).value
            });
        }
    };
}
