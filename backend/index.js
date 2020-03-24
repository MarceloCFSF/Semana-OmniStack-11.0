const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) =>{
    return response.json({
        evento: "M",
        T: "t"
    });
})

app.listen(3333);