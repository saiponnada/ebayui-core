import { tagToString } from '../../../.storybook/storybook-code-source';
import Readme from './README.md';
import Component from './index.marko';

const Template = (args) => ({
    input: {
        ...args,
        renderBody: args.renderBody
            ? (out) => {
                  out.html(args.renderBody);
              }
            : null,
    },
});

export default {
    title: 'ebay-select',
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        selected: {
            control: { type: 'number' },
            description: 'allows you to set the selected index option to `selected`',
        },
        borderless: {
            type: 'boolean',
            control: { type: 'boolean' },
            description: 'whether button has borders',
        },
        text: {
            control: { type: 'text' },
            description: 'text to use in the option',
            table: {
                category: '@option attributes',
            },
        },
        value: {
            control: { type: 'text' },
            description: 'used for the `value` attribute of the native `<option>`',
            table: {
                category: '@option attributes',
            },
        },
        option: {
            name: '@option',
            table: {
                category: '@attribute tags',
            },
        },
        onChange: {
            action: 'on-change',
            description: 'Triggered on option selected',
            table: {
                category: 'Events',
                defaultValue: {
                    summary: '{ el, index, selected }',
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    options: [
        {
            text: 'option 1',
            value: 'option 1',
        },
        {
            text: 'option 2',
            value: 'option 2',
        },
        {
            text: 'option 3',
            value: 'option 3',
        },
    ],
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString('ebay-select', Standard.args, { options: 'option' }),
        },
    },
};