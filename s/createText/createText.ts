import GUI from "babylonjs-gui"
const { TextBlock } = GUI
export function createTxt(text: string, fontSize: number, color: string) {
    const textBlock = new TextBlock("textblock", text)
    textBlock.color = color ? color : "white"
    textBlock.fontSize = fontSize ? fontSize : "40px"
    return textBlock
}