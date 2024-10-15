import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) { 
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://htetkokoblog.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Check for allowed origin
    const origin = req.headers.origin;
    if (origin !== 'https://htetkokoblog.vercel.app') {
        return res.status(403).json({ error: 'Access denied: Unauthorized origin' });
    }

    // GitHub API details
    const token = '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'; // Use environment variable for security
    const repo = 'htetkokoblog/My-App';
    const path = 'api/postdata.json'; 
    const url = `https://api.github.com/repos/${repo}/contents/${path}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        const content = Buffer.from(response.data.content, 'base64').toString('utf-8'); // Decode base64 content
        const data = JSON.parse(content);

        res.status(200).json(data);
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ error: 'Error fetching data' });
    }
}
