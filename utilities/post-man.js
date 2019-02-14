
let url = 'http://localhost:9080/leasedealmgmt/app/v1/field-deal-approval/test';

function postData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()); // parses response to JSON
}

let testButton = document.createElement('button');
testButton.prepend('Run Test');
document.body.prepend(testButton);

testButton.addEventListener('click', async () => {
    let testData = await postData(url);
    console.log({
        testData
    })
})