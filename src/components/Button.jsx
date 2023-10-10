export function Button(){
    return (
        <button onClick={clcikety}>
            Click me to change to Night Mode
        </button>
    )
}

var mode = document.body.style

function clcikety(){
    if(mode.backgroundColor==="white"){

        mode.backgroundColor = "#4D3C77"
        var elem = document.createElement("h1")
        elem.textContent = "Welcome to the Naruto Family"
        elem.style.color = "white"
        document.body.appendChild(elem)
    }
else{
    mode.backgroundColor = "white"
}
    }
