async function showAllShit(){
    let wrapper = document.body.querySelector('.wrapper');
    let link = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=1d352368bfb242d5052b142139d39902';
    const response = await fetch(link, {
        method: 'GET',
    })
    const responseResult = await response.json().then( responseResult => {
        let data = new Date().toLocaleString();
        let hours = data.replace(/,/gi, '').split(' ')[1];
        let day = data.replace(/,/gi, '').split(' ')[0];
        let dzien = day.split('.')[0];
        let miesiac = day.split('.')[1];
        let rok = day.split('.')[2];
        console.log(day);
        let text = `
        <div class="container">
            <div class="skyBehavior">
                <div class="skyBehaviorContainer">
                    <img src="http://openweathermap.org/img/wn/${responseResult.weather[0].icon}@2x.png" alt="skyIcon">
                    <div class="behaviorOfTheSky"> Sky's Behavior - ${responseResult.weather[0].description}</div>
                </div>
            </div>
            <div class="allShit">
                <div class="temperature">
                    <div class="max">Max. temperature - ${Math.floor(responseResult.main.temp_max)}deg</div>
                    <div class="now">Temperature now - ${Math.floor(responseResult.main.temp)}deg</div>
                    <div class="min">Min. temperature - ${Math.floor(responseResult.main.temp_min)}deg</div>
                </div>
                <div class="humidity">Humidity - ${responseResult.main.humidity}%</div>
                <div class="pressure">Pressure - ${responseResult.main.pressure}hPa</div>
            </div>
            <div class="dayAndTime">
                <div class="time">Hours - ${hours}</div>
                <div class="day">Day - ${dzien}</div>
                <div class="month">Month - ${miesiac}</div>
                <div class="year">Year - ${rok}</div>
                <div class="city">City - Kyiv</div>
                <div class="country">Country - ${responseResult.sys.country}</div>
            </div>
            <div class="sources">
                <div class="APIsource">
                    <a onclick='location.href="https://openweathermap.org/"'>
                        Site with the weather (source)
                    </a>
                </div>
                <div class="APIReallySource">
                    <a onclick='location.href="https://youtube.com/shorts/m-wvS-4lgUw?feature=share"'>
                        Really source.
                    </a>
                </div>
            </div>
        </div>
        `
        console.log(responseResult);
        wrapper.innerHTML = text;
    });
}

console.log(showAllShit());