/**
 * Create a container for the container for useLayer hook.
 * If the document is available, it will return the element with the id "outlet".
 * If the element is not found, create a new div element with the id "outlet"
 * and append it to the body.
 */
export function createUseLayerContainer() {
  if (typeof document !== "undefined") {
    const container = document.getElementById("outlet");
    if (container) {
      return container;
    } else {
      const outlet = document.createElement("div");
      outlet.setAttribute("id", "outlet");
      outlet.setAttribute("class", "outlet");
      document.body.appendChild(outlet);
      return outlet;
    }
  } else {
    return undefined;
  }
}
