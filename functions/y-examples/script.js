document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementsByClassName('button')[0];
    const button1 = document.getElementsByClassName('button')[1];
    button.addEventListener('click', () => {
      console.log('You have clicked on the button');
    });

    // setTimeout(() => {
    button1.addEventListener('click', () => {
        setTimeout(() => {
            console.log('You have clicked on the button1');
        },2000)
    })
    // },2000)
});
