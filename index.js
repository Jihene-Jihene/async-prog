const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await delay(1000); // Wait for 1 second
    }
}

// Example usage:
iterateWithAsyncAwait(['A', 'B', 'C']);


const fetchData = async () => {
    // Simulate an API call
    return new Promise(resolve => setTimeout(() => resolve('Fetched Data'), 1000));
};

async function awaitCall() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


awaitCall();


const fetchDataWithError = async () => {
    // Simulate an API call that might fail
    return new Promise((resolve, reject) => setTimeout(() => reject(new Error('API Error')), 1000));
};

async function awaitCall() {
    try {
        const data = await fetchDataWithError();
        console.log(data);
    } catch (error) {
        console.error('An error occurred while fetching data:', error.message);
    }
}

// Example usage:
awaitCall();


const delay2 = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncFunction1 = async () => {
    await delay2(1000);
    console.log('Function 1 completed');
};

const asyncFunction2 = async () => {
    await delay2(1000);
    console.log('Function 2 completed');
};

const asyncFunction3 = async () => {
    await delay2(1000);
    console.log('Function 3 completed');
};

async function chainedAsyncFunctions() {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}


chainedAsyncFunctions();


const fetchData1 = async () => {
    return new Promise(resolve => setTimeout(() => resolve('Data from API 1'), 1000));
};

const fetchData2 = async () => {
    return new Promise(resolve => setTimeout(() => resolve('Data from API 2'), 1500));
};

async function concurrentRequests() {
    try {
        const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
        console.log('Combined results:', data1, data2);
    } catch (error) {
        console.error('Error with concurrent requests:', error.message);
    }
}


concurrentRequests();


const fetchFromUrl = async (url) => {
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), 1000));
};

async function parallelCalls(urls) {
    try {
        const fetchPromises = urls.map(url => fetchFromUrl(url));
        const results = await Promise.all(fetchPromises);
        console.log('Responses:', results);
    } catch (error) {
        console.error('Error with parallel calls:', error.message);
    }
}


parallelCalls(['url1.com', 'url2.com', 'url3.com']);


