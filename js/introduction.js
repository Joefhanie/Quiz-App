function directToQuest(){
    const getName = new URLSearchParams(window.location.search);
    const username = getName.get('name'); 
    window.location.href = "quest.html?name=" + encodeURIComponent(username);
}