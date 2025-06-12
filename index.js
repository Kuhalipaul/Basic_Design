document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll('.option');
    const radios = document.querySelectorAll('input[type="radio"][name="unit"]');

    radios.forEach((radio) => {
        radio.addEventListener("change", () => {
            options.forEach(option => {
                option.classList.remove("active");
            });

            const selectedOption = radio.closest(".option");
            selectedOption.classList.add("active");
        });
    });
});
