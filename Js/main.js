const seconds = document.querySelector(".segundos .number");
    minutes = document.querySelector(".minutos .number");
    horas = document.querySelector(".horas .number");
    days = document.querySelector(".days .number");

    var secValue = 30,
        minValue = 36,
        hourValue = 12,
        dayValue = 14;

        const timeFunction = setInterval(() => {
            secValue--;

            if(secValue == 0) {
                minValue--;
                secValue = 60;
            }

            if (minValue == 0){
                hourValue--;
                minValue = 60;
            }

            if (hourValue == 0){
                dayValue--; 
                hourValue = 60;
            }

            if (dayValue === 0){
                clearInterval(timeFunction);
            }
            

            console.log(secValue)
            seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
            minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
            horas.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
            days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;

        },1000)