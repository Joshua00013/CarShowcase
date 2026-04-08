const carbody = new ThreeSixty(document.getElementById('carbody'), {
    image: [
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_01.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_02.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_03.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_04.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_05.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_06.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_07.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_08.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_09.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_10.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_11.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_12.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_13.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_14.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_15.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_16.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_17.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_18.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_19.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_20.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_21.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_22.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_23.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_24.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_25.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_26.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_27.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_28.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_29.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_30.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_31.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_32.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_33.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_34.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_35.jpg',
        '../images/EXT-GRD_GL-BG_A-BC_Z4Q_36.jpg'
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