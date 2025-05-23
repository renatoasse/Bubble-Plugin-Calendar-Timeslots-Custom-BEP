function(instance, properties) {
var preview = Math.min(properties.bubble.height, properties.bubble.width);
    
    var imgElement = document.createElement("IMG");
    imgElement.setAttribute("src", "https://s3.amazonaws.com/appforest_uf/f1619350619973x727318374929213800/calendarpreview.fw.png");
    imgElement.style.width = 0.8 * preview + "px";
    imgElement.style.verticalAlign = "middle";
    
    instance.canvas[0].appendChild(imgElement);



}