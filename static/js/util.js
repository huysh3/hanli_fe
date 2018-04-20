$(function() {
  $.fn.inlineLoading = function() {
      this.prepend('<i class="weui-loading"></i> ')
          .addClass('weui-btn_loading')
          .css('pointer-events', 'none')
          .css('background-color', '#e4ac31');
  }
  $.fn.cancelLoading = function() {
      this.find('i').remove()
      this.removeClass('weui-btn_loading').css('pointer-events', 'all');
  }  
})
