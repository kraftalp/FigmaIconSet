figma.showUI(__html__, { width: 320, height: 500 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'insert-icon') {
    const node = figma.createNodeFromSvg(msg.svg);
    node.x = figma.viewport.center.x;
    node.y = figma.viewport.center.y;
    figma.currentPage.appendChild(node);
    figma.viewport.scrollAndZoomIntoView([node]);
  }
};