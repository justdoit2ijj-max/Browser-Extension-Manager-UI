const secContainer = document.getElementById('sec-container');
const activeBtn = document.getElementById('Active');
const allBtn = document.getElementById('all');
const inactiveBtn = document.getElementById('Inactive');

fetch("data.json")
    .then(res => res.json())
    .then(data =>
        data.forEach(obj => dynamicSorting(obj))
);
function dynamicSorting(obj) {
    const div = document.createElement("div");
    secContainer.appendChild(div);
    div.classList.add('boxes');
    const seperator = document.createElement("div");
    div.appendChild(seperator);
    const secondSeperator = document.createElement("div")
    div.appendChild(secondSeperator);
    const thirdSeperator = document.createElement("div");
    div.appendChild(thirdSeperator);
    thirdSeperator.classList.add('thSeperator');
    let img = document.createElement("img");
    seperator.appendChild(img);
    img.src = obj.logo;
    img.classList.add('imgs');
    let h1 = document.createElement("h1");
    secondSeperator.appendChild(h1);
    h1.innerText = obj.name;
    let p = document.createElement("p");
    secondSeperator.appendChild(p);
    p.innerText = obj.description;
    const delButton = document.createElement("button");
    thirdSeperator.appendChild(delButton);
    delButton.innerText = "Remove";
    delButton.classList.add('delBtn');
    delButton.addEventListener('click', () => {
        div.style.display = "none";
    });
    const label = document.createElement("label");
    thirdSeperator.appendChild(label);
    label.classList.add('switch');
    const isLoggedIn = document.createElement("input")
    label.appendChild(isLoggedIn);
    isLoggedIn.type = "checkbox";
    isLoggedIn.checked = obj.isActive;
    const span = document.createElement("span");
    label.appendChild(span);
    span.classList.add('slider');
    span.classList.add('round');
}

function active() {
    const allBoxes = document.querySelectorAll(".boxes");

    activeBtn.classList.add('onstate');
    allBtn.classList.remove('onstate')
    inactiveBtn.classList.remove('onstate');

    allBoxes.forEach(box => {
        const checkbox = box.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            box.style.display = "grid";
        } else {
            box.style.display = "none";
        }
    });
}
function inactive() {
    const allBoxes = document.querySelectorAll(".boxes");

    activeBtn.classList.remove('onstate');
    allBtn.classList.remove('onstate')
    inactiveBtn.classList.add('onstate');

    allBoxes.forEach(box => {
        const checkbox = box.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            box.style.display = "none";
        } else {
            box.style.display = "grid";
        }
    });
}
function All() {
    const allBoxes = document.querySelectorAll(".boxes");

    activeBtn.classList.remove('onstate');
    allBtn.classList.add('onstate')
    inactiveBtn.classList.remove('onstate');

    allBoxes.forEach(box => {
        box.style.display = "grid";
    });
}
const toggle = document.querySelector('.toggle');
const img = toggle.querySelector('img');

toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');

    if (document.documentElement.classList.contains('light')) {
        img.src = "assets/images/icon-moon.svg";
    } else {
        img.src = "assets/images/icon-sun.svg";
    }
});