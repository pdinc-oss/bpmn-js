/**
 * BPMN 2.0 specific key bindings.
 *
 * @param {Keyboard} keyboard
 * @param {EditorActions} editorActions
 */
export default function BpmnKeyBindings(keyboard, editorActions) {

  keyboard.addListener(selectAll);
  keyboard.addListener(find);
  keyboard.addListener(spaceTool);
  keyboard.addListener(lassoTool);
  keyboard.addListener(handTool);
  keyboard.addListener(globalConnectTool);
  keyboard.addListener(directEditing);


  // ctrl + a -> select all elements
  function selectAll(context) {

    var event = context.event;

    if (isKeyIn(['a', 'A'], event) && keyboard.isCmd(event)) {
      editorActions.trigger('selectElements');

      return true;
    }
  }

  // ctrl + f -> search labels
  function find(context) {

    var event = context.event;

    if (isKeyIn(['f', 'F'], event) && keyboard.isCmd(event)) {
      editorActions.trigger('find');

      return true;
    }
  }

  // s -> activate space tool
  function spaceTool(context) {

    var event = context.event;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (isKeyIn(['s', 'S'], event)) {
      editorActions.trigger('spaceTool');

      return true;
    }
  }

  // l -> activate lasso tool
  function lassoTool(context) {

    var event = context.event;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (isKeyIn(['l', 'L'], event)) {
      editorActions.trigger('lassoTool');

      return true;
    }
  }


  // h -> activate hand tool
  function handTool(context) {

    var event = context.event;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (isKeyIn(['h', 'H'], event)) {
      editorActions.trigger('handTool');

      return true;
    }
  }

  // c -> activate global connect tool
  function globalConnectTool(context) {

    var event = context.event;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (isKeyIn(['c', 'C'], event)) {
      editorActions.trigger('globalConnectTool');

      return true;
    }
  }

  // e -> activate direct editing
  function directEditing(context) {

    var event = context.event;

    if (keyboard.hasModifier(event)) {
      return;
    }

    if (isKeyIn(['e', 'E'], event)) {
      editorActions.trigger('directEditing');

      return true;
    }
  }
}

BpmnKeyBindings.$inject = [
  'keyboard',
  'editorActions'
];



// helpers ////////

/**
 * Check if `KeyboardEvent.key` is in provided array.
 *
 * @param {String[]} keys
 * @param {KeyboardEvent} event
 */
function isKeyIn(keys, event) {
  return keys.indexOf(event.key) > -1;
}
