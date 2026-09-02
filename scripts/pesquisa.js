function buscarJogos() {
    
    const termo = document.getElementById('campoPesquisa').value.toLowerCase().trim();

   
    const paginas = {
        "minecraft": "jogos/minecraft.html",
        "god of war": "jogos/godofwar.html",
        "batman arkham night": "jogos/batmanarkhamnight.html",
    };

    
    if (paginas[termo]) {
        
        window.location.href = paginas[termo];
    } else {
        
        alert("Jogo não encontrado ou disponível.");
    }
}
