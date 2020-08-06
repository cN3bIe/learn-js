// @ts-check

const {createArray, sortArray, removeEveryEvenIndexFromArray, splitArray, sliceArray, pushArray} = require('../src/array');

describe('Раздел массивов', () => {
    test('Функиця которая создает массив', () => {
        expect(createArray()).toBeInstanceOf(Array);
    });

    test('Функиця сортирует массив', () => {
        const gena = [5, 1, 2, 4, 3];
        
        expect(sortArray(gena)).toEqual([1,2,3,4,5]);
    });

    test('Функиця удаляет каждый четный идекс из массива', () => {
        const gena = ['one', 'two', 'three', 'foure', 'five', 'six'];
        
        expect(removeEveryEvenIndexFromArray(gena)).toEqual(['two', 'foure', 'six']);
    });

    test('Функиця разделяет строку по символу - | (вертикальная черта) и удаляет пробелы по краям элемента', () => {
        const str = 'one two three | foure five six';
        
        expect(splitArray(str)).toEqual(['one two three', 'foure five six']);
    });

    test('Функция удаления элемента по его индексу', () => {
        const gena = ['one', 'two', 'three', 'foure', 'five', 'six'];
        const index = 3;
        
        expect(sliceArray(gena, index)).toEqual(['one', 'two', 'three', 'five', 'six']);
    });

    test('Функция добавления элемента в массив', () => {
        const gena = ['one', 'two', 'three', 'foure', 'five', 'six'];
        const el = 'her';
        
        expect(pushArray(gena, el)).toEqual(['one', 'two', 'three', 'foure', 'five', 'six','her']);
    });
})