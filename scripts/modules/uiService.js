// Модуль для работы с UI

export class UIService {
    constructor(dataService) {
        this.dataService = dataService;
    }

    // Поиск и отображение заклинания
    async searchSpell(spellName) {
        const spellData = await this.dataService.getSpell(spellName);
        let place = document.getElementById('spell-result');
        while (place.firstChild){
            place.removeChild(place.lastChild)
        }

        for (let key in spellData){
            let newP = document.createElement('p');
            newP.style.fontSize = '18pt';
            newP.textContent = `${key}: ${JSON.stringify(spellData[key])}`
            place.appendChild(newP)
        }
    }

    // Поиск и отображение класса
    async searchClass(className) {
        const classData = await this.dataService.getClass(className);
        let place = document.getElementById('class-result');
        while (place.firstChild){
            place.removeChild(place.lastChild)
        }

        for (let key in classData){
            let newP = document.createElement('p');
            newP.style.fontSize = '18pt';
            if (key == 'proficiency_choices'){
                newP.textContent = `${key}: ${JSON.stringify(classData[key][0]['desc'])}`;
                newP.style.fontSize = '18pt';
                place.appendChild(newP);
                break;
            }
            newP.textContent = `${key}: ${JSON.stringify(classData[key])}`;
            place.appendChild(newP);
        }
    }

    // Поиск и отображение расы
    async searchRace(raceName) {
        const raceData = await this.dataService.getRace(raceName);
        let place = document.getElementById('race-result');
        while (place.firstChild){
            place.removeChild(place.lastChild)
        }

        for (let key in raceData){
            let newP = document.createElement('p');
            newP.style.fontSize = '18pt';
            newP.textContent = `${key}: ${JSON.stringify(raceData[key])}`
            place.appendChild(newP)
        }
    }

    // Поиск и отображение монстра
    async searchMonster(monsterName) {
        const monsterData = await this.dataService.getMonster(monsterName);
        let place = document.getElementById('monster-result');
        while (place.firstChild){
            place.removeChild(place.lastChild)
        }

        for (let key in monsterData){
            if (key == 'image'){
                let img = document.createElement('img');
                img.setAttribute('src', `https://www.dnd5eapi.co${monsterData[key]}`);
                place.appendChild(img);
                break;
            }
            let newP = document.createElement('p');
            newP.style.fontSize = '18pt';
            newP.textContent = `${key}: ${JSON.stringify(monsterData[key])}`
            place.appendChild(newP)
        }
    }

    // Бросок кубика и отображение результата
    rollDice(diceType) {
        const result = Math.floor(Math.random() * diceType) + 1;
        document.getElementById('dice-result').textContent = `Your result: ${result}`;
    }
}
