import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../Title';
import List from '../List';
import Footer from '../Footer';
import Input from '../Input';

describe('render correctly Title Component', () => {
  it('render correctly', () => {
    const tree = renderer.create(
      <Title/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('render correctly Input Component', () => {
  const props = {
    onSubmit: () => {}
  }
  const component = renderer.create(
    <Input {...props}/>
  );
  it('render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('check function', () => {
    let tree = component.toJSON();
    const item = tree.children[0];

    //handle Change text
    item.props.onChangeText();

    //handle Submit
    item.props.onSubmitEditing();

    expect(tree).toMatchSnapshot();
  });
})

describe('render correctly List Component', () => {
  const props = {
    items: [{label:'sleep',completed:false},{label:'work',completed:true}],
    onToggle: () => {},
    onRemoveItem: () => {}
  };
  const component = renderer.create(
    <List {...props}/>
  );
  it('render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('check function', () => {
    let tree = component.toJSON();

    const item = tree.children
      .filter(child => child.type === 'View')[0]
      .children.filter(child => child.type === 'View')[0].children;

    // Checkbox Function - Toggle Item
    item[0].props.onPress();

    // Remove Function
    item[1].props.onPress();

    expect(tree).toMatchSnapshot();
  })
})

describe('render correctly Footer Component', () => {
  const props ={
    onRemoveCompleted: () => {}
  };

  const component = renderer.create(
    <Footer {...props}/>
  );

  it('render correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
