import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ definition, s }) => {
  const [active, setActive] = useState(false);
  const definitionDescriptionRef = useRef(null);

  useEffect(() => {
    definitionDescriptionRef.current.style.maxHeight = active
      ? `${definitionDescriptionRef.current.scrollHeight}px`
      : '0px';
  }, [definitionDescriptionRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <li className={s.definitionSection}>
      <a
        onClick={toggleActive}
        id={definition.title}
        href={`#${definition.title}`}
      >
        {definition.title}
      </a>
      <article ref={definitionDescriptionRef}>{definition.description}</article>
    </li>
  );
};

export default AccordionItem;
