import { Meta, Story } from '@storybook/vue3'
import VButton from './VButton.ce.vue'

export default {
  title: 'Components/VButton',
  component: VButton,
} as Meta<typeof VButton>;

const Template: Story<typeof VButton> = (args: any) => ({
  components: {
    VButton,
  },
  setup() {
    return { args };
  },
  template: `
    <v-button v-bind="args">
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </v-button>
  `,
});

export const Base = Template.bind({})
Base.args = {
  default: `Lorem ipsum`,
}

export const Primary = Template.bind({});
Primary.args = {
  default: 'Lorem ipsum',
  primary: true
};
