'use strict';
const chai = require('chai');
const controller = require("../controller.js");
const should = chai.should();
var server = require('../app.js');

chai.use(require('chai-http'));

//chai.use(require('chai-json'));

const expect = require("chai").expect;


describe("News",()=>{

    describe("fetchSingleNewsentry",()=>{
        it("It should fetch a single entry from tblnews",(done)=>{
            controller.fetchSingleActiveNews('Y')
            .then(results=>{
                expect(results).exist;
                done();
            })
        });
        
        it("It should fetch not fetch a single entry from tblnews", (done) => {
          controller.fetchSingleActiveNews('N').then(results => {
                expect(results).be.null;
                done();
            })

        });

    });


    describe("getActiveNews",()=>{
        it("It should fetch all the news",(done)=>{
            controller.getActiveNews()
            .then(news=>{
                expect(news).exist;
                expect(news).not.to.be.null;
                done();
            })
        })

    });


    describe("/news route using GET request",()=>{
        it("/GET should not fetch all news when news view is not present",(done)=>{

            chai.request(server)
            .get('/news')
            .end((err,res)=>{
               expect(res).to.be.html;
               res.status.should.not.equal(200);
               done();
            });

        });

        it("/GET should fetch all news when news view is present and render it", (done) => {

            chai.request(server)
                .get('/news')
                .end((err, res) => {
                    expect(res).to.be.html;
                    res.status.should.equal(200);
                    done();
                });

        })
    })


    
})


