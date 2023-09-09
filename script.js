document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
        clearInfo();
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=a82a8db48f7a6fc6e202ef14e919ec41&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                icon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        }
        else {
            clearInfo();
            showWarning('Não encontramos esta localização.');
        }
    }

});

function showInfo(json) {
    showWarning('');

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.icon}@2x.png`);

    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle - 90}deg)`;

    document.querySelector('.resultado').style.display = 'block';

    let body = document.querySelector('body');

    switch(json.icon) {
        case '01d':
            body.style.background = 'url(images/01d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '02d':
            body.style.background = 'url(images/02d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '03d':
            body.style.background = 'url(images/03d.jpg)';
            body.style.backgroundSize = 'cover'
            break;
        case '04d':
            body.style.background = 'url(images/04d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '09d':
            body.style.background = 'url(images/09d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '10d':
            body.style.background = 'url(images/10d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '11d':
            body.style.background = 'url(images/11d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '13d':
            body.style.background = 'url(images/13d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '50d':
            body.style.background = 'url(images/50d.jpg)';
            body.style.backgroundSize = 'cover';
            break;

        // Night

        case '01n':
            body.style.background = 'url(images/01n.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '02n':
            body.style.background = 'url(images/02n.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '03n':
            body.style.background = 'url(images/03n.jpg)';
            body.style.backgroundSize = 'cover'
            break;
        case '04n':
            body.style.background = 'url(images/04n.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '09n':
            body.style.background = 'url(images/09d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '10n':
            body.style.background = 'url(images/10d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '11n':
            body.style.background = 'url(images/11d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '13n':
            body.style.background = 'url(images/13d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        case '50n':
            body.style.background = 'url(images/50d.jpg)';
            body.style.backgroundSize = 'cover';
            break;
        default:
            body.style.backgroundImage = 'none';
            break;
    }  
}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
}