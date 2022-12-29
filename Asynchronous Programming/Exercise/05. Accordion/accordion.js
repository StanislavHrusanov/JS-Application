function solution() {
    const mainSection = document.getElementById('main');
    Array.from(mainSection.children).forEach(ch => ch.remove());

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(res => res.json())
        .then(data => {
            data.forEach(t => {
                fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${t._id}`)
                    .then(res => res.json())
                    .then(data => {
                        const id = data._id;
                        const title = data.title;
                        const content = data.content;

                        const div = elementCreator('div', '', 'class', 'accordion');
                        const divHead = elementCreator('div', '', 'class', 'head');
                        divHead.appendChild(elementCreator('span', `${title}`));
                        const button = elementCreator('button', 'More', 'class', 'button');
                        button.id = `${id}`;
                        divHead.appendChild(button);
                        div.appendChild(divHead);
                        const divExtra = elementCreator('div', '', 'class', 'extra');
                        divExtra.style = "display:none";
                        divExtra.appendChild(elementCreator('p', `${content}`));
                        div.appendChild(divExtra);
                        mainSection.appendChild(div);

                        button.addEventListener('click', (e) => {
                            const extra = button.parentElement.parentElement.children[1];
                            if (button.textContent == 'More') {
                                button.textContent = 'Less';
                                extra.style = "display:block";
                            } else if (button.textContent == 'Less') {
                                button.textContent = 'More';
                                extra.style = "display:none";
                            }
                        });

                    })
                    .catch(error => alert('Error'));
            });

        })
        .catch(error => alert('Error'));

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
}
solution()