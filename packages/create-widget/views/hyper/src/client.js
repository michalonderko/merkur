import hyper from 'hyperhtml';
import { createWidget as createMerkuWidget, createMerkur } from '@merkur/core';
import { widgetProperties } from './widget';
import style from './style.css'; // eslint-disable-line no-unused-vars

function createWidget(widgetParams) {
  return createMerkuWidget({
    ...widgetParams,
    ...widgetProperties,
    $dependencies: {
      bind: hyper.bind,
      wire: hyper.wire,
    },
    mount(widget) {
      widget.$external.render = widget.$dependencies.bind(
        document.getElementById(widget.container)
      );
      return widget.View(widget.$external.render);
    },
    update(widget) {
      widget.View(widget.$external.render);
    },
  });
}

const merkur = createMerkur();
merkur.register({
  ...widgetProperties,
  createWidget,
});
