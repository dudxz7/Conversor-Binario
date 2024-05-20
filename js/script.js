function converterParaBinario() {
    let valorInt = parseInt(document.getElementById('numero').value);
    
    if (!isNaN(valorInt)) {
        let valorBinario = valorInt.toString(2);
        document.getElementById('total').innerText = valorBinario;
    } else {
        document.getElementById('total').innerText = "Por favor, insira um número válido.";
    }
}
