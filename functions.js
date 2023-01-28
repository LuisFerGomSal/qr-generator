$(document).ready(function () {

    // Generate QR
    $("#qr-button").click(function () {

        var num1 = parseInt($("#num-1").val());
        var num2 = parseInt($("#num-2").val());

        for (let i = num1; i < num2 + 1; i++) {
            $.ajax({
                type: "GET",
                url: "https://api.qrserver.com/v1/create-qr-code/?data=" + i + "&format=svg&size=200x200",
                dataType: 'html',

                success: function (data) {
                    $("#qr-cards").append('<div class="qr-card"></div>');
                    $(".qr-card:last").prepend(data);
                    $(".qr-card:last").prepend('<p id="qr-num">' + i + '</p>');
                    $(".qr-card:last").find("svg").attr("download", "filename.svg");
                }
            });
        }
    });

    // Removes previously created QR codes and cleans input fields
    $("#clean-button").click(function () {
        $(".qr-card").remove();
        $("input").val("");
    });

});

// Downloads QR
$(document).on("click", ".qr-card", function () {
    // Pending...
});