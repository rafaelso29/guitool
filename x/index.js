export * from "./createButton/createButton.js";
export * from "./createText/createText.js";
export * from "./createRect/createRect.js";
export * from "./createGrid/createGrid.js";
export * from "./specials/createRowsOfText.js";
// import { log } from "./logger.js";
// const {MeshBuilder, Vector3, GUI} = BABYLON 
// const log = console.log;
// let G;
// let ADT // advancedDynamic Texture FullScreenUI
// let GBtn
// let GText
// let Ggrid
// let GRect
// let GCheckBx
// export function bylonUIInit() {
//     G = BABYLON.GUI
//     GBtn = G.Button
//     GText = G.TextBlock
//     Ggrid = G.Grid
//     GRect = G.Rectangle
//     GCheckBx = G.Checkbox
//     // if (!ADT) ADT = G.AdvancedDynamicTexture("ADT_GUI")
// }
// export function createCheckBox(_label, _ADTexture, _isChecked, _callBWhenValueChanged, _bxSize, _fontS, _background, _isBxPositionLeft) {
//     // let checkBx = new GUI.Checkbox.AddCheckBoxWithHeader("checkbox: ", _callBWhenValueChanged)
//     const checkBx = new GCheckBx("checkbox")
//     checkBx.isChecked = _isChecked
//     // checkBx.onIsCheckedChangedObservable.add(_callBWhenValueChanged)
//     const header = GUI.Checkbox.AddHeader(checkBx, _label, _fontS ? _fontS : "100px", {
//         isHorizontal: true, controlFirst: _isBxPositionLeft
//     })
//     let defSize = "25px"
//     let defBackgroundC = "#27282a";
//     header.color = "red"
//     checkBx.width = _bxSize ? _bxSize : defSize
//     checkBx.height = _bxSize ? _bxSize : defSize
//     checkBx.color = "white"
//     checkBx.background = _background ? _background : defBackgroundC
//     if (_ADTexture) {
//         _ADTexture.addControl(checkBx)
//         _ADTexture.addControl(header)
//     }
//     return { checkBx, header }
// }
// export function createGuiImg(imageName, _imgUrl){
//     const image = new BABYLON.GUI.Image(imageName, _imgUrl); // Replace with your image URL
//     image.width = .5
//     image.height = .5
//     // image.width = "200px";  // Width of the image
//     // image.height = "200px"; // Height of the image
//     return image        
// }
// // VR Related
// export function createButtonForHand(buttonLabel, parentMesh, scene, toCollide, callbackWhenPressed){
//     const btnBackGroundColor = "#242424"
//     const btnMesh = MeshBuilder.CreatePlane(`button`,{width: 5, height: 5},scene);
//     const collisionBx = MeshBuilder.CreateBox("asd", { size: .4, width: 1.5}, scene)
//     collisionBx.parent = btnMesh
//     collisionBx.isVisible = false
//     // btnMesh.billboardMode = Mesh.BILLBOARDMODE_ALL;
//     const texture = GUI.AdvancedDynamicTexture.CreateForMesh(btnMesh);
//     const btn = GBtn.CreateSimpleButton(`btn`, buttonLabel);
//     btn.height =  .1;
//     btn.width =  .25
//     btn.color = "white";
//     btn.fontSize = "50px";
//     btn.thickness = 4
//     btn.background = btnBackGroundColor
//     texture.addControl(btn);
//     if(parentMesh) btnMesh.parent = parentMesh
//     // btn.onPointerUpObservable.add(() => {
//     //     console.log("Button clicked!");
//     // });
//     if(toCollide){
//         collisionBx.actionManager = new BABYLON.ActionManager(scene)
//         collisionBx.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
//             {
//                 trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
//                 parameter: toCollide
//             }, e => {
//                 if(callbackWhenPressed) callbackWhenPressed()
//                 btn.background = "gray";
//             }
//         ))
//         collisionBx.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
//             {
//                 trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
//                 parameter: toCollide
//             }, e => {
//                 btn.background = btnBackGroundColor
//             }
//         ))
//     }
//     return btnMesh
// }
//# sourceMappingURL=index.js.map