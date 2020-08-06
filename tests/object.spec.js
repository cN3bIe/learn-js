// @ts-check

const {createObject, sortObject, createStrinFromObject, splitObject, removeElementFromObjectByKey, pushObject} = require('../src/object');

describe('Раздел объектов', () => {
    test('Функиця которая создает объект', () => {
        expect(createObject()).toBeInstanceOf(Object);
    });

    test('Функиця делает из объекта одну строку из ключей через пробел', () => {
        const vasya = {
            one: 'one', 
            two: 'two', 
            three: 'three', 
            foure: 'foure', 
            five: 'five', 
            six: 'six'
        };
        
        expect(createStrinFromObject(vasya)).toEqual('one two three foure five six');
    });

    test('Функиця разделяет строку по символу - ` ` (пробел) и делает из него обект, где ключ и значение та же строка', () => {
        const str = 'one two three foure five six';
        
        expect(splitObject(str)).toEqual({
            one: 'one', 
            two: 'two', 
            three: 'three', 
            foure: 'foure', 
            five: 'five', 
            six: 'six'
        });
    });

    test('Функция удаления элемента по его ключу', () => {
        const vasya = {
            one: 'one', 
            two: 'two', 
            three: 'three', 
            foure: 'foure', 
            five: 'five', 
            six: 'six'
        };
        const key = 'six';
        
        expect(removeElementFromObjectByKey(vasya, key)).toEqual({
            one: 'one', 
            two: 'two', 
            three: 'three', 
            foure: 'foure', 
            five: 'five'
        });
    });

    test('Функция добавления элемента в объект', () => {
        const vasya = {
            one: 'one', 
            two: 'two', 
            three: 'three', 
            foure: 'foure', 
            five: 'five', 
            six: 'six'
        };
        const el = 'her';
        
        expect(pushObject(vasya, el)).toEqual({
            one: 'one', 
            two: 'two', 
            three: 'three', 
            foure: 'foure', 
            five: 'five', 
            six: 'six',
            her: 'her'
        });
    });
})