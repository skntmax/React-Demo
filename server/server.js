import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import { StaticRouter   } from 'react-router-dom';
const app = express();
 
app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'),  (err, data) => {
        const context = {};
         if(err){
            console.log(err);
            return res.status(500).send('Something went wrong!');
        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(
                    <Router location={req.url} context={context} >
                     <App/>
                  </Router>
                  )}</div>`)
        );
    });
});



// app.get( '*', ( req, res ) => {
//     const html = fs.readFileSync(path.resolve(__dirname, '../build/index.html')).toString();
//     const context = {};
//     const markup = ReactDOMServer.renderToString(
//       <StaticRouter location={req.url} context={context} >
//         <App/>
//       </StaticRouter>
//     );
  
//     if (context.url) {
//       res.writeHead(302, {
//         Location: context.url
//       })
//       res.end();
//     } else {
//         res.send(html.replace('$react', markup));
//     }
//   } );


app.use(express.static(path.resolve(__dirname, '..', 'build'))); 

app.listen(3001, () => {
    console.log('App launched on 3001');
});