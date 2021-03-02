const table = document.createElement("TABLE");
table.style.background = '#abf5a7'
table.style.border = '1px solid #8fd38b'
table.style.textAlign = "center";
const tr = document.createElement("TR");
const name = document.createElement("TH");
name.innerHTML = 'name'
tr.appendChild(name)
const height = document.createElement("TH");
height.innerHTML = 'height'
tr.appendChild(height)
const hairColor = document.createElement("TH");
hairColor.innerHTML = 'hair color'
tr.appendChild(hairColor)
const plant = document.createElement("TH");
plant.innerHTML = 'plant'
tr.appendChild(plant)
const population = document.createElement("TH");
population.innerHTML = 'population'
tr.appendChild(population)
table.appendChild(tr)
document.body.appendChild(table);


const baseEndpoint = 'https://swapi.dev/api/people/';
console.log(baseEndpoint);
async function userName() {
    const response = await fetch(baseEndpoint);
    console.log(response);
    const data = await response.json();
    console.log(data);
    data.results.forEach(async (people) => {
        const homeWorldResponse = await fetch(people.homeworld);
        const homeWorldData = await homeWorldResponse.json();
        getPrint(people.name,people.hair_color,people.height,homeWorldData.name, homeWorldData.population )
    })
}

function getPrint(name, hair_color, height, data_name, population){
    const row = document.createElement('TR');
    row.innerHTML = `<td>${name}</td>
    <td>${hair_color}</td>
    <td>${height}</td>
    <td>${data_name}</td>
    <td>${population}</td>`;
    table.appendChild(row);
}

userName();








