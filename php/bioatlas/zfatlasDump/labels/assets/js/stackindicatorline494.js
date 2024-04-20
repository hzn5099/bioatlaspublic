document.addEventListener('DOMContentLoaded', function() {
    var stackViewer = OpenSeadragon({
        id: "stack_indicator_line",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/494.dzi",
        showNavigationControl: false
    });
});