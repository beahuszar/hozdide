import React from 'react';
import AccordionItem from './accordionItem';
import s from './accordion.module.scss';

const useDefinitions = definitions => {
  if (typeof definitions !== 'undefined') {
    return definitions.map(definition => (
      <AccordionItem definition={definition} s={s} key={definition.title} />
    ));
  }
  return <div>no items to render</div>;
};

const Accordion = props => {
  const definitions = useDefinitions(props.definitions);

  return (
    <section className={s.accordionSection}>
      <h2>{props.title}</h2>
      <ul>{definitions}</ul>
    </section>
  );
};

export default Accordion;
