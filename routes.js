const fs = require('fs');
const qs = require('querystring')


module.exports.handRequests = (req, res) => {
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        let defaultPage = 
        `<Center>
                <h2>Welcome to Node JS Tutorial...!</h2>
                <br/><br/>
                <form action="/create-user" method="post">
                    <input type="text" name="username" placeholder="User Name">
                    <input type="submit" value="Submit">
                </form>
        </Center>`;
        res.write(defaultPage)
        res.statusCode = 200
        return res.end();
    }
    if(url === '/create-user'){
        let data = []
        req.on('data', (requestData) => {
             data.push(requestData);
        });
        
        
        req.on('end', () => {
            let dataString = Buffer.concat(data).toString();
            let dataArray = dataString.split('=');
            console.log(dataArray[1]);
        });

        res.setHeader('Content-Type', 'text/html')
        res.setHeader('Location', '/');
        res.statusCode = 302
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html')
        console.log('Handling Users');
        let usersListResponse = 
        `<Center>
          <ul>
            <li> User11 </li>
            <li> User22 </li>
            <li> User33 </li>
          </ul>
        </Center>`
        res.write(usersListResponse)
        res.statusCode = 200
        return res.end();
    }
}


module.exports.defaultString ='I\'m Default String'; 