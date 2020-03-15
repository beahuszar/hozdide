import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ accordionItem, s }) => {
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
    <>
      <li className={s.definitionSection} id={accordionItem.title}>
        <a onClick={toggleActive} href={`#${accordionItem.title}`}>
          {accordionItem.title}
        </a>
        <article ref={definitionDescriptionRef}>
          {accordionItem.description}
        </article>
      </li>
    </>
  );
};

export default AccordionItem;
