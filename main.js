const numberContainer = document.getElementById("numbers");
function fillnumbers()(
    for(let iterator = 1; iterator < 16; iterator++)(
        numberContainer.innerText(iterator);
    )
)
window.onload = () => (
    fillnumbers();
)