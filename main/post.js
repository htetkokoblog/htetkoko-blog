async function appendToJsonFile(newData) {
    try {
        // JSON ဖိုင်ကိုရယူပါ
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        const fileData = await response.json();
        const content = atob(fileData.content); // base64_decode
        const json = JSON.parse(content);

        // Data ပေါင်းထည့်ပါ
        if (Array.isArray(json)) {
            json.push(newData); // array ဖြစ်ရင် push လုပ်ပါ
        } else {
            // object ဖြစ်ရင် data ကို merge လုပ်ပါ
            Object.assign(json, newData);
        }

        // JSON ကို base64 encode ပြန်လုပ်ပါ
        const updatedContent = btoa(JSON.stringify(json));

        // Update GitHub ဖိုင်
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Append data to JSON file',
                content: updatedContent,
                sha: fileData.sha // မူရင်း sha ကို ထည့်ပါ
            })
        });
        console.log('Data appended successfully!');
    } catch (error) {
        console.error('Error appending data:', error);
    }
}
