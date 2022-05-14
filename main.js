 const linksSocialMedia = {
  YouTube: "watch?v=5DlROhT8NgUhttps",
  Facebook: "profile.php?id=100004563525487",
  Instagram: "davidfontesfelix",
  github: "haxizi"
}
    
function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')
          
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
    .then(response => response.json() )
    .then(data => {
      userName.textContent=`${data.name}`
      userBio.textContent = data.bio
      userGitHub.href = data.html_url
      UserPhoto.src = data.avatar_url
      UserLogin .textContent = data.login
    })
}



getGitHubProfileInfos()