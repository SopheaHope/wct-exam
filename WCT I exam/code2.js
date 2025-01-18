function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data fetched! Student Name: Rith Sophea'), 1000);
    });
}

async function fetchAndProcessData() {
    try {
        console.log('Student Name: Rith Sophea');
        console.log('Using async/await:');
        
        const data = await fetchData(); // Wait for data to be fetched
        console.log(data);

        const processed = 'Processing data...';
        console.log(processed);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchAndProcessData();
