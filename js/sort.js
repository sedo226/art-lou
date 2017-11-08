$('#mediumSelect').change(function() {
    var val = $("#mediumSelect option:selected").text();
    if (val === "Furniture"){
        showFurniture();
    } else if (val === "Mixed Media"){
        showMixedMedia();
    } else if (val === "Painting"){
        showPainting();
    } else if (val === "Photography"){
        showPhotography();
    } else if (val === "Pottery"){
        showPottery();
    } else if (val === "Screen Prints"){
        showScreen();
    } else {
        showAll();
    }
});

//fucntion for creating galleryHTML
function gallery(jsonObj){
    let newHTML = '<div class="card mt-3">'; //open div #2
    newHTML += '<img class="icon-fav" src="img/fav.svg" alt="favorite">';
    newHTML += '<img class="card-img-top img-fluid" src="' + jsonObj.image + '"alt="' + jsonObj.title + '">';//TODO add: <img class="card-img-top img-fluid" src="img/art-1.jpg" alt="image 1">
    newHTML += '<div class="card-body">'; //open div #3
    newHTML += '<h4 class="card-title name-thumb"> Artist: ' + jsonObj.artist + '</h4>';//TODO add: <h4 class="card-title name-thumb">Artist: Vincent van Gogh</h4>
    newHTML += '<div class="thumb-description-container">'; //open div #4
    newHTML += '<ul>'; //open ul #1
    newHTML += '<li class="title-thumb"> Title: ' + jsonObj.title + '</li>';//TODO add: <li class="title-thumb">Title: The Starry Night, 1889</li>
    newHTML += '<li class="medium-thumb"> Medium: ' + jsonObj.trueMedium + '</li>'; //TODO add: <li class="medium-thumb">Medium: Oil on canvas</li>
    newHTML += '</ul>'; //close ul #1
    newHTML += '<a href="' + jsonObj.info + '"><button type="button" class="btn btn-outline-primary">More Info</button></a>';//TODO add: <a href="#"><button type="button" class="btn btn-outline-primary">More Info</button></a>
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
                galleryHTML += gallery(art[i]);
            } 
        }
        galleryHTML += '</div>'; //close div #1
        document.getElementById('artContainer').innerHTML = galleryHTML;
        initHover();
        favorite();
    }
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
                    galleryHTML += gallery(art[i]);
                } 
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
            favorite();
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
                    galleryHTML += gallery(art[i]);
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
            favorite();
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
                    galleryHTML += gallery(art[i]);
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
            favorite();
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
                    galleryHTML += gallery(art[i]);
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
            favorite();
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
                    galleryHTML += gallery(art[i]);
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
            favorite();
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
                    galleryHTML += gallery(art[i]);
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
            favorite();
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
                    galleryHTML += gallery(art[i]);
                }
            }
            galleryHTML += '</div>'; //close div #1
            document.getElementById('artContainer').innerHTML = galleryHTML;
            initHover();
            favorite();
        }
    };
    xhr.open('GET', 'data/all.json');
    xhr.send();
}