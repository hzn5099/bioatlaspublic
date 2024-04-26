var urlParams = new URLSearchParams(window.location.search);
var slideId = urlParams.get('s');
if (slideId == '35537') {
    document.addEventListener('DOMContentLoaded', function () {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                {id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)'},
                                {id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)'},
                                {id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)'}
                            ]
                        },
                        {
                            id: 'id_1200',
                            name: 'central cardinal vein(common cardinal vein) (Cen)',
                            color: 'rgb(255, 0, 187)'
                        }
                    ]),
                    createCategory('id_2000', 'Digestive', [
                        {id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)'},
                        {id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)'},
                        {id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300'},
                        {id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)'},
                        {id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)'}
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                {id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)'}
                            ]
                        },
                        {id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)'}
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        {id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)'},
                        {id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)', checkboxId: 'checkbox_4100'}
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        {id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)'},
                        {id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)'},
                        {id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)'},
                        {id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)'},
                        {id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)', checkboxId: 'checkbox_5400'}
                    ], 'checkbox_5000'),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items: [
                                {id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)'},
                                {id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)'},
                                {id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)'},
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        {
                                            id: 'id_6141',
                                            name: 'retinal inner nuclear layer (Rnlo)',
                                            color: 'rgb(149, 0, 64)'
                                        },
                                        {
                                            id: 'id_6142',
                                            name: 'retinal outer nuclear layer (Rnli)',
                                            color: 'rgb(149, 0, 80)'
                                        }
                                    ]
                                },
                                {id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)'},
                                {id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)'},
                                {id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)'},
                                {id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)'},
                                {id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)'},
                                {id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)'},
                                {id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)'}
                            ]
                        },
                        {id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)'},
                        {id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)', checkboxId: 'checkbox_6400'},
                        {id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200'},
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                {id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)'},
                                {id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)'}
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                {id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)'},
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        {
                                            id: 'id_6312',
                                            name: 'lateral semicircular canal (lsc)',
                                            color: 'rgb(255, 255, 255)'
                                        },
                                        {
                                            id: 'id_6313',
                                            name: 'posterior semicircular canal (psc)',
                                            color: 'rgb(255, 255, 255)'
                                        },
                                        {
                                            id: 'id_6314',
                                            name: 'anterior semicircular canal (asc)',
                                            color: 'rgb(255, 255, 255)'
                                        },
                                        {id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)'}
                                    ]
                                }
                            ],
                            checkboxId: 'checkbox_6300'
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        {id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)'},
                        {
                            id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                {
                                    id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        {id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)'}
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                {id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)'},
                                {id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)'},
                                {
                                    id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        {id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)'}
                                    ]
                                },
                                {id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)'}
                            ]
                        },
                        {id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)'}
                    ]),
                    createCategory('id_10000', 'Respiratory', [
                        {id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)'},
                        {
                            id: 'id_12000',
                            name: 'swim bladder (Sb)',
                            color: 'rgb(249, 255, 170)',
                            checkboxId: 'checkbox_12000'
                        }
                    ], 'checkbox_10000'),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf', [])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '35532')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ]
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ]),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300'},
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)', checkboxId: 'checkbox_5400' }
                    ], 'checkbox_5000'),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)', checkboxId: 'checkbox_6120' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' , checkboxId: 'checkbox_6110'},
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ],
                                    checkboxId: 'checkbox_6140'
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)', checkboxId: 'checkbox_6160'},
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)', checkboxId: 'checkbox_6170' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)', checkboxId: 'checkbox_6130' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)', checkboxId: 'checkbox_6190' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)', checkboxId: 'checkbox_6191' }
                            ],
                            checkboxId: 'checkbox_6100'
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)', checkboxId: 'checkbox_6400' },
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)', checkboxId: 'checkbox_6510' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ],
                            checkboxId: 'checkbox_6500'
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ]
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ],
                                    checkboxId: 'checkbox_8140'
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ]
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ], 'checkbox_8000'),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '35536')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ],
                            checkboxId: 'checkbox_1100',
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ], 'checkbox_1000'),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300' },
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)' }
                    ]),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' },
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ],
                                    checkboxId: 'checkbox_6140',
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)', checkboxId: 'checkbox_6160' },
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)', checkboxId: 'checkbox_6170' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ],
                            checkboxId: 'checkbox_6100',
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)' },
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)', checkboxId: 'checkbox_6510' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ],
                            checkboxId: 'checkbox_6500'
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ]
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ],
                                    checkboxId: 'checkbox_8140'
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ],
                            checkboxId: 'checkbox_8100',
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ], 'checkbox_8000'),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '493')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ],
                            checkboxId: 'checkbox_1100'
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ], 'checkbox_1000'),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300'},
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)', checkboxId: 'checkbox_5400' }
                    ], 'checkbox_5000'),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' },
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ]
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)' },
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ]
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)', checkboxId: 'checkbox_6400' },
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ]
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)', checkboxId: 'checkbox_8110' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ]
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ], 'checkbox_8000'),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '496')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ],
                            checkboxId: 'checkbox_1100'
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ], 'checkbox_1000'),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)', checkboxId: 'checkbox_2200' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300'},
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)', checkboxId: 'checkbox_5400' }
                    ], 'checkbox_5000'),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' },
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ]
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)' },
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ],
                            checkboxId: 'checkbox_6100'
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)', checkboxId: 'checkbox_6400' },
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ],
                            checkboxId: 'checkbox_6500'
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ]
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)', checkboxId: 'checkbox_8110' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ],
                            checkboxId: 'checkbox_8100'
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ], 'checkbox_8000'),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '494')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ]
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ]),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300'},
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)', checkboxId: 'checkbox_5400' }
                    ], 'checkbox_5000'),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)', checkboxId: 'checkbox_6120' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' , checkboxId: 'checkbox_6110'},
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ],
                                    checkboxId: 'checkbox_6140'
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)', checkboxId: 'checkbox_6160'},
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)', checkboxId: 'checkbox_6170' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)', checkboxId: 'checkbox_6130' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ],
                            checkboxId: 'checkbox_6100'
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)', checkboxId: 'checkbox_6600' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)', checkboxId: 'checkbox_6400' },
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ],
                            checkboxId: 'checkbox_6300'
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ]
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ]),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '282')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ]
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ]),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)' },
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ]),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)' }
                    ]),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' },
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ]
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)' },
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ]
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)' },
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ]
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ]
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ]),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '285')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ]
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ]),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)' },
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ]),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)' }
                    ]),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)', checkboxId: 'checkbox_6120'},
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)', checkboxId: 'checkbox_6110'},
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)', checkboxId: 'checkbox_6111' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ],
                                    checkboxId: 'checkbox_6140'
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)', checkboxId: 'checkbox_6160'},
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)', checkboxId: 'checkbox_6170'},
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)', checkboxId: 'checkbox_6130'},
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ],
                            checkboxId: 'checkbox_6100'
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)' },
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ]
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)', checkboxId: 'checkbox_8110' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ],
                            checkboxId: 'checkbox_8100'
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ], 'checkbox_8000'),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '291')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)', checkboxId: 'checkbox_1120'},
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)', checkboxId: 'checkbox_1130'}
                            ],
                            checkboxId: 'checkbox_1100'
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ], 'checkbox_1000'),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)', checkboxId: 'checkbox_2100'},
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300'},
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)' }
                    ]),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' },
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ]
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)' },
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ]
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)', checkboxId: 'checkbox_6400'},
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ],
                            checkboxId: 'checkbox_6300'
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ]
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ]),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '293')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)', checkboxId: 'checkbox_1120'},
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)', checkboxId: 'checkbox_1130'}
                            ],
                            checkboxId: 'checkbox_1100'
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ], 'checkbox_1000'),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)', checkboxId: 'checkbox_2100'},
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)', checkboxId: 'checkbox_2300'},
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ]
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ]),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)' }
                    ]),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' },
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ]
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)' },
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ]
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)' },
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)', checkboxId: 'checkbox_6400'},
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)', checkboxId: 'checkbox_6200' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)', checkboxId: 'checkbox_6311' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ],
                            checkboxId: 'checkbox_6300'
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ]
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ]),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
} else if (slideId == '306')
{
    document.addEventListener('DOMContentLoaded', function() {
        const labelPane2 = document.getElementById('label_pane2');
        const categories = [
            createTitle('id_0', 'Annotation', [
                    createCategory('id_1000', 'Circulatory', [
                        {
                            id: 'id_1100',
                            name: 'heart (Ht)',
                            color: 'rgb(255, 0, 204)',
                            items: [
                                { id: 'id_1120', name: 'atrium (At)', color: 'rgb(255, 0, 238)' },
                                { id: 'id_1110', name: 'bulbus arteriosus (Ba)', color: 'rgb(255, 0, 171)' },
                                { id: 'id_1130', name: 'ventricle (Vt)', color: 'rgb(255, 0, 170)' }
                            ]
                        },
                        { id: 'id_1200', name: 'central cardinal vein(common cardinal vein) (Cen)', color: 'rgb(255, 0, 187)' }
                    ]),
                    createCategory('id_2000', 'Digestive', [
                        { id: 'id_2100', name: 'esophagus (Eso)', color: 'rgb(116, 255, 127)' },
                        { id: 'id_2200', name: 'intestine (Int)', color: 'rgb(200, 255, 180)', checkboxId: 'checkbox_2200' },
                        { id: 'id_2300', name: 'yolk (Yo)', color: 'rgb(142, 255, 153)' },
                        { id: 'id_2400', name: 'liver (Liv)', color: 'rgb(142, 255, 138)' },
                        { id: 'id_2500', name: 'pancreas (Pac)', color: 'rgb(142, 255, 0)' }
                    ], 'checkbox_2000'),
                    createCategory('id_3000', 'Excretory', [
                        {
                            id: 'id_3100',
                            name: 'pronephros (Pnp)',
                            color: 'rgb(148, 231, 255)',
                            items: [
                                { id: 'id_3110', name: 'pronephric duct (Pnpd)', color: 'rgb(148, 231, 221)' }
                            ],
                            checkboxId: 'checkbox_3100'
                        },
                        { id: 'id_3200', name: 'kidney (Kid)', color: 'rgb(145, 231, 255)' }
                    ], 'checkbox_3000'),
                    createCategory('id_4000', 'Locomotive, Osmoregulation', [
                        { id: 'id_4200', name: 'caudal fin (Cf)', color: 'rgb(233, 91, 32)' },
                        { id: 'id_4100', name: 'pectoral fin (Pf)', color: 'rgb(233, 91, 0)' }
                    ]),
                    createCategory('id_5000', 'Muscular', [
                        { id: 'id_5100', name: 'cephalic musculature (Cm)', color: 'rgb(31, 0, 212)' },
                        { id: 'id_5200', name: 'pharyngeal musculature (Pm)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_5210', name: 'sternohyoid (Ster)', color: 'rgb(31, 0, 217)' },
                        { id: 'id_5300', name: 'trunk musculature (Tm)', color: 'rgb(31, 0, 214)' },
                        { id: 'id_5400', name: 'somitic muscle (Sm)', color: 'rgb(31, 0, 215)', checkboxId: 'checkbox_5400'}
                    ], 'checkbox_5000'),
                    createCategory('id_6000', 'Nervous, Sensory and Vision', [
                        {
                            id: 'id_6100',
                            name: 'eye (Eye)',
                            color: 'rgb(255, 0, 0)',
                            items : [
                                { id: 'id_6120', name: 'retinal ganglion cell layer (Rgl)', color: 'rgb(159, 0, 136)' },
                                { id: 'id_6110', name: 'lens (Len)', color: 'rgb(159, 0, 0)' },
                                { id: 'id_6111', name: 'cornea (Cor)', color: 'rgb(255, 0, 128)' },
                                {
                                    id: 'id_6140',
                                    name: 'retinal nuclear layers (Rnl)',
                                    color: 'rgb(159, 0, 72)',
                                    items: [
                                        { id: 'id_6141', name: 'retinal inner nuclear layer (Rnlo)', color: 'rgb(149, 0, 64)' },
                                        { id: 'id_6142', name: 'retinal outer nuclear layer (Rnli)', color: 'rgb(149, 0, 80)' }
                                    ]
                                },
                                { id: 'id_6160', name: 'retinal photoreceptor layer (Rph)', color: 'rgb(149, 0, 40)' },
                                { id: 'id_6170', name: 'retinal pigmented epithelium (Rpe)', color: 'rgb(159, 0, 8)' },
                                { id: 'id_6130', name: 'retinal inner plexiform layer (Rip)', color: 'rgb(159, 0, 104)' },
                                { id: 'id_6150', name: 'retinal outer plexiform layer (Rop)', color: 'rgb(159, 0, 114)' },
                                { id: 'id_6180', name: 'optic choroid (Oc)', color: 'rgb(148, 0, 96)' },
                                { id: 'id_6190', name: 'optic nerve head (Onh)', color: 'rgb(244, 0, 34)' },
                                { id: 'id_6191', name: 'optic chiasm (Och)', color: 'rgb(244, 0, 42)' }
                            ]
                        },
                        { id: 'id_6600', name: 'spinal cord (Sc)', color: 'rgb(180, 0, 42)', checkboxId: 'checkbox_6600'},
                        { id: 'id_6400', name: 'notochord (Not)', color: 'rgb(180, 0, 10)',checkboxId: 'checkbox_6400'},
                        { id: 'id_6200', name: 'brain (Br)', color: 'rgb(255, 10, 17)' },
                        {
                            id: 'id_6500',
                            name: 'naris (Nar)',
                            color: 'rgb(255, 16, 80)',
                            items: [
                                { id: 'id_6510', name: 'olfactory pit (Op)', color: 'rgb(255, 16, 0)' },
                                { id: 'id_6520', name: 'olfactory epithelium (Ole)', color: 'rgb(255, 17, 0)' }
                            ]
                        },
                        {
                            id: 'id_6300',
                            name: 'inner ear (Ie)',
                            color: 'rgb(180, 0, 13)',
                            items: [
                                { id: 'id_6311', name: 'otolith (Oth)', color: 'rgb(180, 0, 15)' },
                                {
                                    id: 'id_6310',
                                    name: 'semicircular canal (ssc)',
                                    color: 'rgb(255, 255, 255)',
                                    items: [
                                        { id: 'id_6312', name: 'lateral semicircular canal (lsc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6313', name: 'posterior semicircular canal (psc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6314', name: 'anterior semicircular canal (asc)', color: 'rgb(255, 255, 255)' },
                                        { id: 'id_6315', name: 'otic sensory epithelium (Ose)', color: 'rgb(255, 0, 7)' }
                                    ]
                                }
                            ]
                        }
                    ], 'checkbox_6000'),
                    createCategory('id_8000', 'Skeletal', [
                        { id: 'id_8400', name: 'epiphysis (ep)', color: 'rgb(255, 255, 255)' },
                        { id: 'id_8300',
                            name: 'postcranial axial skeleton (Pas)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8310', name: 'vertebra (vert)', color: 'rgb(180, 0, 109)', items: [
                                        { id: 'id_8311', name: 'vertebral body (verb)', color: 'rgb(180, 0, 106)' }
                                    ]
                                }
                            ] },
                        { id: 'id_8100',
                            name: 'cranium (cr)',
                            color: 'rgb(255, 255, 255)',
                            items: [
                                { id: 'id_8110', name: 'chondrocranium (Cho)', color: 'rgb(0, 170, 41)' },
                                { id: 'id_8130', name: 'neurocranium (Nec)', color: 'rgb(0, 170, 153)' },
                                { id: 'id_8140',
                                    name: 'splanchnocranium (Spc)',
                                    color: 'rgb(0, 170, 128)',
                                    items: [
                                        { id: 'id_8141', name: 'pharyngeal (Ps)', color: 'rgb(0, 170, 73)' }
                                    ]
                                },
                                { id: 'id_8120', name: 'dermatocranium (Dec)', color: 'rgb(0, 170, 57)' }
                            ]
                        },
                        { id: 'id_8200', name: 'paired fin skeleton (pfs)', color: 'rgb(255, 255, 255)' }
                    ]),
                    createCategory('id_10000', 'Respiratory', [
                        { id: 'id_11000', name: 'gill (Gil)', color: 'rgb(243, 255, 164)' },
                        { id: 'id_12000', name: 'swim bladder (Sb)', color: 'rgb(249, 255, 170)' }
                    ]),
                ],
                'checkbox_0'),
            createTitle('Metadata', 'Metadata', [
                createCategory('sample_name', '3dpf',[])
            ]),
        ];

        categories.forEach(category => {
            labelPane2.appendChild(category);
        });

        function createTitle(titleId, titleName, categories, checkboxId = null) {
            const titleDiv = document.createElement('div');
            titleDiv.className = 'trunklapse unselectable active'; // Define CSS classes for title styling
            titleDiv.id = titleId;
            titleDiv.style = 'color: rgb(0, 170, 73); background-color: rgba(255, 255, 255, 0.1); border-left: thin solid rgb(0, 170, 73);';

            const anchorTag = document.createElement('a');
            anchorTag.className = 'show';
            anchorTag.onclick = () => toggleVisibility(titleDiv);
            const titleLabel = document.createElement('span');
            titleLabel.style = 'color: rgb(255,255,255);';
            titleLabel.textContent = titleName;
            anchorTag.appendChild(titleLabel);
            titleDiv.appendChild(anchorTag);

            // Handle checkbox creation if checkboxId is provided
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;'; // Ensure some margin for aesthetic spacing
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this title
                    const childCheckboxes = titleDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                    event.stopPropagation();
                });
                anchorTag.appendChild(checkbox); // Append checkbox to the anchor tag for better alignment
            }

            categories.forEach(category => {
                titleDiv.appendChild(category);
            });

            return titleDiv;
        }


        function createCategory(categoryId, categoryName, items, checkboxId = null) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'collapsible unselectable show';
            categoryDiv.id = categoryId;
            categoryDiv.style = 'color: rgb(255, 255, 255); background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            const categoryLink = document.createElement('a');
            categoryLink.className = 'show';
            categoryLink.onclick = () => toggleVisibility(categoryDiv);
            const categoryLabel = document.createElement('span');
            categoryLabel.style = 'color: rgb(255,255,255)';
            categoryLabel.innerHTML = '<u>' + categoryName + '</u>';
            categoryLink.appendChild(categoryLabel);
            categoryDiv.appendChild(categoryLink);

            // Create the checkbox if needed and align it to the right
            if (checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = checkboxId;
                checkbox.className = 'show';
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this category
                    const childCheckboxes = categoryDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                categoryDiv.appendChild(checkbox);
            }

            items.forEach(item => {
                const itemDiv = createItem(item);
                categoryDiv.appendChild(itemDiv);
            });

            return categoryDiv;
        }

        function createItem(item) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'collapsible unselectable'; // Remove 'show' class to hide subcategories by default
            itemDiv.id = item.id;
            itemDiv.style = 'color: ' + item.color + '; background-color: rgba(200, 200, 200, 0.5); border-left: thin solid; padding: 10px 0px 10px 20px;';

            if (item.checkboxId) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = item.checkboxId; // Use item.checkboxId for subcategories
                checkbox.style = 'float: right;';
                checkbox.checked = true;
                checkbox.addEventListener('click', function(event) {
                    // Get all checkboxes within this item
                    const childCheckboxes = itemDiv.querySelectorAll('input[type="checkbox"]');
                    // Set their checked status to match this checkbox
                    childCheckboxes.forEach(childCheckbox => {
                        childCheckbox.checked = checkbox.checked;
                    });
                });
                itemDiv.appendChild(checkbox);
            }

            const itemLink = document.createElement('a');
            itemLink.onclick = () => toggleVisibility(itemDiv);
            const itemLabel = document.createElement('span');
            itemLabel.style = 'color: ' + item.color;
            itemLabel.innerHTML = '<u>' + item.name + '</u>';
            itemLink.appendChild(itemLabel);
            itemDiv.appendChild(itemLink);

            // Check if item has subcategories and create them
            if (item.items && item.items.length > 0) {
                item.items.forEach(subItem => {
                    const subItemDiv = createItem(subItem);
                    itemDiv.appendChild(subItemDiv);
                });
            }

            // Ensure the item is hidden by default
            itemDiv.classList.remove('show');

            return itemDiv;
        }

        function toggleVisibility(element) {
            // Toggle visibility only for direct children that are collapsible
            const childItems = Array.from(element.children).filter(child => child.classList.contains('collapsible'));
            childItems.forEach(item => {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.style.display = 'none';
                } else {
                    item.classList.add('show');
                    item.style.display = ''; // Adjust this as needed, could be 'block' or other depending on CSS
                }
            });
        }
    });
}