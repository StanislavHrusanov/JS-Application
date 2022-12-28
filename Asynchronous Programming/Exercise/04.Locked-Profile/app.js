function lockedProfile() {
    const mainSection = document.getElementById('main');
    mainSection.innerHTML = '';
    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json())
        .then(data => {
            let i = 1;
            Object.keys(data).forEach(p => {
                mainSection.innerHTML += `\n<div class="profile">
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${i}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${i}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${i}Username" value=${data[p].username} disabled readonly />
        <div class="user${i}Username" style="display:none">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${i}Email" value=${data[p].email} disabled readonly />
            <label>Age:</label>
            <input type="email" name="user${i}Age" value=${data[p].age} disabled readonly />
        </div>
        
        <button>Show more</button>
    </div>`;
                i++;
            });
            Array.from(mainSection.children).forEach(ch => {
                const button = ch.children[10];
                button.addEventListener('click', (e) => {
                    const unlock = button.parentElement.children[4];
                    const aditionalInfo = button.parentElement.children[9];

                    if (button.textContent == 'Show more') {
                        if (unlock.checked) {
                            button.textContent = 'Hide it';
                            aditionalInfo.style = "display:block";
                        }
                    } else if (button.textContent == 'Hide it') {
                        if (unlock.checked) {
                            button.textContent = 'Show more';
                            aditionalInfo.style = "display:none";
                        }
                    }
                });
            });
        })
        .catch(error => alert('Error'));
}