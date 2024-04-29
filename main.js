import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/Addons.js';

//crear escena
const scene = new THREE.Scene();

//Crear camara
const camera = new THREE.PerspectiveCamera(
    75 //campo de vision
    ,window.innerWidth/window.innerHeight //relacion de aspécto
    ,0.1,//plano de recorte Cerca
    1000 //plano de recorte Lejos
    )

scene.add(camera);
camera.position.z = 10;
camera.position.y = -2;


//crear el render
const renderer = new THREE.WebGLRenderer({antialias:false});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(0xffffff,1)//background color
document.body.appendChild(renderer.domElement); //agregamos el Renderer a HTML como dom element





//agregamos textura al piso

const floorTexture = new THREE.TextureLoader().load('img/floor2.jpg' )


//creamos el piso
let planeGeometry = new THREE.BoxGeometry(55,70,0.001);
let planeMaterial = new THREE.MeshBasicMaterial({map:floorTexture});

let floorPlane = new THREE.Mesh(planeGeometry,planeMaterial);


floorPlane.rotation.x = Math.PI/2;
// floorPlane.position.y = -Math.PI ;
floorPlane.position.y = -10;
floorPlane.position.x = -1

scene.add(floorPlane);


//creamos las paredes
let wallGroup = new THREE.Group();
scene.add(wallGroup);

//pared del frente
const frontWallTexture = new THREE.TextureLoader().load('img/paredVieja.jpg' )

const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry(50,20,0.001),
    new THREE.MeshBasicMaterial({map: frontWallTexture})
);

frontWall.position.z = -20;


//pared de ATRAS
const backWallTexture = new THREE.TextureLoader().load('img/paredVieja.jpg' )

const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(50,20,0.001),
    new THREE.MeshBasicMaterial({map:backWallTexture})
);

backWall.position.z = 30;



//pared de la izquierda
const leftWallTexture = new THREE.TextureLoader().load('img/paredVieja.jpg' )

const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(70,16,0.001),
    new THREE.MeshBasicMaterial({map:leftWallTexture})
);

leftWall.rotation.y = Math.PI / 2 ; // esto rota la pared 90 grados, ya que PI / 2 es 90
leftWall.position.x = -25;
leftWall.position.y = -3;


//pared derecha
const rightWallTexture = new THREE.TextureLoader().load('img/paredVieja.jpg' )
const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(70,20,0.001),
    new THREE.MeshBasicMaterial({map:rightWallTexture})

)


rightWall.rotation.y = Math.PI / 2;
rightWall.position.x = 25

wallGroup.add(frontWall,leftWall,rightWall,backWall);




//creando el techo
const cellingTexture = new THREE.TextureLoader().load('./img/techo.jpg');


const cellingGeometry = new THREE.PlaneGeometry(50,70);
const cellingMaterial = new THREE.MeshBasicMaterial({map:cellingTexture});
const cellingPlane = new THREE.Mesh(cellingGeometry,cellingMaterial);


cellingPlane.rotation.x = Math.PI / 2;
cellingPlane.position.y = 5;

scene.add(cellingPlane)




//funcion para crear cuadros
// function createPaintings(imageUrl,width,height,position){
//     //...
//     const textureLoader = new THREE.TextureLoader();
//     const paintingTexture = textureLoader.load(imageUrl)
//     const paintingMaterial = new THREE.MeshBasicMaterial({map:paintingTexture});
//     const paintingGeometry = new THREE.PlaneGeometry(width,height);
//     const painting = new THREE.Mesh(paintingGeometry,paintingMaterial);
//     painting.position.set(position.x,position.y,position.z);
//     return painting;
// }

//-------------------------------Datos de los cuadros----------------------------------------

const paintingData = [
  // Front Wall
  ...Array.from({ length: 1 }, (_, i) => ({
      imgSrc: `./artworks/1.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
      width: 5, // width of the painting
      height: 3, // height of the painting
      position: { x: 10 , y: -2, z: -19.5 }, // position of the painting
      rotationY: 0, // rotation of the painting
      info: { 
      title: `Kendrick Lamar`,
      pais: 'Compton, California, Estados Unidos',
      discografia:'DAMN(2017) - Mr. Morale & The Big Steppers(2022)- To Pimp a Butterfly(2015) - good kid, m.A.A.d city(2012)'
      }
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/2.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -10 , y: -2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: { 
      title: `Travis Scott`,
      pais: 'Houston, Texas, Estados Unidos',
      discografia: 'Utopia(2023) -JackBoys(2019) -Astroworld(2018) -Birds in the trap sing McKnight(2016) -Rodeo(2015)-'
    }
})),
  // Back Wall
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/8.jpg`,
    width: 5,
    height: 3,
    position: { x: -10 , y: -2, z: 29.5 },
    rotationY: Math.PI,
    info: {
      title: `Kanye West`,
      pais: 'Atlanta, Georgia, Estados Unidos',
      discografia: "Vultures 1 (2024) - Donda 2(2022) - Donda(2021) - Jesus is King(2019) - The life of Pablo(2016) - Yeezus(2013) My beautiful dark twisted fantasy(2010) - 808s & Heartbreak(2008) - Graduation(2007) - Late Registration(2005) The College Dropout(2005)"
    },
  })),
    ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/7.jpeg`,
    width: 5,
    height: 3,
    position: { x: 10 , y: -2, z: 29.5 },
    rotationY: Math.PI,
    info: {
      title: `Eminem`,
      pais: 'St. Joseph, Misuri, Estados Unidos',
      discografia: "The Eminem Show(2002) -Recovery(2017)- The Slim Shady LP(1999) -Kamikaze(2018) -Revival(2017) -Encore(2004)"
    },
  })),
  // Left Wall........................
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/3.jpg`,
    width: 5,
    height: 3,
    position: { x: -24.5, y: -2, z: -10 },
    rotationY: Math.PI / 2,
    info: {
      title: `JCOLE`,
      pais: 'Fráncfort del Meno, Alemania',
      discografia: "Might delete later(2024) - The off-season(2021) - Revenge of the dreamers III(2019) -4 your eyez only(2016)"
    },
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/4.jpg`,
    width: 5,
    height: 3,
    position: { x: -24.5, y: -2, z: 0 },
    rotationY: Math.PI / 2,
    info: {
      title: `Drake`,
      pais: 'Toronto, Canadá',
      discografia: "For all the dogs(2023) -Her loss - con 21 Savage(2022) -Honestly nevermind(2022) -Certified lover boy(2021) Dark Lane demo tapes(2020) -Scorpion(2018) -More life(2017) "
    },
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/5.jpg`,
    width: 5,
    height: 3,
    position: { x: -24.5, y: -2, z: 10 },
    rotationY: Math.PI / 2,
    info: {
      title: `21 Savage`,
      pais: 'Newham University Hospital, Londres, Reino Unido',
      discografia: "american dream(2024) -Her Loss(2022) Savage Mode II(2020) Savage Mode(2016) Issa Album(2017)"
    },
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/6.jpg`,
    width: 5,
    height: 3,
    position: { x: -24.5, y: -2, z: 20 },
    rotationY: Math.PI / 2,
    info: {
      title: `Duki`,
      pais: 'Almagro, Buenos Aires',
      discografia: "Antes de Ameri(2023) -Temporada de Reggeatón 2(2022) -Temporada de Reggeatón(2021) -Desde el Fin del Mundo(2021) -Súper Sangre Joven(2019)"
    },
  })),
  // Right Wall........................
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/9.jpg`,
    width: 5,
    height: 3,
    position: { x: 24.5, y: -2, z: -10  },
    rotationY: -Math.PI / 2,
    info: {
      title: `Post Malone `,
      pais: `Siracusa, Nueva York, Estados Unidos`,
      discografia: 'Austin(2023) -Twelve carat toothache(2022) -Hollywoods bleeding(2019  )',
    },
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/10.jpg`,
    width: 5,
    height: 3,
    position: { x: 24.5, y: -2, z: 0 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Ysy a `,
      pais: `Villa Crespo,Buenos Aires`,
      discografia: 'After del after(2023) - Ysismo(2022) -Trap de verdad(2021) -Mordiendo el Bozal(2020) -Hecho a mano(2019) -Antezana(2018)',
    },
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/11.jpg`,
    width: 5,
    height: 3,
    position: { x: 24.5, y: -2, z: 10 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Offset `,
      pais: `Lawrenceville, Georgia, Estados Unidos`,
      discografia: 'Set it off(2023) - Father of 4(2019)',
    },
  })),
  ...Array.from({ length: 1 }, (_, i) => ({
    imgSrc: `artworks/13.jpg`,
    width: 5,
    height: 3,
    position: { x: 24.5, y: -2, z: 20},
    rotationY: -Math.PI / 2,
    info: {
      title: `Lil Wayne `,
      pais: `Nueva Orleans, Luisiana, Estados Unidos`,
      discografia: 'Funeral(2020) -Tha Carter V(2018) - Rebirth(2010) -Tha Carter III(2008)',
    },
  })),
];

//Funcion crear cuaros NUEVAA......

function createPaintings(textureLoader) {

  let paintings = [];
  paintingData.forEach((data) => {

    const painting = new THREE.Mesh( 
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshBasicMaterial({ map: textureLoader.load(data.imgSrc) })
    );

    painting.position.set(data.position.x, data.position.y, data.position.z);
    painting.rotation.y = data.rotationY;


    painting.userData = {
      type: 'painting',
      info: data.info,
      url: data.info.link
    };

    painting.castShadow = true;
    painting.receiveShadow = true;

    paintings.push(painting);
  });

  return paintings;
}


const textureLoader = new THREE.TextureLoader();

const paintings = createPaintings(textureLoader);
paintings.forEach(painting => scene.add(painting));



// const painting1 = createPaintings("./cuadros/1.jpg",10,5,new THREE.Vector3(-10,-2,-19));

// const painting2 = createPaintings("./cuadros/2.jpg",10,5,new THREE.Vector3(10,-2,-19));

// const painting3 = createPaintings("./cuadros/3.jpg",8,5,new THREE.Vector3(-24,-2,-5));
// painting3.rotation.y = Math.PI / 2;

// const painting4 = createPaintings("./cuadros/4.jpg",8,5,new THREE.Vector3(-24,-2,15));
// painting4.rotation.y = Math.PI / 2;

// const painting5 = createPaintings("./cuadros/5.jpg",8,5,new THREE.Vector3(24,-2,-5));
// painting5.rotation.y = -Math.PI / 2;


// const painting6 = createPaintings("./cuadros/6.jpg",8,5,new THREE.Vector3(24,-2,15));
// painting6.rotation.y = -Math.PI / 2;


// const painting7 = createPaintings("./cuadros/8.jpg",8,5,new THREE.Vector3(-10,-2,29));
// painting7.rotation.y = (Math.PI / 2) * 2;

// const painting8 = createPaintings("./cuadros/7.jpeg",8,5,new THREE.Vector3(10,-2,29));
// painting8.rotation.y = (Math.PI / 2) * 2;

// scene.add(painting1,painting2,painting3,painting4,painting5,painting6,painting7,painting8);



//FUNCION que crea bounding box
// los Bounding box son la cajas delimitadoras, tenemos que agregarlas a las paredes y a la camara para saber
// cuando se intersectan
function createBoundingBox(objects){
  if (!Array.isArray(objects)) { // preguntamos si no es un array pra saber si es un Group
    objects = objects.children;
  }

  objects.forEach((object) => { // seleccionamos cada pared
    object.BoundingBox = new THREE.Box3(); // creamos un boundingBox para cada pared
    object.BoundingBox.setFromObject(object); // cambiamos el boundingBox de la pared
  });
}

createBoundingBox(wallGroup);




//-------------- Colisionador---------------------------------------------
  function checkCollision(){
    const playerBoundingBox = new THREE.Box3(); // create a bounding box for the player
    const cameraWorldPosition = new THREE.Vector3(); // create a vector to hold the camera's world position
    camera.getWorldPosition(cameraWorldPosition); // get the camera's world position and store it in cameraWorldPosition. Note: The camera represents the player's position in our case.
    playerBoundingBox.setFromCenterAndSize(
    // set the playerBoundingBox to the camera's world position and size. The size is 1, 1, 1 because the camera is a single point.
    // setFromCenterAndSize takes two parameters: center and size. The center is a Vector3 that represents the center of the bounding box. The size is a Vector3 that represents the size of the bounding box. The size is the distance from the center to the edge of the bounding box in each direction. So, if the size is 1, 1, 1, the bounding box will be 2 units wide, 2 units tall, and 2 units deep. If the size is 2, 2, 2, the bounding box will be 4 units wide, 4 units tall, and 4 units deep.
    cameraWorldPosition, // center
    new THREE.Vector3(1,1,1) // size
    );



    for (let i = 0; i < wallGroup.children.length; i++) {
      // loop through each wall
      const wall = wallGroup.children[i]; // get the wall

      if(playerBoundingBox.intersectsBox(wall.BoundingBox)) {
      // check if the playerBoundingBox intersects with the wall's bounding box. If it does, return true.
        return true;
      }
    }

    return false; // if the playerBoundingBox doesn't intersect with any of the walls, return false.
  };




//craeamos la logica de contoles

const controls = new PointerLockControls(camera,document.body)


// activar controles y ocultar menu
function startExperience(){
    //bloquear puntero
    controls.lock();//bloquea los controles

    // ocultar menu
    hideMenu();


}

const playButton = document.getElementById("play_button");
playButton.addEventListener('click',startExperience);



//ocultar menu
function hideMenu(){
    const menu = document.getElementById("menu");
    menu.style.display = 'none'
}


//mostrar menu
function showMenu(){
    const menu = document.getElementById("menu");
    menu.style.display = 'block'
}


controls.addEventListener('unlock',showMenu);

//Informacion de cuadros

function displayPaintingInfo (info){
  const infoElement = document.getElementById('painting-info'); // Get the reference

  // Set the html content inside info element
  infoElement.innerHTML = `
    <h3>${info.title}</h3>
    <p>Pais: ${info.pais}</p>
    <p>Discografia: ${info.discografia}</p>
    
  `;
  infoElement.classList.add('show'); // Add the 'show' class
};

// Hide painting info in the DOM
function hidePaintingInfo (){
  const infoElement = document.getElementById('painting-info'); // Get the reference
  infoElement.classList.remove('show'); // Remove the 'show' class
};


  //--------------------------------------NUEVO MOVEMENT -------------------------------------------------

  //event Listener
  const keysPressed = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    w: false,
    a: false,
    s: false,
    d: false,
  };

document.addEventListener(
  'keydown',
  (event) =>{
    if(event.key in keysPressed){
      keysPressed[event.key] = true;
    }
  },
  false
);


document.addEventListener(
    'keyup',
    (event) => {
      if (event.key in keysPressed){
        keysPressed[event.key] = false
      }
    },
    false
  );

  const clock = new THREE.Clock();

  function updateMovement(delta){
    const moveSpeed = 8 * delta;

    const previousPosition = camera.position.clone();

    if (keysPressed.ArrowRight || keysPressed.d) {
      controls.moveRight(moveSpeed);
    }
    if (keysPressed.ArrowLeft || keysPressed.a) {
      controls.moveRight(-moveSpeed);
    }
    if (keysPressed.ArrowUp || keysPressed.w) {
      controls.moveForward(moveSpeed);
    }
    if (keysPressed.ArrowDown || keysPressed.s) {
      controls.moveForward(-moveSpeed);
    }


    if(checkCollision()){
      camera.position.copy(previousPosition);
    }
  };


  //Datos de los cuadros
   // Front Wall




//Animacion
let render = function(){

   // informacion de los cuardros
    const distanceThreshold = 8;

    let paintingToShow;
    paintings.forEach((painting) => {
      const distanceToPainting = camera.position.distanceTo(painting.position);
      if (distanceToPainting < distanceThreshold) {
        paintingToShow = painting;
      }
    });

    if (paintingToShow) {
      // if there is a painting to show
      displayPaintingInfo(paintingToShow.userData.info);
    } else {
      hidePaintingInfo();
    }

    const delta = clock.getDelta();
    updateMovement(delta);
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}

render();