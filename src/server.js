const express = require('express');

const app = express();

app.get('/', (req, res) => console.log('Hello World welcome to my app!'))

 const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
