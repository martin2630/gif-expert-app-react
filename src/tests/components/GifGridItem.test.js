import { React } from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas en <GifGridItem />", () => {
    const title = "Hola mundo";
    const url = "https://holamundo.com";
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>)

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar un texto en el título', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('debe de tener una img igual a url y alt de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })

    test('debe de tener la clase animated__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animated__fadeIn') ).toBe( true );
    })
    
})