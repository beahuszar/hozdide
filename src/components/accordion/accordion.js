import React from 'react';

const listDefinitions = definitions => {
  if (typeof definitions !== 'undefined') {
    return definitions.map(definition => (
      <div key={definition.title}>
        <dt>{definition.title}</dt>
        <dd>{definition.description}</dd>
      </div>
    ));
  }
  return <div>nincs meg semmi sm</div>;
};

const Toggle = props => {
  const definitions = listDefinitions(props.definitions);

  return (
    <section>
      <h2>{props.title}</h2>
      <dl>{definitions}</dl>
    </section>
  );
};

export default Toggle;
