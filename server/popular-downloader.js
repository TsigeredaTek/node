const fs = require("fs"),
path = require("path"),
rp = require("request-promise"),
options = {
    encoding: "binary"
}

rp("https://www.reddit.com/r/popular.json")
.then(res => {
    let data = JSON.parse(res);
    data.data.children.forEach(article => {
        let fileExtention = path.estname(article.data.url);
        if (fileExtension == ".jpg" || fileExtension == ".gif" || fileExtension == ".png") {
            rp(article.data.url, options)
            .then(image => {
             fs.writeFile(`./downloads/${article.data.id}${path.extname(article.data.url)}`, image, options, (err) =>{
                 console.log(`There was an error: ${err}`);
             })
            })
            .catch(err => console.log(err))
         }
    });
})
.catch(err => console.log(err));