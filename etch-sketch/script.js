
const container = document.querySelector(".container");

const etchSquare = document.createElement("div");
etchSquare.classList.add("etchSquare");

populateEtch(16,16);

const resetButton = document.querySelector("button");
resetButton.addEventListener("click", resetEtch);

function darken(e){
    const sq = e.target;
    sq.classList.add("darkened");
}

function populateEtch(height, width){
    for(var i=0; i<height; i++){

        const row = document.createElement("div");
        row.classList.add("row");

        for(var j=0; j<width; j++){
            const eClone = etchSquare.cloneNode();
            row.appendChild(eClone);
            //eClone.textContent = j+1;
            eClone.addEventListener("mouseover", darken);

        }
        container.appendChild(row);
    }
}

function resetEtch(){
    let width = Number(prompt("Width: "));
    let height = Number(prompt("height"));
    (width>100)?width=100:null;
    (height>100)?height=100:null;
    const childList = container.children
    for(let i=0; i<childList.length; i++){
        childList[i].remove()
        i--;
    }
    populateEtch(height, width)

}