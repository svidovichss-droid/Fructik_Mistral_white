// Анимации для приложения
window.appAnimations = {
    // Анимация входа сообщения
    animateMessageIn: function(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    },
    
    // Анимация праздничных фруктов
    celebrate: function() {
        // Только фруктовый дождь
        this.fruitShower(50);
    },
    
    // Анимация фруктового дождя
    fruitShower: function(count = 30) {
        const fruitRain = document.getElementById('fruitRain');
        if (!fruitRain) return;
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const fruit = document.createElement('div');
                fruit.className = 'fruit';
                fruit.textContent = window.getRandomFruitIcon();
                fruit.style.position = 'fixed';
                fruit.style.top = '-100px';
                fruit.style.left = Math.random() * window.innerWidth + 'px';
                fruit.style.fontSize = (Math.random() * 24 + 24) + 'px';
                fruit.style.zIndex = '1';
                fruit.style.pointerEvents = 'none';
                fruit.style.animation = 'fruit-drop ' + (Math.random() * 1.5 + 1) + 's linear forwards';
                
                fruitRain.appendChild(fruit);
                
                // Удаляем элемент после анимации
                setTimeout(() => {
                    if (fruit.parentNode === fruitRain) {
                        fruit.remove();
                    }
                }, (Math.random() * 1500 + 1000));
            }, i * 50);
        }
    },
    
    // Запуск непрерывного фруктового дождя
    startContinuousFruitRain: function() {
        // Убрано создание плавающих фруктов
        
        // Запускаем непрерывный дождь с увеличенной частотой
        const intervalId = setInterval(() => {
            const fruitRain = document.getElementById('fruitRain');
            if (!fruitRain) {
                clearInterval(intervalId);
                return;
            }
            
            const fruit = document.createElement('div');
            fruit.className = 'fruit';
            fruit.textContent = window.getRandomFruitIcon();
            fruit.style.position = 'fixed';
            fruit.style.top = '-100px';
            fruit.style.left = Math.random() * 100 + 'vw';
            fruit.style.fontSize = (Math.random() * 24 + 24) + 'px';
            fruit.style.zIndex = '1';
            fruit.style.pointerEvents = 'none';
            fruit.style.animation = 'fruit-drop ' + (Math.random() * 1.5 + 1) + 's linear forwards';
            
            fruitRain.appendChild(fruit);
            
            // Удаляем элемент после анимации
            setTimeout(() => {
                if (fruit.parentNode === fruitRain) {
                    fruit.remove();
                }
            }, (Math.random() * 1500 + 1000));
        }, 400); // Увеличили частоту до 2,5 фруктов в секунду
        
        return intervalId;
    },
    
    // Праздничный фруктовый эффект
    celebrateWithFruits: function() {
        // Только фруктовый дождь
        this.fruitShower(30);
    }
};