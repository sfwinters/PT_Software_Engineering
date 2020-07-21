$(() => {
    let $tdl = $('#to-do-list');
    let $doneList = $('#completed');
    let $inpt = $('#input-box');
    let $addBtn = $('#submit');
    const doList = [];
    let i=0;

    $($addBtn).on('click', function(){
        $($inpt).submit();
        const doThis = document.createElement('div');
        doThis.setAttribute('class', 'to-do-item')
        const doneBtn = document.createElement('button');
        doneBtn.innerHTML="COMPLETED";
        doneBtn.setAttribute('id', i)
        doThis.innerHTML=$inpt.val() + '</br>'
        doThis.append(doneBtn)
        $tdl.append(doThis);
        i+=1;
        $(doneBtn).on('click', function(){
            $('#completed').append(doneBtn.parentElement);
            doneBtn.parentElement.classList.add('done-item');
            doneBtn.parentElement.classList.remove('to-do-item');
            doneBtn.innerHTML="REMOVE";
            $(doneBtn).on('click', function(){
                doneBtn.parentElement.remove();
            })
        });
    })
});
// });

    