# 4.1
- Reuse template from ex2
- Read a simple app in PDF and write your own app with EX2 template.
- API(http://openweathermap.org/current)
- Commit to git.
# 4.2
- Update 4.1, Add input to search and show result.
- Touch to show 4.1 screen with new value.
- Screen Flow demo (https://cloud.githubusercontent.com/assets/2805320/9610287/2ab08b30-50e1-11e5-86d6-a28e32c4acb3.gif)
- Commit to git.
# 4.3 - Advance
* Create new app:
- 1 Screen to allow search and list result.
- 1 screen to show result (reuse Ex 4.1, 4.2);
- ScreenFlow: https://camo.githubusercontent.com/f72ebe2067869fb5f8ca05a86d83362fb9f4f011/687474703a2f2f692e696d6775722e636f6d2f6d754375337a6f2e676966
API info:
- APIKEY = 'zOEDguz3RM6DRGh1o9UIm7dCyU4qIlKU';
- APIKEY = 'FWaugDBcsPGXNdH0fTZGKuiYfoN928aG';
Get City by search: https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${cityName}&language=es
Get weather details by CityID: https://dataservice.accuweather.com/currentconditions/v1/${cityData.id}?apikey=${APIKEY}&language=en-ens&details=true

example: https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=zOEDguz3RM6DRGh1o9UIm7dCyU4qIlKU&q=Ho%20Chi%20Minh&language=en 