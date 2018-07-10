const {join}=require('path');
const express=require('express');

const publicPath = join(__dirname, '../public')

var app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.render(`${publicPath}/index.html`)
// });

app.use(express.static(publicPath));
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
