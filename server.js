const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
    const videoUrl = 'https://jicho.site/Channel/on_now?tv=ws';

    const options = {
        url: videoUrl,
        headers: {
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?0',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'sec-ch-ua-platform': '"Linux"',
            'Accept': '*/*',
            'Origin': '',
            'Sec-Fetch-Site': 'cross-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': '',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9'
        }
    };

    request(options).pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});
