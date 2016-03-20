// set globals for jest tests

window.getVirtualPath = function() { return 'http://example.com' }
window.ga = function() { }

var $ = jest.genMockFn();
$.mockImplementation(function() {
    return $;
});

// generate mock functions and return $
[
    'animate',
    'Event',
    'off',
    'offset',
    'on',
    'trigger',

    // mock bootstrap plugin functions
    'dropdown',
    'tooltip',
    'popover'
].forEach(function(prop) {
    $[prop] = jest.genMockFn();
    $[prop].mockImplementation(function() {
        return $;
    });
});

window.$ = $;
