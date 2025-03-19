document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".input-field input");

    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            const label = input.nextElementSibling;
            label.classList.add("active");
        });

        input.addEventListener("blur", () => {
            if (!input.value) {
                const label = input.nextElementSibling;
                label.classList.remove("active");
            }
        });
    });
});
