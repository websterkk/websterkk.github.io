// JAVASCRIPT FUNCTIONS FOR MAIN PAGE OF WEBSITE

var tabIndex;
var lastIndex = 0;
var linkIndex;
var link;

function showResume() {
    tabIndex = 1;
    hideAll();
    lastIndex = 1;
}

function openMenu() {
    document.getElementById("ddMenu").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches("#menuBtn")) {
        if (document.getElementById("ddMenu").classList.contains('show')) {
            document.getElementById("ddMenu").classList.remove('show');
        }
    }
}

function openModal(curPage, row) {
    var thisMod;
    if (curPage == 1)
        thisMod = modal.school;
    else thisMod = modal.personal;
    var modImg = thisMod[row][0];
    var modAbs = thisMod[row][1];
    link = thisMod[row][3];
    document.getElementById("modalImage").style.backgroundImage = modImg;
    document.getElementById("modalAbstract").innerHTML = modAbs;
    document.getElementById("modalBackground").style.display = "block";
    //linkIndex = modal.personal[row][col];
    alert(link);
}

function goToLink() {
    alert(link);
    window.open(link);
    link = '';
}

function goToPage(linkIndex) {
    window.open(linkIndex);
    linkIndex = '';
}

function hideAll() {
    document.getElementById("resumeContainer").display = none;
    document.getElementById("htmlContainer").display = none;
    document.getElementById("schoolContainer").display = none;
    document.getElementById("externalContainer").display = none;
    if (tabIndex == lastIndex) {
        document.getElementById("smallTitle").display = none;
        document.getElementById("bigTitle").display = block;
    } else {
        document.getElementById("bigTitle").display = none;
        document.getElementById("smallTitle").display = block;
        if (tabIndex === 1) {
            document.getElementById("resumeContainer").display = block;
        }
        if (tabIndex === 2) {
            document.getElementById("resumeContainer").display = block;
        }
        if (tabIndex === 3) {
            document.getElementById("resumeContainer").display = block;
        }
        if (tabIndex === 4) {
            document.getElementById("resumeContainer").display = block;
        }
    }
}

function playVideo() {
    var vidSource = a;
    var vidTitle = b;
    var pgSrc = '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
        '<link rel="stylesheet" href="home.css">' +
        '<title>' + vidTitle + '</title>' +
        '</head>' +
        '<body>' +
        '<video width="1000" height="600" controls class="videoPlayer">' +
        '<source src=' + vidSource + ' type="video/mp4">' +
        '</video>' +
        '</body>' +
        '</html>';
    // Create Page from pgSrc
}

/*

function goToPage() {
    var linkType = thisMod[row][2];
    if (linkType == 0){
        // play video
        alert (linkIndex + " yt")
        playVideo(thisMod[row][3])
    } else if (linkType == 1) {
        // open external page
    } else {
        // open local page
    }
    //window.open(linkIndex);
    linkIndex = '';
    thisMod = '';
}

function hideAll() {
    document.getElementById("resumeContainer").display = none;
    document.getElementById("htmlContainer").display = none;
    document.getElementById("schoolContainer").display = none;
    document.getElementById("externalContainer").display = none;
    if (tabIndex == lastIndex) {
        document.getElementById("smallTitle").display = none;
        document.getElementById("bigTitle").display = block;
    } else {
        document.getElementById("bigTitle").display = none;
        document.getElementById("smallTitle").display = block;
        if (tabIndex === 1) {
            document.getElementById("resumeContainer").display = block;
        }
        if (tabIndex === 2) {
            document.getElementById("resumeContainer").display = block;
        }
        if (tabIndex === 3) {
            document.getElementById("resumeContainer").display = block;
        }
        if (tabIndex === 4) {
            document.getElementById("resumeContainer").display = block;
        }
    }
}

function playVideo() {
    var vidSource = a;
    var vidTitle = b;
    var pgSrc = '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
        '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
        '<link rel="stylesheet" href="home.css">' +
        '<title>' + vidTitle + '</title>' +
        '</head>' +
        '<body>' +
        '<video width="1000" height="600" controls class="videoPlayer">' +
        '<source src=' + vidSource + ' type="video/mp4">' +
        '</video>' +
        '</body>' +
        '</html>';
    // Create Page from pgSrc
}

function ytVideo(thisVideo) {
    var pgSrc = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>' +
    '<meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<meta http-equiv="X-UA-Compatible" content="ie=edge">' +
    '<link rel="stylesheet" href="./css/home.css">' +
    '<title>Video</title>' +
    '</head>' +
    '<body>' +
    '<iframe width="1000" height="600" class="videoPlayer"' +
    'src="https://www.youtube.com/embed/8rnvHHzSTzE?rel=0&amp;showinfo=0" ' +
    'frameborder="0" allow="autoplay; encrypted-media"' +
    'allowfullscreen>' +
    '</iframe>' +
    '</body>' +
    '</html>' +
}
*/