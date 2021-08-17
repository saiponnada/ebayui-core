import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';
// import example1 from './examples/01-basic/template.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-fake-menu-button',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        text: {
            control: { type: 'text' },
            description: 'button text',
        },
        a11yText: {
            description: 'a11y text for the button, especially for cases without text',
            control: { type: 'text' },
        },
        noToggleIcon: {
            type: 'boolean',
            description: 'whether to hide the chevron toggle icon',
            control: { type: 'boolean' },
        },
        expanded: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether content is expanded (Note: not supported as initial attribute)',
        },
        reverse: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'expand menu flyout to the left',
        },
        fixWidth: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'constrain items container width to button width',
        },
        borderless: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether button has borders',
        },
        size: {
            control: { type: 'text' },
            description: 'button size, "large" (default: "none")',
        },
        priority: {
            control: { type: 'text' },
            description:
                'button priority, "primary" (deprecated) / "secondary" (deprecated) / "none" (default)',
        },

        disabled: {
            type: 'boolean',
            control: { type: 'boolean' },
            description:
                'Will disable the entire dropdown (disables the ebay-button label) if set to true',
        },
        variant: {
            control: { type: 'text' },
            description: 'will change the button style, "overflow" / "default"',
        },
        item: {
            name: '@item',
            table: {
                category: '@attribute tags',
            },
        },
        icon: {
            name: '@icon',
            table: {
                category: '@attribute tags',
            },
        },
        href: {
            control: { type: 'text' },
            table: {
                category: '@item attribute tags',
            },
            description:
                'for link that looks like a menu-item. If not set for fake type, will also disable the item',
        },
        type: {
            control: { type: 'text' },
            description: 'Set to "button" for fake menu-item `<button>`',
            table: {
                category: '@item attribute tags',
            },
        },
        checked: {
            table: {
                category: '@item attribute tags',
            },
            description: 'whether or not item is checked',
        },
        current: {
            table: {
                category: '@item attribute tags',
            },
            description: 'whether or not the href is the current href of the page',
        },
        badgeNumber: {
            description: 'used as the number to be placed in the badge',
            table: {
                category: '@item attribute tags',
            },
        },
        badgeAriaLabel: {
            description: 'passed as the `aria-label` directly to the badge',
            table: {
                category: '@item attribute tags',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    items: [
        {
            renderBody: `item 1 that has very long text`,
        },
        {
            renderBody: `item 2`,
        },
        {
            renderBody: `item 3`,
        },
    ],
    text: `eBay Menu`,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-menu-button', Standard.args),
        },
    },
};
