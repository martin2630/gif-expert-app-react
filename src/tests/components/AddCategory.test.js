import { React } from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe("Pruebas en <AddCategory />", () => {
    const setCateries = () => {
        console.log("setCategories");
    }
    const wrapper = shallow(<AddCategory setCategories={setCateries} />)
    

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de validar que el input cambio', () => {
        const input = wrapper.find('input');
        const value = 'Holi';
        
        input.simulate("change", { target: { value } })
        expect(wrapper.find('p').text()).toBe(value)
    })
    
})