/**
 * Helper to make props transient, so that they don't get exposed to the DOM
 * @param category
 * @return {Array} Array of the unprefixed props
 */

import { ReactElement, ReactNode } from 'react';

/* eslint-disable-next-line */
export const transientProps = (category: any) => (props: any) => {
    const unprefixedProps = Object.entries(props).reduce((acc, [key, value]) => {
        let unprefixedKey = key;
        if (key.startsWith('$')) unprefixedKey = key.substring(1);
        acc[unprefixedKey] = value;
        return acc;
    }, {});
    return category(unprefixedProps);
};

/**
 * Helper to conditionally wrap react / jsx elements
 * @param {boolean} condition Flag, whether to wrap or not
 * @param {Function} wrapper Function, that wraps the children with the desired element
 * @param {ReactNode} children Children to be wrapped
 * @return {ReactNode} Either the children or if condition matched, wrapped children
 */
export const ConditionalWrapper = ({
    condition,
    wrapper,
    children,
}: {
    condition: boolean;
    wrapper: any;
    children: ReactNode;
}): ReactElement => (condition ? wrapper(children) : children);

/**
 * Little helper to check if a link is external
 * @param {string } link the link to check
 * @return {boolean} Flag, if link is internal
 */
export const isInternalLink = (link: string): boolean => !/^(https?:\/\/|\/\/)/i.test(link);
