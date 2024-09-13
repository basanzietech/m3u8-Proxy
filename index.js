const express = require('express');
const request = require('request');
const app = express();

// Proxy endpoint to forward requests with custom headers
app.get('/proxy', (req, res) => {
    const videoUrl = req.query.url;
    const options = {
        url: videoUrl,
        headers: {
            'Referer': 'https://your-referer-site.com'
        }
    };

    request(options).pipe(res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
