window.addEventListener("load", function () {
  initializeGallery();
  initMasonry();
});

function initializeGallery() {
  const instance = lightGallery(document.getElementById("lightgallery"), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: "your_license_key",
    speed: 500,
  });
  const galleryInstance = [...instance.galleryItems];
  galleryInstance.splice(galleryInstance.length - 1, 1);
  instance.updateSlides(galleryInstance, instance.index);
}

function initMasonry() {
  const grid = document.querySelector("#lightgallery");
  const msnry = new Masonry(grid, {
    itemSelector: "#lightgallery > a",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    gutter: 10,
  });
  rxjs
    .fromEvent(window, "resize")
    .pipe(rxjs.debounceTime(500))
    .subscribe(() => {
      msnry.layout();
    });
  this.setTimeout(() => {
    msnry.layout();
  }, 2000);
}
