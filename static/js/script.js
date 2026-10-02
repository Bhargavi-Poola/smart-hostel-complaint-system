document.addEventListener("DOMContentLoaded", function () {

    // Auto close alerts
    setTimeout(function () {

        let alerts =
            document.querySelectorAll(".alert");

        alerts.forEach(alert => {

            alert.style.transition = "0.5s";
            alert.style.opacity = "0";

            setTimeout(() => {
                alert.remove();
            }, 500);

        });

    }, 3000);


    // Image Preview
    const imageInput =
        document.getElementById("photo");

    if (imageInput) {

        imageInput.addEventListener("change", function () {

            const file = this.files[0];

            if (file) {

                const reader = new FileReader();

                reader.onload = function (e) {

                    let preview =
                        document.getElementById(
                            "imagePreview"
                        );

                    if (preview) {

                        preview.src = e.target.result;
                        preview.style.display = "block";

                    }

                };

                reader.readAsDataURL(file);

            }

        });

    }

});