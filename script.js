let nameHero = 'Lucas Speedy'

let xpHero = 4000

function experience(xp){
    if(xp < 1000){
        return "Ferro"
    } else if(xp > 1001 && xp < 2000){
        return "Bronze"
    } else if(xp > 2001 && xp < 5000){
        return "Prata"
    } else if(xp > 6001 && xp < 7000){
        return "Ouro"
    } else if(xp > 7001 && xp < 8000){
        return "Platina"
    } else if(xp > 8001 && xp < 9000){
        return "Ascendete"
    } else if(xp > 9001 && xp < 10000){
        return "Imortal"
    } else if(xp >= 10001){
        return "Radiante"
    }
}

console.log('O herói de nome '+ nameHero + ' está no nível ' + xpHero)