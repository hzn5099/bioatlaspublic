document.addEventListener('DOMContentLoaded', function() {
    const viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/1731.dzi",
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
    fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/20_1731_3-3dpfC3can.svg")
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
    if (checkbox.id === 'checkbox_2300' || checkbox.id === 'checkbox_2000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_yolk');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-7');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_4100' || checkbox.id === 'checkbox_4000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_pectoral_fin');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-2, .cls-10');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_5400' || checkbox.id === 'checkbox_5000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_somitic');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-3, .cls-8');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_notochord');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-9, .cls-4');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_brain');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-11');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6300' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_inner_ear');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-1, .cls-5');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_12000' || checkbox.id === 'checkbox_10000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_swim_bladder');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-6');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
}

function addAnnotations(viewer) {
    const annotations = [
        { id: 'yolk', title: 'Yolk', label: 'Yo', x: 3500, y: 1100 },
        { id: 'Pectoral', title: 'Pectoral Fin', label: 'Pf', x: 3000, y: 200},
        { id: 'somitic', title: 'Somitic Muscle', label: 'Sm', x: 3000, y: 550 },
        { id: 'not', title: 'Notochord', label: 'Not', x: 7300, y: 580},
        { id: 'br', title: 'Brain', label: 'Br', x: 1400, y: 750},
        { id: 'ie', title: 'Inner ear', label: 'Ie', x: 2500, y: 1100},
        { id: 'sb', title: 'Swimming Bladder', label: 'Sb', x: 3600, y: 700}
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