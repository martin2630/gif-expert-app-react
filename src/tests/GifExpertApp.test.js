import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas GifExpertApp', () => {
    let wrapper = shallow(<GifExpertApp />);
    beforeEach( () => {
            wrapper = shallow(
                <GifExpertApp  />
            );
        }
    )
    test('debe de mostrar <GifExpertApp /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    // test('CounterApp debe de mostrar el valor defecto de 100', () => {
    //     const value = 100;
    //     const wrapper = shallow(
    //         <CounterApp 
    //             value={value}
    //         />);
    //     const valueApp = wrapper.find('h2').text().trim();
    //     expect(valueApp).toBe('100');
        
    // })

    // test('debe de incrementar con el boton +1', () => {
    //     wrapper.find("button").at(0).simulate("click");
    //     const valueApp = wrapper.find("h2").text().trim();
    //     expect(valueApp).toBe('11');
        
    // })

    // test('debe de disminuir con el boton -1', () => {
    //     wrapper.find("button").at(2).simulate("click");
    //     const valueApp = wrapper.find("h2").text().trim();
    //     expect(valueApp).toBe('9');
        
    // })


    // test('debe de resetear el valor de counter al valor inicial', () => {
    //     wrapper.find("button").at(1).simulate("click");
    //     const valueApp = wrapper.find("h2").text().trim();
    //     expect(valueApp).toBe('10');
        
    // })
    
    
    
})
