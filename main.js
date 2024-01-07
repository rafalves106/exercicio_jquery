$(document).ready(function(){
    $('#tasks-list').focus(function() {
        $('#btn-add').fadeIn();
    });

    $('#btn-add').click(function() {
        $('#btn-add').fadeOut();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const tasksList = $('#tasks-list').val();

        if (tasksList !== '') {
            const tasks = $('#tasks');

            tasks.append('<li>' + tasksList + '</li>');

            $('#tasks-list').val('');
        }
    })
    
    $('#tasks').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
});