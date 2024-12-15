import GUI from "babylonjs-gui";
const { Rectangle } = GUI;
export function createRect(_childUI, _defWidthInNum, _defHeightInNum, _ADTexture, _cornerRadius, _background) {
    const rect = new Rectangle("rectangle");
    let width = _defWidthInNum ? _defWidthInNum : .8;
    let height = _defHeightInNum ? _defHeightInNum : .5;
    let defBackgroundC = "#27282a";
    if (_childUI) {
        if (_childUI.length) {
            _childUI.forEach(chld => rect.addControl(chld));
        }
        else {
            rect.addControl(_childUI);
        }
    }
    rect.width = width;
    rect.height = height;
    rect.background = _background ? _background : defBackgroundC;
    rect.cornerRadius = _cornerRadius ? _cornerRadius : 3;
    if (_ADTexture)
        _ADTexture.addControl(rect);
    return rect;
}
//# sourceMappingURL=createRect.js.map