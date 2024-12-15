import GUI from "babylonjs-gui";
const { Control, Grid } = GUI;
import { createTxt } from "../createText/createText.js";
export function createRowsOfText(_arrayOfText, _fontS, parentUI) {
    const grid = new Grid("grid");
    const textBlocks = [];
    let size = 1 / _arrayOfText.length;
    _arrayOfText.forEach((txt, indx) => {
        const txtBlock = createTxt(txt, _fontS, "white");
        grid.addRowDefinition(size);
        grid.addControl(txtBlock, indx, 0);
        if (_arrayOfText.length <= 3)
            grid.addRowDefinition(size);
        textBlocks.push(txt);
    });
    parentUI.addControl(grid);
    return { grid, textBlocks };
}
//# sourceMappingURL=createRowsOfText.js.map