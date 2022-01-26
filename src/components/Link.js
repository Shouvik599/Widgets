import React from "react";

function Link({ className, href, children }) {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    //keep link url in sync with components
    window.history.pushState({}, "", href);
    //to let know route that url changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default Link;
