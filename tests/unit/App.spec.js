import { render, screen } from '@testing-library/vue';
import App from '../../src/App';

describe('App tests', () => {
    test('should render checkboxes for genders', () => {
        render(App)
        expect(screen.getByLabelText('Male')).toBeVisible();
        expect(screen.getByLabelText('Female')).toBeVisible();
        expect(screen.getByLabelText('Other')).toBeVisible();
    })
})