import path from 'path';
import express from 'express';
import template from './../template';
import devBundle from './devBundle';

const app = express();
const CWD = process.cwd();
const port = process.env.PORT || 3000;

if(process.env.NODE_ENV === 'development'){
    devBundle.compile(app);
}


app.use(
    '/dist', 
    express.static(path.join(CWD, 'dist'))
);

app.get(
    '/', 
    (req, res) => res.status(200).send(template())
);


app.listen(port, function onStart(err){
    if(err){
        console.log(err);
    }
    console.info(`Server start on port ${port}`);
});

