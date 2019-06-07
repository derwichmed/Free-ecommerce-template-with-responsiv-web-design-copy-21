$(function (){
   countStep = $('.form_wizard .form_item').length;
   nbr_step = 0;
    $('.nxt_step').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        
        
        $('.form_wizard .steps_header .item')
                .eq(nbr_step - 1).removeClass('item_loding');
        $('.form_wizard .steps_header .item')
                .eq(nbr_step - 1).addClass('item_check');
        
        $('.form_wizard .steps_header .item')
                .eq(nbr_step).removeClass('item_disable');
        $('.form_wizard .steps_header .item')
                .eq(nbr_step).addClass('item_loding');
        
        $('.form_wizard .form_item:visible').hide();
        $('.form_wizard .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.pre_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        
        $('.form_wizard .steps_header .item')
                .eq(nbr_step + 1).removeClass('item_loding');
        $('.form_wizard .steps_header .item')
                .eq(nbr_step + 1).addClass('item_disable');
        
        $('.form_wizard .steps_header .item')
                .eq(nbr_step).removeClass('item_check');
        $('.form_wizard .steps_header .item')
                .eq(nbr_step).addClass('item_loding');
        
        $('.form_wizard .form_item:visible').hide();
        $('.form_wizard .form_item').eq(nbr_step).fadeIn(500);
    });
});