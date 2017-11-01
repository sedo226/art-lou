//fucntion for creating galleryHTML
function gallery(newHTML){
    newHTML += '<div class="card mt-3">'; //open div #2
    newHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
    newHTML += '<img class="card-img-top img-fluid" src="' + art[i].image + '"alt="' + art[i].title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
    newHTML += '<div class="card-body">'; //open div #3
    newHTML += '<h4 class="card-title name-thumb"> Artist: ' + art[i].artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
    newHTML += '<div class="thumb-description-container">'; //open div #4
    newHTML += '<ul>'; //open ul #1
    newHTML += '<li class="title-thumb"> Title ' + art[i].title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
    newHTML += '<li class="medium-thumb"> Medium: ' + art[i].trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
    newHTML += '</ul>'; //close ul #1
    newHTML += '<a href="' + art[i].info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
    newHTML += '</div></div></div>'; //close div #2 #3 #4
    return newHTML;
};

//add on page load show all art originally
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        var art = JSON.parse(xhr.responseText);
        var galleryHTML = '<div id="allMediums">'; //open div #1
        for (var i=0; i<art.length; i += 1){
            if (art[i].all === true) {
                galleryHTML += gallery(galleryHTML);
            } 
        }
        galleryHTML += '</div>'; //close div #1
        document.getElementById('artContainer').innerHTML = galleryHTML;
        initHover();
    }
    console.log(galleryHTML);
};
xhr.open('GET', 'data/all.json');
xhr.send();

function showAll(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var art = JSON.parse(xhr.responseText);
            var galleryHTML = '<div id="allMediums">'; //open div #1
            for (var i=0; i<art.length; i += 1){
                if (art[i].all === true) {
                    galleryHTML += gallery(galleryHTML);
                } 
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}

function showPhotography(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var art = JSON.parse(xhr.responseText);
            var galleryHTML = '<div id="allMediums">'; //open div #1
            for (var i=0; i<art.length; i += 1){
                if (art[i].medium === 'photography') {
                    galleryHTML += '<div class="card mt-3">'; //open div #2
                    galleryHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
                    galleryHTML += '<img class="card-img-top img-fluid" src="' + art[i].image + '"alt="' + art[i].title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
                    galleryHTML += '<div class="card-body">'; //open div #3
                    galleryHTML += '<h4 class="card-title name-thumb"> Artist: ' + art[i].artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
                    galleryHTML += '<div class="thumb-description-container">'; //open div #4
                    galleryHTML += '<ul>'; //open ul #1
                    galleryHTML += '<li class="title-thumb"> Title ' + art[i].title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
                    galleryHTML += '<li class="medium-thumb"> Medium: ' + art[i].trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
                    galleryHTML += '</ul>'; //close ul #1
                    galleryHTML += '<a href="' + art[i].info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
                    galleryHTML += '</div></div></div>'; //close div #2 #3 #4
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}

function showPainting(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var art = JSON.parse(xhr.responseText);
            var galleryHTML = '<div id="allMediums">'; //open div #1
            for (var i=0; i<art.length; i += 1){
                if (art[i].medium === 'paint') {
                    galleryHTML += '<div class="card mt-3">'; //open div #2
                    galleryHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
                    galleryHTML += '<img class="card-img-top img-fluid" src="' + art[i].image + '"alt="' + art[i].title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
                    galleryHTML += '<div class="card-body">'; //open div #3
                    galleryHTML += '<h4 class="card-title name-thumb"> Artist: ' + art[i].artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
                    galleryHTML += '<div class="thumb-description-container">'; //open div #4
                    galleryHTML += '<ul>'; //open ul #1
                    galleryHTML += '<li class="title-thumb"> Title ' + art[i].title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
                    galleryHTML += '<li class="medium-thumb"> Medium: ' + art[i].trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
                    galleryHTML += '</ul>'; //close ul #1
                    galleryHTML += '<a href="' + art[i].info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
                    galleryHTML += '</div></div></div>'; //close div #2 #3 #4
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}

function showScreen(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var art = JSON.parse(xhr.responseText);
            var galleryHTML = '<div id="allMediums">'; //open div #1
            for (var i=0; i<art.length; i += 1){
                if (art[i].medium === 'screenPrint') {
                    galleryHTML += '<div class="card mt-3">'; //open div #2
                    galleryHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
                    galleryHTML += '<img class="card-img-top img-fluid" src="' + art[i].image + '"alt="' + art[i].title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
                    galleryHTML += '<div class="card-body">'; //open div #3
                    galleryHTML += '<h4 class="card-title name-thumb"> Artist: ' + art[i].artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
                    galleryHTML += '<div class="thumb-description-container">'; //open div #4
                    galleryHTML += '<ul>'; //open ul #1
                    galleryHTML += '<li class="title-thumb"> Title ' + art[i].title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
                    galleryHTML += '<li class="medium-thumb"> Medium: ' + art[i].trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
                    galleryHTML += '</ul>'; //close ul #1
                    galleryHTML += '<a href="' + art[i].info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
                    galleryHTML += '</div></div></div>'; //close div #2 #3 #4
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}

function showMixedMedia(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var art = JSON.parse(xhr.responseText);
            var galleryHTML = '<div id="allMediums">'; //open div #1
            for (var i=0; i<art.length; i += 1){
                if (art[i].medium === 'mixedMedium') {
                    galleryHTML += '<div class="card mt-3">'; //open div #2
                    galleryHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
                    galleryHTML += '<img class="card-img-top img-fluid" src="' + art[i].image + '"alt="' + art[i].title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
                    galleryHTML += '<div class="card-body">'; //open div #3
                    galleryHTML += '<h4 class="card-title name-thumb"> Artist: ' + art[i].artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
                    galleryHTML += '<div class="thumb-description-container">'; //open div #4
                    galleryHTML += '<ul>'; //open ul #1
                    galleryHTML += '<li class="title-thumb"> Title ' + art[i].title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
                    galleryHTML += '<li class="medium-thumb"> Medium: ' + art[i].trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
                    galleryHTML += '</ul>'; //close ul #1
                    galleryHTML += '<a href="' + art[i].info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
                    galleryHTML += '</div></div></div>'; //close div #2 #3 #4
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}

function showFurniture(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var art = JSON.parse(xhr.responseText);
            var galleryHTML = '<div id="allMediums">'; //open div #1
            for (var i=0; i<art.length; i += 1){
                if (art[i].medium === 'furniture') {
                    galleryHTML += '<div class="card mt-3">'; //open div #2
                    galleryHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
                    galleryHTML += '<img class="card-img-top img-fluid" src="' + art[i].image + '"alt="' + art[i].title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
                    galleryHTML += '<div class="card-body">'; //open div #3
                    galleryHTML += '<h4 class="card-title name-thumb"> Artist: ' + art[i].artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
                    galleryHTML += '<div class="thumb-description-container">'; //open div #4
                    galleryHTML += '<ul>'; //open ul #1
                    galleryHTML += '<li class="title-thumb"> Title ' + art[i].title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
                    galleryHTML += '<li class="medium-thumb"> Medium: ' + art[i].trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
                    galleryHTML += '</ul>'; //close ul #1
                    galleryHTML += '<a href="' + art[i].info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
                    galleryHTML += '</div></div></div>'; //close div #2 #3 #4
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}

function showPottery(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var art = JSON.parse(xhr.responseText);
            var galleryHTML = '<div id="allMediums">'; //open div #1
            for (var i=0; i<art.length; i += 1){
                if (art[i].medium === 'pottery') {
                    galleryHTML += '<div class="card mt-3">'; //open div #2
                    galleryHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
                    galleryHTML += '<img class="card-img-top img-fluid" src="' + art[i].image + '"alt="' + art[i].title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
                    galleryHTML += '<div class="card-body">'; //open div #3
                    galleryHTML += '<h4 class="card-title name-thumb"> Artist: ' + art[i].artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
                    galleryHTML += '<div class="thumb-description-container">'; //open div #4
                    galleryHTML += '<ul>'; //open ul #1
                    galleryHTML += '<li class="title-thumb"> Title ' + art[i].title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
                    galleryHTML += '<li class="medium-thumb"> Medium: ' + art[i].trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
                    galleryHTML += '</ul>'; //close ul #1
                    galleryHTML += '<a href="' + art[i].info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
                    galleryHTML += '</div></div></div>'; //close div #2 #3 #4
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}