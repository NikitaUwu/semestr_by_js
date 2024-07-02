// Модуль для работы с данными

export class DataService {
    constructor() {
        this.apiBase = 'https://www.dnd5eapi.co/api/';
    }

    // Получение данных о заклинании
    async getSpell(spellName) {
        spellName = spellName.replace(' ', '-');
        if (spellName == ''){
            return 0
        }
        const response = await fetch(`${this.apiBase}spells/${spellName.toLowerCase()}`);
        const data = await response.json();
        return data;
    }

    // Получение данных о классе
    async getClass(className) {
        if (className == ''){
            return 0
        }
        className = className.replace(' ', '-');
        const response = await fetch(`${this.apiBase}classes/${className.toLowerCase()}`);
        const data = await response.json();
        return data;
    }

    // Получение данных о расе
    async getRace(raceName) {
        if (raceName == ''){
            return 0
        }
        raceName = raceName.replace(' ', '-');
        const response = await fetch(`${this.apiBase}races/${raceName.toLowerCase()}`);
        const data = await response.json();
        return data;
    }

    // Получение данных о монстре
    async getMonster(monsterName) {
        if (monsterName == ''){
            return 0
        }
        monsterName = monsterName.replace(' ', '-');
        const response = await fetch(`${this.apiBase}monsters/${monsterName.toLowerCase()}`);
        const data = await response.json();
        return data;
    }
}
