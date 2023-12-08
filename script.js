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
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories`;
            break;
        case 'Moderement':
            calorie = Math.round(formul * 1.3);
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories`;
            break;
        case 'Actif':
            calorie = Math.round(formul * 1.6);
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories`;
            break;
        case 'Tres actif':
            calorie = Math.round(formul * 1.8);
            document.getElementById('result').innerHTML = `Votre besoin est de : ${calorie} calories`;
            break;
        default:
            console.log(`Sorry, we are out of ${level}.`);
    }
}

