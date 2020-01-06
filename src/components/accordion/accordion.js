import React, { useState, useRef, useEffect } from 'react';
import s from './accordion.module.scss';

const useDefinitions = definitions => {
  const [active, setActive] = useState(false);
  const definitionDescriptionRef = useRef(null);

  useEffect(() => {
    console.log(definitionDescriptionRef.current.style.maxheight);
    definitionDescriptionRef.current.style.maxHeight = active
      ? `${definitionDescriptionRef.current.scrollHeight}px`
      : '0px';
  }, [definitionDescriptionRef, active]);

  const toggleActive = () => {
    setActive(!active);
  };

  if (typeof definitions !== 'undefined') {
    return definitions.map(definition => (
      <li key={definition.title} className={s.definitionSection}>
        <a onClick={toggleActive}>{definition.title}</a>
        <article ref={definitionDescriptionRef}>
          {definition.description}
        </article>
      </li>
    ));
  }
  return <div>nincs meg semmi sm</div>;
};

const Toggle = props => {
  const definitions = useDefinitions(props.definitions);

  return (
    <section className={s.accordionSection}>
      <h2>{props.title}</h2>
      <ul>{definitions}</ul>
    </section>
  );
};

export default Toggle;
