// Главный модуль приложения

import { DataService } from './modules/dataService.js';
import { UIService } from './modules/uiService.js';

document.addEventListener('DOMContentLoaded', () => {
    const dataService = new DataService();
    const uiService = new UIService(dataService);

    document.getElementById('next-button').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        if (username) {
            document.getElementById('greeting').textContent = `Hello, ${username}!`;
            document.getElementById('welcome-page').classList.add('hidden');
            document.getElementById('main-page').classList.remove('hidden');
        }
    });

    document.getElementById('spell-button').addEventListener('click', () => {
        const spellName = document.getElementById('spell-name').value;
        uiService.searchSpell(spellName);
    });

    document.getElementById('class-button').addEventListener('click', () => {
        const className = document.getElementById('class-name').value;
        uiService.searchClass(className);
    });

    document.getElementById('race-button').addEventListener('click', () => {
        const raceName = document.getElementById('race-name').value;
        uiService.searchRace(raceName);
    });

    document.getElementById('monster-button').addEventListener('click', () => {
        const monsterName = document.getElementById('monster-name').value;
        uiService.searchMonster(monsterName);
    });

    document.getElementById('roll-button').addEventListener('click', () => {
        const diceType = document.getElementById('dice-select').value;
        uiService.rollDice(diceType);
    });

    // Добавление изменения цвета для кнопок, футера и сайдбара при нажатии
    document.querySelectorAll('button, nav, footer, header').forEach(element => {
        element.addEventListener('mousedown', () => {
            element.style.backgroundColor = getRandomColor();
        });
        element.addEventListener('mouseup', () => {
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 200);
        });
    });

    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
});
