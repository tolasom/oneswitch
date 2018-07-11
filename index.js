var app = require('./app');
var file = require('./fileSystem');
const bodyParser = require('body-parser');
const host = '127.0.0.1';
const port = '8080';

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/upload',(req,res)=>{
    file.uploadFile()
    .then((data)=>{
        console.log('SUCCESSFULLY UPLOADED');
        res.send({
            code: 'success',
            data : data
        });
    }).catch((err)=>{
        console.log('ERROR WHILE UPLOADING FILE LIST: '+err);
        res.send({
            code: 'fail',
            data : err
        });

    })

});

app.get('/getList',(req,res)=>{
    file.getFileNameList()
    .then((data)=>{
        console.log('SUCCESS LIST FILES PATH');
        res.send({
            code: 'success',
            data : data
        }); 
    }).catch((err)=>{
        console.log('ERROR WHILE GET FILE LIST: '+err);
        res.send({
            code: 'fail',
            data: err
        }); 
    })
});

app.post('/downloadFile',(req,res)=>{
    var fileName = req.body.fileName;
    var path = file.downloadFile(fileName);
    console.log('FILE SUCCESSFULLY DOWNLOADED');
    res.send({
        code: 'success',
        path: path
    })
})

app.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
});