window.addEventListener('load', ()=>{
    alert('El evento LOAD se ha activado');
});

document.getElementById('loginForm').addEventListener('submit', (e)=>{
    e.preventDefault();

    alert('El evento SUBMIT se ha activado');

    const abortEvent = new Event('abort');

    document.getElementById('loginForm').dispatchEvent(abortEvent);
});

document.getElementById('loginForm').addEventListener('abort', ()=>{
    alert('El evento ABORT se ha generado manualmente')
});