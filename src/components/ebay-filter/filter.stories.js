import { tagToString } from '../../../.storybook/storybook-code-source';
import { addRenderBodies } from '../../../.storybook/utils';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: 'ebay-filter',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        href: {
            control: { type: 'text' },
            description: 'for link that looks like a button',
        },
        disabled: {
            control: { type: 'boolean' },
        },
        selected: {
            control: { type: 'boolean' },
        },
        a11ySelectedText: {
            control: { type: 'text' },
            description: 'defaults to `"Selected"`, but should be changed based on L10N or I18N',
            table: {
                category: 'when using fake filters',
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: `text`,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-filter', Standard.args),
        },
    },
};
