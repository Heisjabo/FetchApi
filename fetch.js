// const fetchData = () => {
//     const apiUrl = 'http://localhost:5000/api/v1/users'
//     fetch(apiUrl)
//         .then((response) => {
//             return response.json()
//         }).then((data) => {
//             displayData(data);
//         }).catch((error) => {
//             console.log("Fetch Error: " + error)
//         })
// }


const fetchData = async () => {
    const apiUrl = 'http://localhost:5000/api/v1/users';
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayData(data);
}

const displayData = (data) => {
    const outputDiv = document.getElementById("output");
    const parentDiv = document.createElement("div");
    data.forEach((item) => {
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        h1.textContent = item.username;
        p.textContent = item.email;
        div.appendChild(h1);
        div.appendChild(p);
        parentDiv.appendChild(div);
    })
    outputDiv.appendChild(parentDiv);
}
