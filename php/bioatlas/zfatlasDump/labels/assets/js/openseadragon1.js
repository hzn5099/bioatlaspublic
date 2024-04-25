var urlParams = new URLSearchParams(window.location.search);
var slideId = urlParams.get('s');
if (slideId == '35532') {
    document.addEventListener('DOMContentLoaded', function () {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/1727.dzi",
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
        fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/20_1727_10-3dpfC10can.svg")
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
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-10');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_5400' || checkbox.id === 'checkbox_5000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_somitic');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3, .cls-13');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6120' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rgl');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-4, .cls-12');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6110' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_len');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-11');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6140' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rnl');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-9, .cls-19');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6110' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rph');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6160' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rpe');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-16');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6130' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rip');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-14, .cls-15');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6190' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_onh');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-2');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6191' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_och');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-6');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_not');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-7');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_br');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-17');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6500' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_op');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-1');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_8140' || checkbox.id === 'checkbox_8100' || checkbox.id === 'checkbox_8000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_spc');
            if (label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-8, .cls-18');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
    }

    function addAnnotations(viewer) {
        const annotations = [
            {id: 'yolk', title: 'Yolk', label: 'Yo', x: 3000, y: 900},
            {id: 'somitic', title: 'Somitic Muscle', label: 'Sm', x: 7900, y: 700},
            {id: 'rgl', title: 'retinal ganglion cell layer', label: 'Rgl', x: 1400, y: 300},
            {id: 'len', title: 'Lens', label: 'Len', x: 1200, y: 200},
            {id: 'rnl', title: 'retinal nuclear layer', label: 'Rnl', x: 1550, y: 300},
            {id: 'rph', title: 'Retinal Photoreceptor Layer', label: 'Rph', x: 1520, y: 1300},
            {id: 'rpe', title: 'Retinal Pigmented Epithelium', label: 'Rpe', x: 810, y: 1100},
            {id: 'rip', title: 'Retinal Inner Plexiform Layer', label: 'Rip', x: 1000, y: 380},
            {id: 'onh', title: 'Optic Nerve Head', label: 'Onh', x: 1200, y: 1250},
            {id: 'och', title: 'Optic Chiasm', label: 'Och', x: 1200, y: 950},
            {id: 'not', title: 'Notochord', label: 'Not', x: 8500, y: 800},
            {id: 'br', title: 'Brain', label: 'Br', x: 800, y: 750},
            {id: 'op', title: 'Olfactory Pit', label: 'Op', x: 690, y: 450},
            {id: 'spc', title: 'Splanchnocranium', label: 'Spc', x: 1400, y: 950}
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
} else if (slideId == '35537')
{
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
            const label = document.getElementById('text_label_Pectoral');
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
            const label = document.getElementById('text_label_not');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-9, .cls-4');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_br');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-11');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6300' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_ie');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-1, .cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_12000' || checkbox.id === 'checkbox_10000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_sb');
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
} else if (slideId == '35536')
{
    document.addEventListener('DOMContentLoaded', function() {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/1728.dzi",
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
        fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/20_1728_11-3dpfC11can.svg")
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
            const svgElements = svgOverlay.querySelectorAll('.cls-9');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
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
        if (checkbox.id === 'checkbox_6140' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rnl');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-2');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6110' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rph');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6160' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rpe');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3, .cls-8');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6500' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_op');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-1');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_8140' || checkbox.id === 'checkbox_8100' || checkbox.id === 'checkbox_8000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_spc');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-6, .cls-10');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
    }

    function addAnnotations(viewer) {
        const annotations = [
            { id: 'heart', title: 'Heart', label: 'Ht', x: 1500, y: 500 },
            { id: 'yolk', title: 'Yolk', label: 'Yo', x: 2500, y: 700 },
            { id: 'rnl', title: 'Retinal Nuclear Layers', label: 'Rnl', x: 400, y: 1000 },
            { id: 'rph', title: 'Retinal Photoreceptor Layer', label: 'Rph', x: 400, y: 150 },
            { id: 'rpe', title: 'Retinal Pigmented Epithelium', label: 'Rpe', x: 580, y: 250 },
            { id: 'op', title: 'Olfactory Pit', label: 'Op', x: 180, y: 300 },
            { id: 'spc', title: 'Splanchnocranium', label: 'Spc', x: 700, y: 350 },
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
} else if (slideId == '493')
{
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
            const label = document.getElementById('text_label_somitic');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-4');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_notochord');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_brain');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-6');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_8110' || checkbox.id === 'checkbox_8100' || checkbox.id === 'checkbox_8000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_chondrocranium');
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
} else if (slideId == '494')
{
    document.addEventListener('DOMContentLoaded', function() {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/494.dzi",
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
            const label = document.getElementById('text_label_rgl');
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
            const label = document.getElementById('text_label_rnl');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-9');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6160' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rph');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-10');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6170' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rpe');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-6');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6130' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rip');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-12');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6600' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_spinal');
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
            const label = document.getElementById('text_label_ie');
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
} else if (slideId == '496')
{
    document.addEventListener('DOMContentLoaded', function() {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/496.dzi",
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
        fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/21_496_11-3dpfS11can.svg")
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
            const svgElements = svgOverlay.querySelectorAll('.cls-9');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_2200' || checkbox.id === 'checkbox_2000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_intestine');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-4');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_2300' || checkbox.id === 'checkbox_2000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_yolk');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-6');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_5400' || checkbox.id === 'checkbox_5000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_somitic');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3, .cls-13');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_not');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-7');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_nar');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-1');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_eye');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-2, .cls-8');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6500' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_naris');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_8110' || checkbox.id === 'checkbox_8100' || checkbox.id === 'checkbox_8000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_chondrocranium');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
    }

    function addAnnotations(viewer) {
        const annotations = [
            { id: 'heart', title: 'Heart', label: 'Ht', x: 2100, y: 1400 },
            { id: 'intestine', title: 'Intestine', label: 'Int', x: 3300, y: 800 },
            { id: 'yolk', title: 'Yolk', label: 'Yo', x: 3500, y: 1400 },
            { id: 'somitic', title: 'Somitic Muscle', label: 'Sm', x: 3000, y: 500 },
            { id: 'not', title: 'Notochord', label: 'Not', x: 2100, y: 750},
            { id: 'eye', title: 'Eye', label: 'Eye', x: 1400, y: 950},
            { id: 'naris', title: 'Naris', label: 'Nar', x: 1100, y: 950},
            { id: 'chondrocranium', title: 'Chondrocranium', label: 'Cho', x:1700, y:910}
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
} else if (slideId == '282')
{
    document.addEventListener('DOMContentLoaded', function() {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/282.dzi",
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
        fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/22_282_3-3dpfT1can.svg")
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
    }

    function addAnnotations(viewer) {
        const annotations = [
            { id: 'brain', title: 'Brain', label: 'Br', x: 800, y: 400 },
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
}else if (slideId == '285')
{
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
            const label = document.getElementById('text_label_rgl');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-9');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6110' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_len');
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
            const label = document.getElementById('text_label_rnl');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-7, .cls-14');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6160' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rph');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-6, .cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6170' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rpe');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-12');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6130' || checkbox.id === 'checkbox_6100' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_rip');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-10');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_br');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-13');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_8110' || checkbox.id === 'checkbox_8100' || checkbox.id === 'checkbox_8000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_cho');
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
            { id: 'rgl', title: 'retinal ganglion cell layer', label: 'Rgl', x: 1200, y: 950},
            { id: 'len', title: 'Lens', label: 'Len', x: 1400, y: 950},
            { id: 'cornea', title: 'Cornea', label: 'Cor', x: 30, y: 850},
            { id: 'rnl', title: 'retinal nuclear layer', label: 'Rnl', x: 500, y: 900},
            { id: 'rph', title: 'Retinal Photoreceptor Layer', label: 'Rph', x: 570, y: 800},
            { id: 'rpe', title: 'Retinal Pigmented Epithelium', label: 'Rpe', x: 580, y: 1000},
            { id: 'rip', title: 'Retinal Inner Plexiform Layer', label: 'Rip', x: 430, y: 920},
            { id: 'br', title: 'Brain', label: 'Br', x: 800, y: 500},
            { id: 'cho', title: 'Chondrocranium', label: 'Cho', x: 750, y: 950}
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
}else if (slideId == '291')
{
    document.addEventListener('DOMContentLoaded', function() {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/291.dzi",
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
        fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/22_291_10-3dpfT10can.svg")
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
        if ( checkbox.id === 'checkbox_1100' || checkbox.id === 'checkbox_1000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_heart');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-8');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_1120' || checkbox.id === 'checkbox_1100' || checkbox.id === 'checkbox_1000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_atrium');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-2');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_1130' || checkbox.id === 'checkbox_1100' || checkbox.id === 'checkbox_1000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_ventricle');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-1');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_2100' || checkbox.id === 'checkbox_2000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_esophagus');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
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
        if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_notochord');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_brain');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-4');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6300' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_ie');
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
            { id: 'heart', title: 'Heart', label: 'Ht', x: 800, y: 1350 },
            { id: 'atrium', title: 'Atrium', label: 'At', x: 900, y: 1320 },
            { id: 'ventricle', title: 'Ventricle', label: 'Vt', x: 700, y: 1300 },
            { id: 'yolk', title: 'Yolk', label: 'Yo', x: 620, y: 1080 },
            { id: 'esophagus', title: 'Espohagus', label: 'Eso', x: 780, y: 850 },
            { id: 'notochord', title: 'Notochord', label: 'Not', x: 780, y: 700 },
            { id: 'brain', title: 'Brain', label: 'Br', x: 780, y: 300 },
            { id: 'ie', title: 'Inner Ear', label: 'Ie', x: 400, y: 650 },
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
}else if (slideId == '293')
{
    document.addEventListener('DOMContentLoaded', function() {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/293.dzi",
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
        fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/22_293_12-3dpfT12can.svg")
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
        if ( checkbox.id === 'checkbox_1100' || checkbox.id === 'checkbox_1000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_heart');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-9');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_1120' || checkbox.id === 'checkbox_1100' || checkbox.id === 'checkbox_1000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_atrium');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-2');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_1130' || checkbox.id === 'checkbox_1100' || checkbox.id === 'checkbox_1000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_ventricle');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-1');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_2100' || checkbox.id === 'checkbox_2000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_esophagus');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-4');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
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
        if (checkbox.id === 'checkbox_6400' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_notochord');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-6');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6200' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_brain');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-8');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6300' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_inner_ear');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3, .cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }

        if (checkbox.id === 'checkbox_6311' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_Otolith');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3, .cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
    }

    function addAnnotations(viewer) {
        const annotations = [
            { id: 'heart', title: 'Heart', label: 'Ht', x: 770, y: 1530 },
            { id: 'atrium', title: 'Atrium', label: 'At', x: 900, y: 1520 },
            { id: 'ventricle', title: 'Ventricle', label: 'Vt', x: 600, y: 1450 },
            { id: 'yolk', title: 'Yolk', label: 'Yo', x: 800, y: 1200 },
            { id: 'esophagus', title: 'Espohagus', label: 'Eso', x: 760, y: 830 },
            { id: 'notochord', title: 'Notochord', label: 'Not', x: 750, y: 670 },
            { id: 'brain', title: 'Brain', label: 'Br', x: 780, y: 300 },
            { id: 'inner_ear', title: 'Inner Ear', label: 'Ie', x: 400, y: 650 },
            { id: 'Otolith', title: 'Otolith', label: 'Ot', x: 440, y: 530}
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
}else if (slideId == '306')
{

    document.addEventListener('DOMContentLoaded', function() {
        const viewer = OpenSeadragon({
            id: "openseadragon1",
            prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
            tileSources: "http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output/306.dzi",
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
        fetch("http://localhost:8000/assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/22_306_25-3dpfT25can.svg")
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
        if (checkbox.id === 'checkbox_2200' || checkbox.id === 'checkbox_2000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_intestine');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-3');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_3110' || checkbox.id === 'checkbox_3100' || checkbox.id === 'checkbox_3000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_pronephric');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-4');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_5400' || checkbox.id === 'checkbox_5000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_somitic');
            if(label) {
                label.style.display = checkbox.checked ? '' : 'none';
            }
            const svgElements = svgOverlay.querySelectorAll('.cls-1');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
        if (checkbox.id === 'checkbox_6600' || checkbox.id === 'checkbox_6000' || checkbox.id === 'checkbox_0') {
            const label = document.getElementById('text_label_spinal');
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
            const svgElements = svgOverlay.querySelectorAll('.cls-5');
            svgElements.forEach(element => {
                element.style.display = checkbox.checked ? '' : 'none';
            });
        }
    }

    function addAnnotations(viewer) {
        const annotations = [
            { id: 'intestine', title: 'Intestine', label: 'Int', x: 800, y: 1020 },
            { id: 'pronephric', title: 'Pronephric Duct', label: 'Pnpd', x: 760, y: 920 },
            { id: 'somitic', title: 'Somitic Muscle', label: 'Sm', x: 680, y: 750 },
            { id: 'spinal', title: 'Spinal Chord', label: 'Sc', x: 800, y: 400 },
            { id: 'notochord', title: 'Notochord', label: 'Not', x: 780, y: 600 },
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
}