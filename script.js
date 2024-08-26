window.addEventListener('load', function() {

    const pullDownButton = document.getElementById("lists");

    pullDownButton.addEventListener('mouseover', () => {
        console.log('乗った');
    });
    　
    pullDownButton.addEventListener('mouseout', () => {
        console.log('離れた');
    });
    
    pullDownButton.addEventListener('click', () => {
        console.log('クリック');
    });
});