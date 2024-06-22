// e2e.test.js
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Todo App', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('http://localhost:3000'); // Antag att appen körs lokalt på port 3000
    });

    after(async function() {
        await driver.quit();
    });

    it('should add a new todo', async function() {
        const todoInput = await driver.findElement(By.id('new-todo'));
        await todoInput.sendKeys('Learn Selenium');
        const addButton = await driver.findElement(By.id('add-todo'));
        await addButton.click();

        const todoList = await driver.findElement(By.id('todo-list'));
        const todoItems = await todoList.findElements(By.tagName('li'));

        const todoTexts = await Promise.all(todoItems.map(item => item.getText()));
        expect(todoTexts).to.include('Learn Selenium');
    });
});
