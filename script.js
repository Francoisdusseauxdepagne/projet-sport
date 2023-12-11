function calculKcal() {
    let genre = document.getElementById('Genre').value;
    let age = parseInt(document.getElementById('Age').value);
    let taille = parseInt(document.getElementById('height').value);
    let poids = parseInt(document.getElementById('weight').value);

    if (genre === 'Homme') {
        formul = 10 * poids + 6.25 * taille - 5 * age + 5
    } else {
        formul = 10 * poids + 6.25 * taille - 5 * age - 161
    }

    let level = document.getElementById('Level').value;
    let calorie;
    switch (level) {
        case 'Sedentaire':
            calorie = Math.round(formul * 1.1);
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories, selon votre objectif il faudra rajouter ou enlever jusqu'a 500kcal`;
            break;
        case 'Moderement':
            calorie = Math.round(formul * 1.3);
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories, selon votre objectif, il faudra rajouter ou enlever jusqu'a 500kcal`;
            break;
        case 'Actif':
            calorie = Math.round(formul * 1.6);
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories, selon votre objectif, il faudra rajouter ou enlever jusqu'a 500kcal`;
            break;
        case 'Tres actif':
            calorie = Math.round(formul * 1.8);
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories, selon votre objectif, il faudra rajouter ou enlever jusqu'a 500kcal`;
            break;
        default:
            console.log(`Sorry, we are out of ${level}.`);
    }
}

let message = document.querySelector('#messages')
let vegetal = document.querySelector("#legumes")
let prot = document.querySelector("#Proteines")
let lait = document.querySelector("#Laitage")
let gras = document.querySelector("#Lipides")
let pain = document.querySelector("#Glucides")

vegetal.addEventListener("click", () => {
    message.innerHTML = "Les légumes sont des joyaux nutritionnels, riches en vitamines, minéraux et fibres. Leur consommation régulière soutient une santé optimale en renforçant le système immunitaire, en favorisant la digestion, et en apportant une variété de nutriments essentiels. Intégrer une diversité de légumes dans votre alimentation contribue non seulement à la vitalité physique, mais aussi à une sensation de bien-être général";
})

prot.addEventListener("click", () => {
    message.innerHTML = "1g de proteine = 4 kcal, Les protéines sont des éléments fondamentaux pour le corps, jouant un rôle essentiel dans la croissance, la réparation des tissus et le bon fonctionnement musculaire. En tant que blocs de construction du corps, les protéines sont indispensables pour maintenir une bonne santé, favoriser la récupération après l'effort physique, et contribuer à une alimentation équilibrée. Prenez entre 1.8g -> 2g / kg de poids de corps minimum";
})

lait.addEventListener("click", () => {
    message.innerHTML = "Les produits laitiers sont des piliers nutritionnels, fournissant du calcium essentiel pour la santé osseuse, des protéines de qualité pour la croissance musculaire, et des vitamines bénéfiques. Intégrer ces aliments dans votre alimentation favorise la solidité osseuse, renforce le système immunitaire, et contribue à un bien-être général";
})

gras.addEventListener("click", () => {
    message.innerHTML = "1g de lipide = 9 kcal, Les lipides, ou graisses, sont des composants essentiels de l'alimentation. Ils jouent un rôle crucial dans l'absorption des vitamines, le soutien de la santé cérébrale, et la fourniture d'une source d'énergie durable. Choisis avec soin, les lipides sains provenant d'huiles, de noix et d'avocats sont des éléments clés d'une alimentation équilibrée, contribuant à la santé cardiovasculaire et au bien-être général. Prenez entre 0.8g -> 1g / kg de poids de corps minimum";
})

pain.addEventListener("click", () => {
    message.innerHTML = "1g de glucide = 4 kcal, Les glucides sont la principale source d'énergie pour le corps. Fournissant le carburant nécessaire pour les activités quotidiennes, les glucides sont essentiels pour le fonctionnement optimal du cerveau et des muscles. Opter pour des sources de glucides complexes comme les grains entiers et les légumes assure une libération d'énergie durable, soutenant ainsi une vitalité constante. Intégrer judicieusement les glucides dans votre alimentation contribue à maintenir un équilibre énergétique et une santé globale";
})