function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href='https://www.facebook.com/Chuy%E1%BB%83n-Nh%C6%B0%E1%BB%A3ng-Aqua-City-Novaland-106542104768559'>https://www.facebook.com/Chuy%E1%BB%83n-Nh%C6%B0%E1%BB%A3ng-Aqua-City-Novaland-106542104768559</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
