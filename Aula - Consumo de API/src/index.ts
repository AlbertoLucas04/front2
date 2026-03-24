type Country = {
    name: {common: string};
    capital: string[];
    population: number;
    flags: {png: string};
}    

const fetchCountry = async () => {
    const input = document.getElementById("countryInput") as HTMLInputElement;
    const countryName = input.value.trim()


    try {
    const response = await fetch ('https://restcountries.com/v3.1/name/${countryName}')
    const data = await response.json()
    } catch (error) {

    }
}




