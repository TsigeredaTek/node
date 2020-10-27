const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

//const redditPath = path.join(__dirname, "./popularArticles.json");

rp('https://www.reddit.com/r/popular.json')
    .then(res => JSON.parse(res))
    .then(info => {

        info.data.children.forEach(article => {
            //console.log(article.data.url);

            if (path.extname(article.data.url)) {

                let dataName = `${article.data.id}${path.extname(article.data.url)}`;
                //console.log(fileName);


                rp(article.data.url, { encoding: 'binary' })
                    .then(media => {

                        fs.writeFile(path.join(__dirname, `./downloads/${dataName}`), media, { encoding: 'binary' }, (err) => {
                            if (err) console.log(err);
                        });


                    })

            }

        })

    })
    .catch(e => console.log(e));