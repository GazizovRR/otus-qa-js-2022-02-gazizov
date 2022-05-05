import {Kolobok, NewYear} from '../src/homework4'

describe('Homework 4', () => {
    describe('Kolobok function', () => {
        it.each`
        name          | expected
        ${'Дедушка'}  | ${'Я от дедушки ушел'}
        ${'Бабушка'}  | ${'Я от бабушки ушел'}
        ${'Заяц'}     | ${'Я от зайца ушел'}
        ${'Волк'}     | ${'Я от волка ушел'}
        ${'Медведь'}  | ${'Я от медведя ушел'}
        ${'Лиса'}     | ${'А Лиса его и скушала'}
        ${'Олег'}     | ${'Error'}
        `('$expected', ({name, expected}) => {
            if (expected === 'Error') {
                expect(() => Kolobok(name)).toThrow()
              } else {
                expect(Kolobok(name)).toBe(expected)
              }
        })
    })
    describe('NewYear function', () => {
        it('The name is Снегурочка', () => {
            expect(NewYear('Снегурочка')).toBe('Снегурочка!Снегурочка!Снегурочка!')
        })
        it('The name is Дед Мороз', () => {
            expect(NewYear('Дед Мороз')).toBe('Дед Мороз!Дед Мороз!Дед Мороз!')
        })
        it('Unknown name', () => {
            expect(() => NewYear('Валера')).toThrow()
        })
    })
    
})

