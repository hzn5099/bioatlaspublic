document.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var slideId = urlParams.get('s');
    var dziUrl = `http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/${slideId}.dzi`;

    const viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: dziUrl,
        showNavigationControl: false,
        minZoomImageRatio: 0.4,
        showNavigator: true,
    });

    // Fetch and apply the SVG overlay
    fetchAndApplyOverlay(viewer);

});
function fetchAndApplyOverlay(viewer) {
    const slideId = new URLSearchParams(window.location.search).get('s');  // Ensure `slideId` is accessible here

    fetch(`http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/${slideId}.svg`)
        .then(response => response.text())
        .then(svg => {
            var svgOverlay = document.createElement("div");
            svgOverlay.innerHTML = svg;

            var overlayRect = viewer.viewport.imageToViewportRectangle(0, 0, 1, 1);
            viewer.addOverlay({
                element: svgOverlay,
                location: overlayRect
            });

            // Add annotations directly after SVG has been loaded and parsed
            addAnnotations(svgOverlay, viewer);
            connectSVGWithCheckboxes(svgOverlay);
        });
}

function addAnnotations(svgOverlay, viewer) {
    const svg = svgOverlay.querySelector('svg'); // Get the SVG element
    const gElements = svg.querySelectorAll('g');

    gElements.forEach(g => {
        const gId = abbreviateLabel(g.id); // Abbreviate the label
        const paths = g.querySelectorAll('path');
        paths.forEach(path => {
            const bbox = path.getBBox();
            const pathClass = path.getAttribute('class');

            // Create the label as an SVG text element
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute("x", bbox.x + bbox.width / 2);
            text.setAttribute("y", bbox.y + bbox.height / 2);
            text.setAttribute("fill", "black"); // Use a bright color to ensure visibility
            text.setAttribute("font-size", "24"); // Use a clearly visible size
            text.setAttribute("text-anchor", "middle");
            text.textContent = `${gId}`;

            text.addEventListener('mouseenter', () => {
                text.textContent = g.id.replace(/_/g, ' '); // Full label on hover
                text.textContent = text.textContent.split(' ').map(word => capitalizeFirstLetter(word)).join(' '); // Capitalize first letters

                // Auto-connect to checkbox based on ID number
                const checkboxId = `checkbox_${g.id.replace(/_/g, '')}`; // Assuming checkbox IDs follow the format 'checkbox_1', 'checkbox_2', etc.
                const checkbox = document.getElementById(checkboxId);
                if (checkbox) {
                    checkbox.checked = true; // Connect to checkbox
                }
            });

            text.addEventListener('mouseleave', () => {
                text.textContent = `${gId}`; // Abbreviated label on mouse leave
            });

            svg.appendChild(text); // Append text to the SVG element
        });
    });
}


// Function to abbreviate labels based on specified rules
function abbreviateLabel(label) {
    const maxLength = 2; // Maximum length for abbreviated labels
    const words = label.split('_'); // Split label into words if there are underscores
    if (words.length === 1) {
        return capitalizeFirstLetter(label.substring(0, maxLength)); // Return abbreviated label if no underscores
    } else {
        let abbreviation = '';
        words.forEach(word => {
            abbreviation += word.substring(0, 1); // Add the first character of each word
        });
        return capitalizeFirstLetter(abbreviation.substring(0, maxLength)); // Return abbreviated label with max length
    }
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
