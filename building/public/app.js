let link = "houses/slumhouse/scene.gltf";

window.addEventListener('load',()=>{
    // let asset = document.getElementById("scene_asset");
    // let item = document.createElement('a-entity');
    // item.setAttribute('gltf-model', '#slumhouse');
    // item.setAttribute('position', {x:0, y:0.5, z:0});
    // asset.appendChild(item);
    console.log("hellooo");
})

let posX=0;
fetch("/houses")
.then(res => res.json())
.then(data => {
    console.log(data);
    let allHouse = data.data;
    allHouse.forEach((house) => {
        let asset = document.getElementById("scene_asset");
        let item = document.createElement('a-entity');
        let plane = document.createElement('a-plane');
        plane.setAttribute('material', {
            side: 'double',
            color: '#EF2D5E',
            opacity: '0.5',
            transparent: 'true'
        })
        plane.setAttribute('width', '20');
        plane.setAttribute('height', '10');

        let text = document.createElement('a-text');
        text.setAttribute('height', '50');
        text.setAttribute('width', '50');
        text.setAttribute('align', 'center');
        text.setAttribute('position', {x:0, y:0, z:0.5});
        text.setAttribute('value', house.name);

        plane.setAttribute('position', {x:0, y:15, z:10});
        item.setAttribute('gltf-model', house.type);
        item.setAttribute('position', {x:posX, y:0.5, z:0});
        if (house.type =="#slumhouse"){
        //     let asset = document.getElementById("scene_asset");
        //     let item = document.createElement('a-entity');
        //     item.setAttribute('gltf-model', house.type);
        //     item.setAttribute('position', {x:posX, y:0.5, z:0});
        //     asset.appendChild(item);        
            item.setAttribute('scale', {x:1.5, y:1.5, z:1.5});
        }
        else if (house.type == "#hauntedhouse"){
            // let asset = document.getElementById("scene_asset");
            // let item = document.createElement('a-entity');
            // item.setAttribute('gltf-model', house.type);
            // item.setAttribute('position', {x:posX, y:0.5, z:0});
            item.setAttribute('scale', {x:0.2, y:0.2, z:0.2});
            // asset.appendChild(item);      
        }
        else if (house.type == "#bluehouse"){
            item.setAttribute('position', {x:posX, y:3, z:0});
            item.setAttribute('scale', {x:0.02, y:0.02, z:0.02});
            item.setAttribute('rotation', {x:0, y:90, z:0});
        }
        else if (house.type == "#designhouse"){
            let asset = document.getElementById("scene_asset");
            let base = document.createElement('a-box');
            base.setAttribute('position', {x:0, y:0.5, z:40});
            base.setAttribute('scale', {x:10, y:20, z:10})
            base.setAttribute('color', house.house_color);
            
            let roof = document.createElement('a-cone');
            roof.setAttribute('position', {x:0, y:25, z:0});
            roof.setAttribute('scale', {x:10, y:10, z:10})
            roof.setAttribute('color', house.house_color);

            asset.appendChild(base);
            base.appendChild(roof);
        }
        // else if (house.type == "#guesthouse"){
        //     let asset = document.getElementById("scene_asset");
        //     let item = document.createElement('a-entity');
        //     item.setAttribute('gltf-model', house.type);
        //     item.setAttribute('position', {x:posX, y:0.5, z:0});
        //     asset.appendChild(item);      
        // }
        // else if (house.type == "#bluehouse"){
            // let asset = document.getElementById("scene_asset");
            // let item = document.createElement('a-entity');
            // item.setAttribute('gltf-model', house.type);
            // item.setAttribute('position', {x:posX, y:0.5, z:0});
            // asset.appendChild(item);      
        //     item.setAttribute('scale', {x:0.1, y:0.1, z:0.1})
        // }
        asset.appendChild(item);
        item.appendChild(plane);
        plane.appendChild(text);
        posX -= 20;

    });
})
