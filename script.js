let buyCar = confirm('Вы хотите купить машину?');

if (buyCar) {
    let carList = '1) Джентра 2)Жигули 3) Кобальт 4)Нексия 1 5)Нексия 2 5)Нексия 3 ';
    let carChoice = prompt('Выберите машину, введя её номер или название:' + carList);


    if (carChoice === '1' || carChoice === 'джентра') {
        selectedCar = 'Джентра';
    } else if (carChoice === '2' || carChoice === 'жигули') {
        selectedCar = 'Жигули';
    } else if (carChoice === '3' || carChoice === 'кобальт') {
        selectedCar = 'Кобальт';
    } else if (carChoice === '4' || carChoice === 'нексия 1') {
        selectedCar = 'Нексия 2';
    }else if (carChoice === '5' || carChoice === 'нексия 2') {
        selectedCar = 'Нексия 2';
    } else if (carChoice === '6' || carChoice === 'нексия 3') {
        selectedCar = 'Нексия 3';
    } else {
        alert('Неверный выбор. Попробуйте снова.');
    }

    if (selectedCar) {
        let confirmPurchase = confirm("Вы точно хотите купить ${selectedCar}?");
        if (confirmPurchase) {
            alert("Поздравляем! Вы купили ${selectedCar}.");
        } else {
            alert('Мы будем рады увидеть вас снова!');
        }
    }
} else {
    alert('Мы будем рады увидеть вас снова!');
}