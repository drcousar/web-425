/*
============================================
; Title: Assignment 8.2
; Author: Donald Cousar
; Date: 1 September 2019
; Description: Server-side Communication
;===========================================
*/

import * as express from "express";

const app = express();

interface Composer {
    id: number,
    firstName: string,
    lastName: string
}

//Build composer array
const composers: Composer[] = [
    { id: 1, firstName: "Johann", lastName: "Bach" },
    { id: 2, firstName: "Wolfgang", lastName: "Mozart" },
    { id: 3, firstName: "Ludwig", lastName: "Beethoven" },
    { id: 4, firstName: "Giuseppe", lastName: "Verdi" },
    { id: 5, firstName: "Frederic", lastName: "Chopin" }
];



// Begin Create Routes for home, all composers api, and single composer api
app.get('/', (request, response) => {
    response.send('The URL for composers is http://localhost:3000/api/composers');
});

app.get('/api/composers', (request, response) => {
    response.json(getComposers());
});

app.get('/api/composer/:id', (request, response) => {
    response.json(getComposerById(parseInt(request.params.id)));
});

// End Create Routes

// Begin Create Functions for getting all composers and composer by id
function getComposerById(composerId: number): Composer {
    return composers.find(c => c.id == composerId);
}

function getComposers(): Composer[] {
    return composers;
}

// End Create Function

// Create Server
const server = app.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
});