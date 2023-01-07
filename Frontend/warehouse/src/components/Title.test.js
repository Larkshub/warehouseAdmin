import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Title from './Title'

describe('Title component', () => {
    test('Component renders', () => {
        const data = {
            text: 'test'
        }   

       render(<Title text={data.text} />)

        expect(screen.getByText('test')).toBeVisible()

    })
})