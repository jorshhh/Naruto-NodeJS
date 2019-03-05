//During the test the env variable is set to test
let mongoose = require("mongoose");
let Book = require('../models/characterModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Characters', () => {
/*
  * Test the /GET route
  */
  describe('/GET characters', () => {
      it('it should GET all the characters first page', (done) => {
        chai.request('http://68.183.16.202:3000')
            .get('/characters')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('docs');
                res.body.docs.should.be.a('array');
                res.body.docs.length.should.be.eql(20);
              done();
            });
      });
  });
  
  /*
  * Test the /GET character route
  */
  describe('/GET single character', () => {
      it('it should GET a character', (done) => {
        chai.request('http://68.183.16.202:3000')
            .get('/characters/5c7d4cc7d4f7697af7ae267c')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('content');
                res.body.should.have.property('title');
                res.body.should.have.property('image');
              done();
            });
      });
  });
  
  /*
  * Test the /GET character route with 404
  */
  describe('/GET single character with invalid id', () => {
      it('it should GET a character', (done) => {
        chai.request('http://68.183.16.202:3000')
            .get('/randomstring')
            .end((err, res) => {
                res.should.have.status(404);
              done();
            });
      });
  });

});