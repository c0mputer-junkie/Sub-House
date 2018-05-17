const express = require('express');

const app = express();

app.get('/', (req, res) => console.log('Hello World!'))

 const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log('Example app listening on port 3001!'))
