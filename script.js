document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

        
        if(input !== '') {
            showWarning('Carregando...');

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=9cffd38ea43bbf2bc472c8cfcba06120&units=metric&lang=pt_br`
           
            let results  = await fetch(url);
            let json = await results.json();

            if(json.cod === 200) {

            }else {
                showWarning('Cidade não encontrada!');
            }
        }
});

// Mostrando informações retornadas da API
function showInfo() {
    
}

// avisos
function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}