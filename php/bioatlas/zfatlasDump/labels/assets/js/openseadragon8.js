document.addEventListener('DOMContentLoaded', function() {
    const viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/285.dzi",
        showNavigationControl: false,
        minZoomImageRatio: 0.4,
        showNavigator: true,
    });

    // Handler for canvas-click to prevent default action
    viewer.addHandler('canvas-click', function(event) {
        event.preventDefaultAction = true;
    });

    // Fetch and apply the SVG overlay
    fetchAndApplyOverlay(viewer);

    // Add annotations once the viewer is open
    viewer.addHandler('open', function() {
        addAnnotations(viewer);
        setupNavigatorLabels(viewer);
    });
});

function fetchAndApplyOverlay(viewer) {
    fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/22_285_4-3dpfT4can.svg")
        .then(response => response.text())
        .then(svg => {
            var svgOverlay = document.createElement("div");
            svgOverlay.innerHTML = svg;

            var overlayRect = viewer.viewport.imageToViewportRectangle(0, 0, 1, 1);
            viewer.addOverlay({
                element: svgOverlay,
                location: overlayRect
            });

            connectSVGWithCheckboxes(svgOverlay);
        });
}

function connectSVGWithCheckboxes(svgOverlay) {
    document.querySelectorAll('#label_pane2 input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => toggleElementVisibility(checkbox, svgOverlay));
    });
}

function toggleElementVisibility(checkbox, svgOverlay) {
    if (checkbox.id === 'checkbox_6120' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_ganglion_cell_layer');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-9');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6110' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_lens');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-3, .cls-8');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6111' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_cornea');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-1, .cls-4');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6140' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_nuclear_layers');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-7, .cls-14');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6110' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_photoreceptor_layer');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-6, .cls-5');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6160' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_pigmented_epithelium');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-12');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6130' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_inner_plexiform');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-10');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_brain');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-13');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_8110' || checkbox.id === 'checkbox_8100' || checkbox.id === 'checkbox_8000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_chondrocranium');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-2, .cls-11');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
}

function addAnnotations(viewer) {
    const annotations = [
        { id: 'rgl', title: 'retinal ganglion cell layer', label: 'Rgl', x: 1400, y: 300},
        { id: 'len', title: 'Lens', label: 'Len', x: 1200, y: 200},
        { id: 'cornea', title: 'Cornea', label: 'Cor', x: 1550, y: 300},
        { id: 'rnl', title: 'retinal nuclear layer', label: 'Rnl', x: 1550, y: 300},
        { id: 'rph', title: 'Retinal Photoreceptor Layer', label: 'Rph', x: 1520, y: 1300},
        { id: 'rpe', title: 'Retinal Pigmented Epithelium', label: 'Rpe', x: 810, y: 1100},
        { id: 'rip', title: 'Retinal Inner Plexiform Layer', label: 'Rip', x: 1000, y: 380},
        { id: 'br', title: 'Brain', label: 'Br', x: 800, y: 750},
        { id: 'cho', title: 'Chondrocranium', label: 'Cho', x: 1400, y: 950}
    ];

    annotations.forEach(ann => {
        const textLabel = document.createElement("div");
        textLabel.id = `text_label_${ann.id}`;
        textLabel.className = "unselectable";
        textLabel.title = ann.title;
        textLabel.innerHTML = ann.label;
        textLabel.setAttribute("data-fulltext", ann.title);
        textLabel.style = "white-space: nowrap; color: rgb(0, 0, 0); z-index: 100; font-weight: normal; position: absolute; display: block;";

        textLabel.onmouseover = () => textLabel.innerHTML = textLabel.getAttribute("data-fulltext");
        textLabel.onmouseout = () => textLabel.innerHTML = ann.label;

        const viewportPoint = viewer.viewport.imageToViewportCoordinates(ann.x, ann.y);
        viewer.addOverlay({
            element: textLabel,
            location: viewportPoint
        });
    });
}

function setupNavigatorLabels(viewer) {
    const navigatorElement = viewer.navigator.element;
    const labels = ['Anterior', 'Posterior'];
    labels.forEach(label => {
        const div = document.createElement('div');
        div.innerText = label;
        div.className = `navigator-label ${label.toLowerCase()}`;
        navigatorElement.appendChild(div);
    });
}