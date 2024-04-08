import { describe, expect, it } from 'vitest';
import { classNames } from '../util/generalUtil';

describe('classNames function', () => {
    it('should concatenate provided class names with spaces', () => {
        const result = classNames('class1', 'class2', 'class3');
        expect(result).toBe('class1 class2 class3');
    });

    it('should ignore falsy values', () => {
        const result = classNames('class1', '', 'class2', 'class3');
        expect(result).toBe('class1 class2 class3');
    });

    it('should handle an empty list of classes', () => {
        const result = classNames();
        expect(result).toBe('');
    });
});
