document.addEventListener('DOMContentLoaded', function() {
    const viewer = OpenSeadragon({
        id: "openseadragon1",
        prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
        tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/494.dzi",
        showNavigationControl: false,
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
    fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/21_494_12-3dfS12can.svg")
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
        const svgElements = svgOverlay.querySelectorAll('.cls-3');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_5400' || checkbox.id === 'checkbox_5000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_somitic_muscle');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-4');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6120' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_ganglion_cell_layer');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-5');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6110' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_lens');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-11');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6140' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_nuclear_layers');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-9');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6160' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_photoreceptor_layers');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-10');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6170' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_pigment_epithelium');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-6');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6130' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_retinal_inner_plexiform_layer');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-12');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6600' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_spinal_cord');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-2');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_notochord');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-7');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_brain');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-1');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
    if (checkbox.id === 'checkbox_6300' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
        const label = document.getElementById('text_label_inner_ear');
        if(label) {
            label.style.display = checkbox.checked ? '' : 'none';
        }
        const svgElements = svgOverlay.querySelectorAll('.cls-8');
        svgElements.forEach(element => {
            element.style.display = checkbox.checked ? '' : 'none';
        });
    }
}

function addAnnotations(viewer) {
    const annotations = [
        { id: 'yolk', title: 'Yolk', label: 'Yo', x: 2500, y: 1200 },
        { id: 'somitic', title: 'Somitic Muscle', label: 'Sm', x: 4500, y: 600 },
        { id: 'rgl', title: 'Retinal Ganglion Cell Layer', label: 'Rgl', x: 320, y: 450 },
        { id: 'lens', title: 'Lens', label: 'Len', x: 450, y: 650 },
        { id: 'rnl', title: 'Retinal Nuclear Layers', label: 'Rnl', x: 550, y: 350 },
        { id: 'rph', title: 'Retinal Photoreceptor Layers', label: 'Rph', x: 800, y: 780 },
        { id: 'rpe', title: 'Retinal Pigment Epithelium', label: 'Rpe', x: 500, y: 280 },
        { id: 'rip', title: 'Retinal Inner Plexiform Layer', label: 'Rip', x: 700, y: 600 },
        { id: 'spinal', title: 'Spinal Cord', label: 'Sc', x: 4000, y: 250 },
        { id: 'notochord', title: 'Notochord', label: 'Not', x: 3800, y: 450 },
        { id: 'brain', title: 'Brain', label: 'Br', x: 800, y: 250},
        { id: 'ie', title: 'Inner Ear', label: 'Ie', x: 1300, y: 500 },
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