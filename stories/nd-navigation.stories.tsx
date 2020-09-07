import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useRouter } from 'next/router';
import {
    Notifications as NotificationIcon,
    List as ListIcon,
    Book as BookIcon,
    SupervisedUserCircle as UserIcon,
} from '@material-ui/icons';

import NdNavigation, { NdNavigationProps } from '../src/components/NdNavigation';

export default {
    title: 'Components / Navigation',
    component: NdNavigation,
    decorators: [storyFn => <div className="nd-mui-navigation-preview do-not-use-this-div">{storyFn()}</div>],
    parameters: {
        componentSubtitle: 'Generates a navigation utilizing MUIs drawer component.',
        docs: {
            description: {
                component: `import { NdNavigation } from 'nd-component-factory'; <br> 
                import { NdNavigation } from 'nd-component-factory/components'; <br> 
                import NdNavigation from 'nd-component-factory/NdNavigation'; <br>`,
            },
        },
    },
    argTypes: {
        items: {
            control: {
                disable: true,
            },
        },
        offsetTop: {
            control: {
                type: 'range',
                min: 0,
                max: 200,
            },
        },
        useNextJSRouterHook: {
            control: {
                disable: true,
            },
        },
    },
    args: {
        useNextJSRouterHook: useRouter,
        items: [
            {
                text: 'Benachrichtigungen',
                icon: <NotificationIcon />,
                hideText: true,
                action: () => console.log('foo'),
            },
            {
                text: 'Projekte',
                isActive: true,
                icon: <ListIcon />,
                href: 'http://www.spiegel.de',
            },
            {
                text: 'Infothek',
                icon: <BookIcon />,
                href: '/infothek',
            },
            {
                text: 'Kontakte',
                icon: <UserIcon />,
                href: '/kontakte',
            },
        ],
        footnote: 'Logo etc.',
        offsetTop: 0,
    },
} as Meta;

const Template: Story<NdNavigationProps> = args => <NdNavigation {...args} />;
export const Default = Template.bind({});

Default.parameters = {
    docs: {
        storyDescription: 'Foobar',
        description: {
            story: 'This demonstrates react hooks working inside stories. **Go team!** 🚀',
        },
    },
};
