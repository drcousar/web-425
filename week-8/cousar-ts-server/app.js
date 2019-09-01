/*
============================================
; Title: Assignment 8.2
; Author: Donald Cousar
; Date: 1 September 2019
; Description: Server-side Communication
;===========================================
*/
var express = require("express");
var app = express();
//Build composer array
var composers = [
    { id: 1, firstName: "Johann", lastName: "Bach" },
    { id: 2, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 3, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 4, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 5, firstName: "Frederic", lastName: "Chopin" }
];
// Begin Create Routes for home, all composers api, and single composer api
app.get('/', function (request, response) {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});
app.get('/api/composers', function (request, response) {
    response.json(getComposers());
});
app.get('/api/composer/:id', function (request, response) {
    response.json(getComposerById(parseInt(request.params.id)));
});
// End Create Routes
// Begin Create Functions for getting all composers and composer by id
function getComposerById(composerId) {
    return composers.find(function (c) { return c.id == composerId; });
}
function getComposers() {
    return composers;
}
// End Create Function
// Create Server
var server = app.listen(3000, "localhost", function () {
    console.log("Listening on port 3000");
});
