const map = new Map();
map.set('In','India');
map.set('fr','France');
//console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-' ,value );
}