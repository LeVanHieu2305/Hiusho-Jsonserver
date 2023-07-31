const image = document.querySelector(".img-avatar");
const input = document.querySelector(".input-file");

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.file[0]);
});