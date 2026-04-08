const carbody = new ThreeSixty(document.getElementById('carbody'), {
    image: [
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_01.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_02.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_03.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_04.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_05.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_06.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_07.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_08.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_09.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_10.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_11.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_12.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_13.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_14.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_15.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_16.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_17.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_18.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_19.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_20.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_21.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_22.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_23.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_24.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_25.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_26.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_27.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_28.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_29.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_30.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_31.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_32.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_33.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_34.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_35.jpg',
        'demo/public/images/EXT-GRD_GL-BG_A-BC_Z4Q_36.jpg'
    ],
    width: 875,
    height: 525,
    count: 32,
    perRow: 1,
    speed: 100,
    prev: document.getElementById('prev'),
    next: document.getElementById('next')
});

const interiorBtn = document.getElementById('interior-btn');
const exteriorBtn = document.getElementById('exterior-btn');
const viewer = document.getElementById('viewer');
const carbodyEl = document.getElementById('carbody');

interiorBtn.addEventListener('click', () => {
    carbodyEl.style.display = 'none';   // hide carbody
    viewer.style.display = 'block';   // show interior viewer
});

exteriorBtn.addEventListener('click', () => {
    carbodyEl.style.display = 'block';  // show carbody
    viewer.style.display = 'none';    // hide interior viewer
});