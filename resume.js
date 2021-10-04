//scroll event for 
var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;


for(var i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection=document.getElementById(targetSectionID);
        console.log(targetSection);
         //    interval = setInterval(scrollVertically, 20, targetSection);
        interval=setInterval(function(){
            /*var targetSectionCoordinate=targetSection.getBoundingClientRect();
            if(targetSectionCoordinate.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },50);*/
        scrollVertically(targetSection);
        }, 20);
    });
}
function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}

 // fill bar
var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    let currentWidth = 0;
    let targetWidth = bar.getAttribute("data-bar-width");
    let interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}


function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);