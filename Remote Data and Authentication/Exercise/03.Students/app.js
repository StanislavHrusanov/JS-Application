const tbody = document.querySelector('#results tbody');
const url = 'http://localhost:3030/jsonstore/collections/students';
const inputFields = Array.from(document.querySelectorAll('input'));

window.addEventListener('load', loadStudents);
document.getElementById('submit').addEventListener('click', submit);

async function loadStudents(e) {

    tbody.innerHTML = '';

    const response = await fetch(url);
    const data = await response.json();

    for (let key in data) {
        const firstName = data[key].firstName;
        const lastName = data[key].lastName;
        const facultyNumber = data[key].facultyNumber;
        const grade = data[key].grade;

        const tr = elementCreator('tr');
        tr.appendChild(elementCreator('th', firstName));
        tr.appendChild(elementCreator('th', lastName));
        tr.appendChild(elementCreator('th', facultyNumber));
        tr.appendChild(elementCreator('th', grade));
        tbody.appendChild(tr);
    }
}

async function submit(e) {
    e.preventDefault();
    try {
        const student = {};

        inputFields.forEach(input => {
            if (input.value == '') {
                throw new Error('All fields are required!');
            }
            student[input.name] = input.value;
        });

        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();

        const tr = elementCreator('tr');
        tr.appendChild(elementCreator('th', data.firstName));
        tr.appendChild(elementCreator('th', data.lastName));
        tr.appendChild(elementCreator('th', data.facultyNumber));
        tr.appendChild(elementCreator('th', data.grade));
        tbody.appendChild(tr);

        inputFields.forEach(input => input.value = '');

    } catch (error) {
        alert(error.message);
    }
}

function elementCreator(type, text, attribute, attrName) {
    const newElement = document.createElement(type);
    if (attribute) {
        newElement.setAttribute(attribute, attrName);
    }
    if (text) {
        newElement.textContent = text;
    }
    return newElement;
}