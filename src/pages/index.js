import React from 'react';
import Header from '../components/header/header';
import CoverPhoto from '../components/coverphoto/coverphoto';
import Toggle from '../components/toggle/toggle';

const descriptionList = [
  {
    title: 'Winston',
    description: 'Fekete macska aoisjifj sdijodfijsdoi sdoifjdfoidsjf',
  },
  {
    title: 'Penny',
    description: 'Cirmos macska dsiufhisduhfisud sdiufhsidufh sdiufhsidufh',
  },
  {
    title: 'Kandz',
    description:
      'sdoifdoijf sdoijfsodifjds sdoijfdsoifj sdoifjdosifj sdofijdoif',
  },
  {
    title: 'Kitty',
    description:
      'sdifiuhfiaosufh asdliufhadsiofuh asdiufhadsiofuh asdiufhdisfu',
  },
];

export default () => (
  <div>
    <Header />
    <CoverPhoto />
    <Toggle title="A kis listam" definitions={descriptionList} />
  </div>
);
