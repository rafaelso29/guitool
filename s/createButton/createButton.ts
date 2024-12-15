import GUI from "babylonjs-gui"
const { Rectangle, Control, Image, Button } = GUI

import { ADTextureOrParentUI } from "../types.js"

export function createBtn(
    btnLabel: string, 
    parent: ADTextureOrParentUI | false, 
    buttonImgPath: string | false | any, 
    width: number | false, 
    height: number | string | false, 
    fontSize: number | string | false, 
    fontColor: string | false, 
    background: string | false) 
    {
    let btn = Button.CreateImageButton("button", btnLabel, buttonImgPath)

    let defWidth = .6
    let defBackgroundC = "#27282a";

    btn.width = width ? width : defWidth
    btn.height = height ? height : defWidth / 1.5
    btn.fontSize = fontSize ? fontSize : (defWidth * 90)
    btn.background = background ? background : defBackgroundC
    btn.color = "white"

    if (parent) (parent as any).addControl(btn)
    return btn
}

export function createButtonImage(pathToImage: string, widthInPx: string, heightInPx: string, callBackWhenPressed: any){

    const buttonImage = new Image("micButton", pathToImage);
    buttonImage.stretch = Image.STRETCH_UNIFORM;
    buttonImage.width = widthInPx ? widthInPx : "40px";  // Adjust size as needed
    buttonImage.height = heightInPx ? heightInPx : "40px"; // Adjust size as needed

    // Create a simple rectangular button
    const rectangle = new Rectangle("cameraButton");
    rectangle.addControl(buttonImage);
    rectangle.width = "60px";
    rectangle.height = "60px";
    rectangle.thickness = 2;
    // cameraButton.background = "red";
    rectangle.color = "black";
    rectangle.cornerRadius = 5;
    rectangle.isPointerBlocker = true;
    // rectangle.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
    // rectangle.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
    // rectangle.left = "-50px";
    // rectangle.top = "-50px";

    if(callBackWhenPressed){
        rectangle.onPointerDownObservable.add(function () {
            callBackWhenPressed()
        });
    }
    return { buttonImage, rectangle}
}