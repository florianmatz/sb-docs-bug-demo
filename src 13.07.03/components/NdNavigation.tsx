// Basic Imports
// ----------------
import React, { ReactNode, ReactElement, FC } from 'react';
import Link from 'next/link';
import { NextRouter } from 'next/router';

// Style & MUI Imports
// ----------------
import { Box, Drawer, List, ListItem, Button } from '@material-ui/core';
import styled from 'styled-components';

// Nd Imports
// ----------------
import { colors } from '../theme';
import { isInternalLink, ConditionalWrapper } from '../utils';

export type NdNavigationItem = {
    text: string;
    icon?: ReactNode;
    href?: string;
    hideText?: boolean;
    isActive?: boolean;
    action?: () => void;
};

export interface NdNavigationProps {
    /**
     * Navigation items
     */
    items: NdNavigationItem[];

    /**
     * Logo, Link etc. that gets placed at the end of the navigation / drawer
     */
    footnote?: ReactNode;

    /**
     * Offsetting the navigation from top in px. Useful to respect appbars
     */
    offsetTop?: number;

    /**
     * useRouter hook of Next.js. If you don't route with Next.js, simply omit this value
     */
    useNextJSRouterHook?: () => NextRouter;
}

const StyledWrapper = styled.nav`
    display: block;
    width: 85px;
    flex-shrink: 0;

    .MuiDrawer-paper {
        background-color: ${colors.background.default};
        border-right: none;
        margin-top: ${({ offsetTop }) => `${offsetTop}px`};
        width: 85px;
        height: 100%;
        height: calc(100vh - ${({ offsetTop }) => `${offsetTop}px`});
    }
`;

const StyledNavigationItem = styled(Button)`
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    background-color: transparent;
    border-radius: 0;
    border: none;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75px;
    flex-grow: 0;
    overflow: hidden;
    outline: 0;
    padding: 10px;
    text-decoration: none;
    width: 100%;

    .MuiButton-label {
        flex-direction: column;
    }

    &:hover,
    &:focus,
    &:active {
        color: ${colors.secondary.dark};
    }

    ${({ $isActive }) =>
        $isActive &&
        `
        background-color: ${colors.common.white};
        color: ${colors.secondary.dark};
        &:hover {
            background-color: ${colors.common.white};
        }
        &:after {
            content: '';
            display: block;
            width: 4px;
            background-color: ${colors.secondary.main};
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }
    `}
`;

const StyledNavigationItemText = styled.span`
    margin-top: 0.25rem;
`;

const StyledList = styled(List)`
    width: 100%;
`;

const StyledListItem = styled(ListItem)`
    padding: 0;
    border-color: ${colors.grey[400]};
`;

/**
 * Generates a navigation utilizing MUIs drawer component.
 * @param {Array} items Navigation items
 * @param {ReactNode} [footnote] Logo, Link etc. that gets placed at the end of the navigation / drawer
 * @param {number} [offseTop] Offsetting the navigation from top in px. Useful to respect appbars
 * @param {function} [useNextJSRouterHook] useRouter hook of Next.js. If you don't route with Next.js, simply omit this value
 * @return {ReactElement} Component template
 */
const NdNavigation: FC<NdNavigationProps> = ({
    items,
    footnote,
    offsetTop = 0,
    useNextJSRouterHook = () => null,
}: NdNavigationProps): ReactElement => {
    const router = useNextJSRouterHook();

    return (
        <StyledWrapper offsetTop={offsetTop}>
            <Drawer anchor="left" variant="permanent">
                <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    height="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <StyledList disablePadding>
                        {items.map((item: NdNavigationItem) => {
                            const linkIsInternal = isInternalLink(item.href);
                            return (
                                <StyledListItem key={item.text} divider>
                                    {item.href ? (
                                        <ConditionalWrapper
                                            condition={
                                                router !== null &&
                                                Object.prototype.hasOwnProperty.call(router, 'pathname') &&
                                                linkIsInternal
                                            }
                                            wrapper={children => (
                                                <Link href={item.href} passHref>
                                                    {children}
                                                </Link>
                                            )}
                                        >
                                            <StyledNavigationItem
                                                href={(router === null || !linkIsInternal) && item.href}
                                                component="a"
                                                target={!linkIsInternal ? '_blank' : null}
                                                $isActive={
                                                    item.isActive || (router && router.asPath.startsWith(item.href))
                                                }
                                            >
                                                {item.icon && item.icon}
                                                {!item.hideText && item.text && (
                                                    <StyledNavigationItemText>{item.text}</StyledNavigationItemText>
                                                )}
                                            </StyledNavigationItem>
                                        </ConditionalWrapper>
                                    ) : (
                                        <StyledNavigationItem onClick={item.action}>
                                            {item.icon && item.icon}
                                            {!item.hideText && item.text && (
                                                <StyledNavigationItemText>{item.text}</StyledNavigationItemText>
                                            )}
                                        </StyledNavigationItem>
                                    )}
                                </StyledListItem>
                            );
                        })}
                    </StyledList>
                    {footnote && (
                        <Box marginTop="20px" marginBottom="10px">
                            {footnote}
                        </Box>
                    )}
                </Box>
            </Drawer>
        </StyledWrapper>
    );
};

export default NdNavigation;
