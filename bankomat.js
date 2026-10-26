let balance = 1000
let UserPrompt

while (true) {
    UserPrompt = prompt("Выберите действие:\n1 — Проверить баланс\n2 — Пополнить счет\n3 — Снять наличные\n0 — Выйти")
    if (UserPrompt == 0 || UserPrompt == 1 || UserPrompt == 2 || UserPrompt == 3) {
        if (UserPrompt == 0) {
            alert('Спасибо за визит!')
            break
        }
        if (UserPrompt == 1) {
            alert(`Ваш баланс: ${balance}`)
            continue
        }
        if (UserPrompt == 2) {
            let UserCount = prompt('Выберите сумму для пополнения')
            UserCount = Number(UserCount)
            balance = balance + UserCount
            alert(`Ваш баланс: ${balance}`)
            continue
        }
        if (UserPrompt == 3) {
            let UserCount = prompt('Выберите сумму для снятия')
            UserCount = Number(UserCount)
            if (UserCount > balance) {
                alert('Ошибка! Недостаточно средств')
            }
            else {
                balance = balance - UserCount
            }
            alert(`Ваш баланс: ${balance}`)
        }
    }
    else{
        alert('Некорректная команда')
    }

}