import GUI from "babylonjs-gui";
const { AdvancedDynamicTexture, Control, Button } = GUI;
export function createBtn(btnLabel, parent, buttonImgPath, width, height, fontSize, fontColor, background) {
    let btn = Button.CreateImageButton("button", btnLabel, buttonImgPath);
    let defWidth = .6;
    let defBackgroundC = "#27282a";
    btn.width = width ? width : defWidth;
    btn.height = height ? height : defWidth / 1.5;
    btn.fontSize = fontSize ? fontSize : (defWidth * 90);
    btn.background = background ? background : defBackgroundC;
    btn.color = "white";
    if (parent)
        parent.addControl(btn);
    return btn;
}
//# sourceMappingURL=createButton.js.map