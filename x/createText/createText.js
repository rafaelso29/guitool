import GUI from "babylonjs-gui";
const { TextBlock } = GUI;
export function createTxt(text, fontSize, color) {
    const textBlock = new TextBlock("textblock", text);
    textBlock.color = color ? color : "white";
    textBlock.fontSize = fontSize ? fontSize : "40px";
    return textBlock;
}
//# sourceMappingURL=createText.js.map