import { decode } from './StringUtils';

it('renders without errors', () => {
    expect(decode(undefined)).toBeUndefined();
    expect(decode('English')).toBe('English');
    expect(decode('&#38;')).toBe('&');
});
