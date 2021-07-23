let btn = document.getElementById('btn');
let output = document.getElementById('output');
let tricks = 
  [
    "Backside 180",
    "Backside 360",
    "Backside Caballerial",
    "Backside Half Cab",
    "Fakie Ollie",
    "Frontside 180",
    "Frontside 360",
    "Frontside Caballerial",
    "Frontside Half Cab",
    "Kickturn",
    "Nollie",
    "Nollie Backside 180",
    "Nollie Backside 360",
    "Nollie Frontside 180",
    "Nollie Frontside 360",
    "Ollie",
    "Ollie North",
    "Ollie South",
    "Powerslide",
    "Switch Backside 180",
    "Switch Backside 360",
    "Switch Frontside 180",
    "Switch Frontside 360",
    "Switch Ollie",
    "Tic-Tac",
    "360 Flip",
    "360 Hardflip",
    "Kickflip",
    "No Comply",
    "Shuvit",
    "50-50 Grind",
    "Backside 50-50",
    "Backside 5-0",
    "Frontside 5-0",
    "Frontside 50-50",
];

btn.addEventListener('click', function(){
  var randomTrick = tricks[Math.floor(Math.random() * tricks.length)]
  output.innerHTML = randomTrick;
})

