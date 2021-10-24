const helloworld = (timer) => {
    setTimeout(
        () => {
            console.log(`Hello World. ${timer}`);
            helloworld(timer + 1);
        }, timer * 1000);
}

helloworld(1);