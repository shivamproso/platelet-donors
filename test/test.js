/*
 * This is the test file for tblapilog POST api and can be run using the command
 * npm test in the terminal.
 * This uses Mocha along with Chai for the unit testing of the api.
*/

'use strict';
const chai = require('chai');
const should = chai.should();
chai.use(require('chai-http'));


var server = require('../app.js');

describe('createApiLog',function(){

	it('/POST should create a log',function(done){

	 chai.request(server)
		.post('/api')
		.send({
			 caller: "John",
             bloodgroup: "A+",
             stdcode: "022",
             pincode:"400706",
             apicode:"w1hbr3br4",
             donorfound:0,
             donormobile:'9039822907',
             ipaddress:'127.0.0.1',
             remarks:"great"
		})
		.end(function(err,res){
			should.not.exist(err);
			res.status.should.equal(201);
			res.body.status.should.eql('success')
			
		})
		done(); 
        
	});
   
   it('/POST would not create a log due to apicode being null',function(done){

	 chai.request(server)
		.post('/api')
		.send({
			
			 caller: "Jane",
             bloodgroup: "O+",
             stdcode: "022",
             pincode:"400708",
             apicode:null,
             donorfound:1,
             donormobile:'9982385301',
             ipaddress:'128.0.0.1',
             remarks:"good"
		
		})
		.end(function(err,res){
			res.status.should.equal(400);
			res.body.status.should.eql('Error:Bad Request')
			 		});
		done(); 

       
	});


   it('/POST would not create a log due to wrong IP address format',function(done){

	 chai.request(server)
		.post('/api')
		.send({
			
			 caller: "Jane",
             bloodgroup: "O+",
             stdcode: "022",
             pincode:"400708",
             apicode:'ertn34wav',
             donorfound:1,
             donormobile:'9982385301',
             ipaddress:'128.0.0.1.20',
             remarks:"good"
		
		})
		.end(function(err,res){
			res.status.should.equal(400);
			res.body.status.should.eql('Error:Bad Request');

			 		})
		done(); 

       
	});



});