$(document).ready(function() {
    // Adiciona uma tarefa quando o formulário é submetido
    $('#form-tarefa').submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        var tarefa = $('#input-tarefa').val(); // Obtém o valor do campo de entrada

        if (tarefa !== '') {
            $('#lista-tarefas').append('<li>' + tarefa + '</li>'); // Adiciona a tarefa à lista
            $('#input-tarefa').val(''); // Limpa o campo de entrada
        }
    });

    // Aplica o efeito de linha sobre o texto ao clicar em um item da lista
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed'); // Adiciona ou remove a classe "completed"
    });
});
