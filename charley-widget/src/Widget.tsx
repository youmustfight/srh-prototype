import React, { useCallback, useEffect, useState } from "react"
import { WidgetClosed } from "./components/WidgetClosed";
import { WidgetOpen } from "./components/WidgetOpen";

export const Widget = () => {
  // SETUP
  // --- state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sourceWindow, setSourceWindow] = useState<MessageEventSource>();
  // --- visibility helpers
  const toggleOpen = useCallback((newState: boolean) => {
    if (sourceWindow) {
      // @ts-expect-error
      sourceWindow.postMessage(newState ? 'show' : "hide", "*");
      setIsOpen(newState);
    }
  }, [sourceWindow])

  // ON MOUNT
  // --- grab parent window for message passing
  useEffect(() => {
    const messageSourceHandler = (e: MessageEvent) => {
      if (e.data === 'init' && e.source) setSourceWindow(e.source);
    }
    window.addEventListener('message', messageSourceHandler);
    return () => window.removeEventListener('message', messageSourceHandler)
  }, []);

  // RENDER
  return isOpen ? <WidgetOpen onClose={() => toggleOpen(false)} /> : <WidgetClosed onOpen={() => toggleOpen(true)} />
}
