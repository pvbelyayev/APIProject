let mainSection = document.querySelector('#main');
let generateButton = document.querySelector('#displayPicture');
let showPic = document.getElementById('showPic');


function getPicture()
 {
     fetch("https://picsum.photos/v2/list?limit=1")
     .then(function(response){
         return response.json()
     })
     .then(function (data) {
         console.log(data)
         showPicture(data)
         //return data[0].url
     })
     .catch(err => console.log(err))
 }
 

function showPicture(pictures){
    pictures.forEach(p => {
        console.log("pictures",p.url);
        let picture = document.createElement('img');
        picture.src = p.download_url; //connection b/w HTML & JS happens here
        let randomValue = p[Math.floor(Math.random() * p.download_url)];
        picture.style.objectFit = "cover";
        picture.style.width = "50%";
        picture.style.height = "50%";
        showPic.appendChild(picture);
    })

pictures[20]

let number = Math.random(0 - pictures.length)
pictures[number].response



}


generateButton.addEventListener('click', getPicture);