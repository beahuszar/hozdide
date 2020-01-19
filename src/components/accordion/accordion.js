import React from 'react';
import AccordionItem from './accordionItem';
import s from './accordion.module.scss';

const renderAccordionItems = accordionItems => {
  if (typeof accordionItems !== 'undefined') {
    return accordionItems.map(accordionItem => (
      <AccordionItem
        accordionItem={accordionItem}
        s={s}
        key={accordionItem.title}
      />
    ));
  }
  return <div>no items to render</div>;
};

const Accordion = ({ title, accordionItems }) => {
  return (
    <section className={`${s.accordionSection} col-8`}>
      <h2>{title}</h2>
      <ul>{renderAccordionItems(accordionItems)}</ul>
    </section>
  );
};

export default Accordion;
