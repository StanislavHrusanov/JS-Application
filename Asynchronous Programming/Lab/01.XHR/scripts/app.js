async function loadRepos() {
   const res = document.getElementById('res');
   try{
   const response = await fetch('https://api.github.com/users/testnakov/repos');
   const result = await response.text()
   res.textContent = result;
   }catch(error){
      alert(error);
   }
}