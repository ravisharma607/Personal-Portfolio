console.log('We Are Running')
document.querySelector('#cross').style.display = 'none';
document.querySelector('.icon').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('#hum').style.display = 'inline';
        document.querySelector('#cross').style.display = 'none';
    }
    else{
        document.querySelector('#hum').style.display = 'none';
        setTimeout(() => {
            
            document.querySelector('#cross').style.display = 'inline';
        },300);
    }
})