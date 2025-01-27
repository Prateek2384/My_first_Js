async function fetchMyaccount(){
    const username=document.querySelector('input').value;
    const mainDiv=document.getElementById('main');

    if(!username)
    {
        alert('Please enter a Github username');
        return;
    }
    try{
        const response=await fetch(`https://api.github.com/users/${username}`);

        if(!response.ok)
        {
            alert('Account does not exist');
            return;
        }
        const userData=await response.json();

        const userCard=document.createElement('div');
        userCard.id='box';
        userCard.innerHTML=`
            <div id="starting">
          <img src="${userData.avatar_url}" alt="Profile pic">
          <div id="title">
            <h3 id="name">${userData.name}</h3>
            <p id="nam">@${userData.login}</p>
          </div>
        </div>
        <div id="middle">
          <div id="box-body-item" >
            <h3>${userData.public_repos}</h3>
            <span>REPOS</span>
          </div>
          <div id="box-body-item" >
            <h3>${userData.public_gists}</h3>
            <span>GISTS</span>
          </div>
          <div id="box-body-item" class="FOLLOWING" >
            <h3>${userData.following}</h3>
            <span>FOLLOWING</span>
          </div>
        </div>
        <div id="ending">
          <span id="bio-data">${userData.bio || 'No bio available'}</span>
        </div>
        `;
        mainDiv.appendChild(userCard);
    }   catch(error)
        {
            alert('An error occured.')
        }

}

document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById('submit').addEventListener('click',fetchMyaccount)
})