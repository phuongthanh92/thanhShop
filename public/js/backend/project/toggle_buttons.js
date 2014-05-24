jQuery(document).ready(function (){
    toggle_buttons.init();
});
//* toggle buttons
toggle_buttons = {
    init: function (){
        $('.normal-toggle-button').toggleButtons();
        $('.warning-toggle-button').toggleButtons({
            style: {
                enabled : "warning",
                disabled: "danger"
            }
        });
        $('.danger-toggle-button').toggleButtons({
            style: {
                enabled : "danger",
                disabled: "info"
            }
        });
        $('.info-toggle-button').toggleButtons({
            style: {
                enabled : "info",
                disabled: "success"
            }
        });
        $('.success-toggle-button').toggleButtons({
            style: {
                enabled : "success",
                disabled: "warning"
            }
        });
        $('.disabled-toggle-button').toggleButtons();
        $('.data-attribute-toggle-button').toggleButtons();
    }
};