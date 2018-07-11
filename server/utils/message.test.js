var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Pandu';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        // expect(message).toContain({createdAt: message.createdAt, from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Pandu';
        var longitude = 15;
        var latitude = 35;
        var url = 'https://www.google.co.id/maps?q=35,15';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        // expect(message).toContain({from, url});
    })
});