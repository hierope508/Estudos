const helloworld = (timer, count) => {
    const timetoutId = setInterval(
        () => {
            console.log(`Hello World. ${timer}`);
            count++;
            if (count == 5) {
                helloworld(timer + 100, 1);
                clearInterval(timetoutId);
            }

        }, timer);
}

helloworld(100, 0);