(function($){
    $(document).ready(function(){
        $('form.donations select').chosen();

        $('form.donations').on('submit', function(e) {
            e.preventDefault();

            var giveUrl = $(this).attr('action'),
                missionaryName = $('select[name="giving_to"]').val();

            window.location.href = giveUrl+'?giving_to='+missionaryName;
        });
    });
})(jQuery);
