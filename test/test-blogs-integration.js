'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const expect = chai.expect;

const { BlogPost } = require('../models');
const { app, runServer, closeServer } = require('../server');
const { TEST_DATABASE_URL } = require('../config');

chai.use(chaiHttp);

function seedBlogData() {
	const seedData = [];
	for (let i = 1, i <= 10; i++) {
		seedData.push(generateBlogData());
	}
	return BlogPost.insertMany(seedData);
}