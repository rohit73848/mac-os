import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "40vw",
  height = "55vh",
  defaultPos = { x: 80, y: 70 },
  title = "Terminal — zsh",
  windowName,
  setWindowsState,
  zIndex = 10,
  onFocus,
  minWidth = 320,
  minHeight = 220,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevBounds, setPrevBounds] = useState(null);
  const [rndRef, setRndRef] = useState(null);

  const handleClose = (e) => {
    e.stopPropagation();
    if (setWindowsState && windowName) {
      setWindowsState((state) => ({ ...state, [windowName]: false }));
    }
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    if (setWindowsState && windowName) {
      setWindowsState((state) => ({ ...state, [windowName]: false }));
    }
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    if (!rndRef) return;

    if (!isMaximized) {
      setPrevBounds({
        width: rndRef.resizableElement.current.offsetWidth,
        height: rndRef.resizableElement.current.offsetHeight,
        x: rndRef.getDraggablePosition().x,
        y: rndRef.getDraggablePosition().y,
      });

      rndRef.updatePosition({ x: 0, y: 32 });
      rndRef.updateSize({
        width: window.innerWidth,
        height: window.innerHeight - 32 - 75,
      });
      setIsMaximized(true);
    } else {
      if (prevBounds) {
        rndRef.updatePosition({ x: prevBounds.x, y: prevBounds.y });
        rndRef.updateSize({
          width: prevBounds.width,
          height: prevBounds.height,
        });
      }
      setIsMaximized(false);
    }
  };

  return (
    <Rnd
      ref={(c) => setRndRef(c)}
      default={{
        width: width,
        height: height,
        x: defaultPos.x,
        y: defaultPos.y,
      }}
      minWidth={minWidth}
      minHeight={minHeight}
      bounds="main"
      style={{ zIndex }}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
      dragHandleClassName="window-drag-handle"
      enableResizing={!isMaximized}
      disableDragging={isMaximized}
    >
      <div className="window" onMouseDown={onFocus}>
        <div className="nav window-drag-handle">
          <div className="dots">
            <button
              type="button"
              onClick={handleClose}
              className="dot red"
              aria-label="Close window"
              title="Close"
            >
              <span className="dot-icon">✕</span>
            </button>
            <button
              type="button"
              onClick={handleMinimize}
              className="dot yellow"
              aria-label="Minimize window"
              title="Minimize"
            >
              <span className="dot-icon">−</span>
            </button>
            <button
              type="button"
              onClick={handleMaximize}
              className="dot green"
              aria-label="Maximize window"
              title="Maximize"
            >
              <span className="dot-icon">+</span>
            </button>
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
