//Request Get Data

async function getJsonFile() {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const fileData = await response.json();
        const content = atob(fileData.content); // base64_decode
        const getData = JSON.parse(content);
    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getJsonFile();
