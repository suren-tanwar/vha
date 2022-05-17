import Konva from 'konva';
import React, { PropsWithChildren } from 'react';
// import ReactDOM from 'react-dom/client';
import { Group } from 'react-konva';

const needForceStyle = (el: HTMLDivElement) => {
  const pos = window.getComputedStyle(el).position;
  const ok = pos === 'absolute' || pos === 'relative';
  return !ok;
};

type TransformAttrs = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  skewX: number;
  skewY: number;
};

type Props = PropsWithChildren<{
  groupProps?: Konva.ContainerConfig;
  divProps?: any;
  transform?: boolean;
  transformFunc?: (attrs: TransformAttrs) => TransformAttrs;
}>;

export const Html = ({
  children,
  groupProps,
  divProps,
  transform,
  transformFunc,
}: Props) => {
  const groupRef = React.useRef<Konva.Group>(null);
  const container = React.useRef<HTMLDivElement>();

  const [div] = React.useState(() => document.createElement('div'));
//   const root = React.useMemo(() => ReactDOM.createRoot(div), [div]);

  const shouldTransform = transform ?? true;

  const handleTransform = () => {
    if (shouldTransform && groupRef.current) {
      const tr = groupRef.current.getAbsoluteTransform();
      let attrs = tr.decompose();
      if (transformFunc) {
        attrs = transformFunc(attrs);
      }
      div.style.position = 'absolute';
      div.style.zIndex = '10';
      div.style.top = '0px';
      div.style.left = '0px';
      div.style.transform = `translate(${attrs.x}px, ${attrs.y}px) rotate(${attrs.rotation}deg) scaleX(${attrs.scaleX}) scaleY(${attrs.scaleY})`;
      div.style.transformOrigin = 'top left';
    } else {
      div.style.position = '';
      div.style.zIndex = '';
      div.style.top = '';
      div.style.left = '';
      div.style.transform = ``;
      div.style.transformOrigin = '';
    }
    const { style, ...restProps } = divProps || {};
    // apply deep nesting, because direct assign of "divProps" will overwrite styles above
    Object.assign(div.style, style);
    Object.assign(div, restProps);
  };

  React.useLayoutEffect(() => {
    const group = groupRef.current;
    if (!group) {
      return;
    }
    const parent = group.getStage()?.container();
    if (!parent) {
      return;
    }
    parent.appendChild(div);

    if (shouldTransform && needForceStyle(parent)) {
      parent.style.position = 'relative';
    }

    group.on('absoluteTransformChange', handleTransform);
    handleTransform();
    return () => {
      group.off('absoluteTransformChange', handleTransform);
      div.parentNode?.removeChild(div);
    };
  }, [shouldTransform]);

  React.useLayoutEffect(() => {
    handleTransform();
  }, [divProps]);

//   React.useLayoutEffect(() => {
//     root.render(children);
//   });

//   React.useEffect(() => {
//     return () => {
//       root.unmount();
//     };
//   }, []);

  return <Group ref={groupRef} {...groupProps} />;
};