document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nomeCampanha = document.getElementById('nomeCampanha').value;
    const dataInicio = document.getElementById('dataInicio').value;
    const dataFim = document.getElementById('dataFim').value;
    const statusCampanha = document.getElementById('statusCampanha').value;

    console.log("Nome da Campanha:", nomeCampanha);
    console.log("Data de Início:", dataInicio);
    console.log("Data de Fim:", dataFim);
    console.log("Status da Campanha:", statusCampanha);

    // Aqui você pode adicionar lógica para buscar os resultados, como uma chamada à API
});
