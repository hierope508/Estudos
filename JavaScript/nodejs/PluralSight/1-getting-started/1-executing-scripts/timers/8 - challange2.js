let count = 0;

const interval = setInterval(() => {
    console.log("Hello World");
    count++;
    if (count >= 5) {
        clearInterval(interval);
        console.log("Done");
    }
}, 1000);