
export function Kolobok(name)  {
    let result = ''
    switch(name) {
        case 'Дедушка':
            return 'Я от дедушки ушел'
        case 'Бабушка':
            return 'Я от бабушки ушел'
        case 'Заяц':
            return 'Я от зайца ушел'
        case 'Волк':
            return 'Я от волка ушел'
        case 'Медведь':
            return 'Я от медведя ушел'
        case 'Лиса':
            return 'А Лиса его и скушала'
        default: 
            throw new Error('Unknown name')
    }
}

export function NewYear(name)  {
    let result = ''
    if (name === 'Дед Мороз' || name === 'Снегурочка') {
        result = `${name}! ${name}! ${name}!`
    } else {
        throw new Error('Unknown name')
    }
    return result
}