const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../src/server.js');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Simple Express App', () => {
    after(() => {
        // Close the server after testing
        server.close();
    });
    it('should respond with "Hello, World!" on GET request to root URL', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.equal('Hello, World!');
            done();
        });
    });
});