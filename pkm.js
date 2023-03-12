let pkmBtn = document.querySelector('.pkmBtn');
let pkmName = document.querySelector('.pkmName');
let pkmHp = document.querySelector('.hp');
let pkmInput = document.querySelector('.inputText');

pkmBtn.addEventListener('click', pkmFunc);

async function pkmFunc(){
    let name = (pkmInput.value).toLocaleLowerCase();

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    let parasedRes = await response.json();
    pkmName.innerHTML = capLetter(parasedRes.name);
    pkmHp.innerHTML = "Hp " + parasedRes.stats[0].base_stat;
    console.log(parasedRes.stats[0].base_stat)
    console.log(parasedRes)
    //alert(`Api Connected  ` + JSON.stringify(parasedRes));

}

function capLetter(string){
    let passStr = string;
    passStr = passStr.charAt(0).toUpperCase() + passStr.slice(1);
    return passStr
}