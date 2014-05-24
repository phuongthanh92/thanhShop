/**
 * Created by Hoang on 04/03/2014.
 */
var dataNestable = null;
$(document).ready(function (){
    $('.dd').nestable({
        dropCallback: function (details){
//            console.log(details);
            var order = new Array();
            $("li[data-id='" + details.destId + "']").find('ol:first').children().each(function (index, elem){
                order[index] = $(elem).attr('data-id');
            });

            if(order.length === 0){
                var rootOrder = new Array();
                $("#nestable > ol > li").each(function (index, elem){
                    rootOrder[index] = $(elem).attr('data-id');
                });
            }
            $('.btn-save').removeClass('btn-primary btn-success').addClass('btn-warning');
            dataNestable = { source: details.sourceId,
                destination        : details.destId,
                order              : JSON.stringify(order),
                rootOrder          : JSON.stringify(rootOrder)
            };
        }

    });
    $('.btn-save').click(function (){
        if(dataNestable != null){
            var url = $('#nestable').data('url');
            $.post(url, dataNestable, function (data){
//                    console.log('data ' + data);
                }).done(function (data){
                    if(data == 'success'){
                        $('.btn-save').removeClass('btn-warning').addClass('btn-success');
                        $("#success-indicator").fadeIn(100).delay(3000).fadeOut();
                    }
                });
        }
    })
    $('.delete_toggle').each(function (index, elem){
        $(elem).click(function (e){
            e.preventDefault();
            $('#postvalue').attr('value', $(elem).attr('rel'));
            $('#deleteModal').modal('toggle');
        });
    });
});
