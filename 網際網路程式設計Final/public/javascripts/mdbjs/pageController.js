$(document).ready(function() {
    $("#ingest-cal").html(0);
    $("#breakfast-cal, #lunch-cal, #dinner-cal").on('change', function() {
        let breakfastCal = parseInt($("#breakfast-cal").val());
        let lunchCal = parseInt($("#lunch-cal").val());
        let dinnerCal = parseInt($("#dinner-cal").val());
        let exerciseCal = breakfastCal + lunchCal + dinnerCal;
        $("#ingest-cal").html(exerciseCal);
    });

    $("#recordModal").on('hidden.bs.modal', function () {
        $("#breakfast-cal").val("0");
        $("#lunch-cal").val("0");
        $("#dinner-cal").val("0");
        $("#ingest-cal").html(0);
    });

    $("#switchDispRangeBtn").click(function() {
        let rangeStart = $('#dateRangeStart').val();
        let rangeEnd = $('#dateRangeEnd').val();
        let dateDetailStart = rangeStart.split("-");
        let dateDetailEnd = rangeEnd.split("-");

        if(!rangeStart || !rangeEnd) {
            alert("Date is invalid");
        } else {
            alert("Range is from " + rangeStart + " to " + rangeEnd);
            // alert(dateDetailStart[0] + "/" + dateDetailStart[1] +  "/" + dateDetailStart[2]);
            // alert(dateDetailEnd[0] + "/" + dateDetailEnd[1] +  "/" + dateDetailEnd[2]);
        }
    });
});