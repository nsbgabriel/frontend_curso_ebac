$(document).ready(function() {

    $('form').click('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $({novaTarefa}).appendTo(novoItem);
        $(`<div class="item-lista">
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('item-lista').val('')
    })
})