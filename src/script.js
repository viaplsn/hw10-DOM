function generateBlocks() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML("afterbegin", '<div class="container">');
    const container = document.getElementsByClassName('container');
    for(let i = 0; i < 25; i++) {
        container[0].insertAdjacentHTML("afterbegin", '<div class="square">');
    }
    const square = document.querySelectorAll('.square');
    container[0].style.cssText = "display: flex; flex-wrap: wrap; height: 250px; width: 250px";
    square.forEach(element => {
        element.style.cssText = "display: inline-block; height: 50px; width: 50px";
        element.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    });
};

function generateBlocksInterval() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML("afterbegin", '<div class="container">');
    const container = document.getElementsByClassName('container');
    for(let i = 0; i < 25; i++) {
        container[0].insertAdjacentHTML("afterbegin", '<div class="square">');
    }
    const square = document.querySelectorAll('.square');
    container[0].style.cssText = "display: flex; flex-wrap: wrap; height: 250px; width: 250px";
    square.forEach(element => {
        element.style.cssText = "display: inline-block; height: 50px; width: 50px";
        element.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    });
    setInterval(function() {
        square.forEach(element => {
            element.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        });
    }, 1000);
};
generateBlocksInterval();