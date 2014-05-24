$(document).ready(function (){
    orders.init();
});

orders = {
    init: function (){
        $('#order-row').change(function (){
            $('#form-order').submit();
        });

    }

}