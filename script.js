function moqmedeba(str) {
    return str.length;
}
console.log(moqmedeba("borjomis mesame skola"));
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("Baro Baro")); 
function pirveliaso(str) {
    return str.charAt(0);
}
console.log(pirveliaso("Nika"));

function boloaso(str) {
    return str.charAt(str.length - 1);
}
console.log(boloaso("Gelashvili"));

function shebruneba(str) {
    return str.split('').reverse().join('');
}
console.log(shebruneba("mesameskola")); 

function sheicavs(str, word) {
    return str.includes(word);
}
console.log(sheicavs("გამარჯობა, როგორხარ?", "როგორხარ?")); 
console.log(sheicavs("გამარჯობა, როგორხარ?", "სალამი")); 

function dayofa(str) {
    return str.split(' ');
}
console.log(dayofa("დაყავი ეს წინადადება"));

function gamoyenebitmasivi(arr) {
    return arr.join(' ');
}

console.log(gamoyenebitmasivi(["Nika", "Gelashvili", "Borjomi"]));

function startsWithHello(str) {
    return str.startsWith("Hello");
}

console.log(startsWithHello("Hello ბორჯომი!"));
console.log(startsWithHello("სალამი ბორჯომი!")); 

const box = document.querySelector(".box")
console.dir(box)

function mtavrdeba(str) {
    return str.endsWith("!");
}

console.log(mtavrdeba("გამარჯობა!"));
console.log(mtavrdeba("გამარჯობა"));

function chasworeba(str) {
    return str.replace(/ /g, "_");
}
console.log(chasworeba("სალამი მე ნიკა ვარ"));