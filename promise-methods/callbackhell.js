// Callback hell

let data = (callback) => {
    setTimeout(()=> {
        callback();
    },1000);
}

let result = () => {
    setTimeout(() => {
        console.log('1');
        setTimeout(() => {
            console.log('2');
            setTimeout(() => {
                console.log('3');
                setTimeout(() => {
                    console.log('4');
                    setTimeout(() => {
                        console.log('5');
                        setTimeout(() => {
                            console.log('6');
                            setTimeout(() => {
                                console.log('7');
                                setTimeout(() => {
                                    console.log('8');
                                    setTimeout(() => {
                                        console.log('9');
                                        setTimeout(() => {
                                            console.log('10');
                                            setTimeout(() => {
                                                console.log('Callbackhell');
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    },1000)
}

data(result);