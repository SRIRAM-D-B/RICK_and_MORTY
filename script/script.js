let getDetails = (num) => {
    document.querySelector(".total").value = "";
    for (let i = 1; i <= num; i++) {
        const url = `https://rickandmortyapi.com/api/character/${i}`;
        fetch(url).then((initialInfo) => {
            initialInfo.json().then((object) => {
                console.log(object);
            });
        });
    }
};
