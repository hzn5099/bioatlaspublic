document.addEventListener('DOMContentLoaded', function() {
    const viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/493.dzi",
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
    fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/21_493_7-3dpfS7can.svg")
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
    if (checkbox.id === 'checkbox_1100' || checkbox.id === 'checkbox_1000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_heart');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-1');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_2300' || checkbox.id === 'checkbox_2000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_yolk');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-3');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_5400' || checkbox.id === 'checkbox_5000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_yolk');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-4');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_yolk');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-5');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_yolk');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-6');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_8110' || checkbox.id === 'checkbox_8100' || checkbox.id === 'checkbox_8000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_yolk');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-2');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
}

function addAnnotations(viewer) {
    const annotations = [
        { id: 'heart', title: 'Heart', label: 'Ht', x: 2500, y: 1500 },
        { id: 'yolk', title: 'Yolk', label: 'Yo', x: 3500, y: 1500 },
        { id: 'somitic', title: 'Somitic Muscle', label: 'Sm', x: 3500, y: 600 },
        { id: 'notochord', title: 'Notochord', label: 'Not', x: 2200, y: 800 },
        { id: 'brain', title: 'Brain', label: 'Br', x: 1800, y: 500 },
        { id: 'chondrocranium', title: 'Chondrocranium', label: 'Cho', x: 1500, y: 950 },
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