import { Meta, Story } from '@storybook/vue3'
import VButton from '../VButton/VButton.ce.vue'
import VCard from './VCard.ce.vue'

export default {
  title: 'Components/VCard',
  component: VCard,
} as Meta<typeof VCard>

const Template: Story<typeof VCard> = (args: any) => ({
  components: {
    VButton,
    VCard,
  },
  setup() {
    return { args };
  },
  template: `
    <v-card v-bind="args">
      <template v-if="${'default' in args}" v-slot>
        ${args.default}
      </template>
    </v-card>
  `,
});

export const Base = Template.bind({})
Base.args = {
  default: `
    <p>Lorem ipsum dolor sit amet</p>
  `,
}

export const WithImage = Template.bind({})
WithImage.args = {
  default: `
    <img src="https://picsum.photos/400/200" alt="" />
    <p>Lorem ipsum dolor sit amet</p>
  `,
}

export const WithImageAndAction = Template.bind({})
WithImageAndAction.args = {
  default: `
    <img src="https://picsum.photos/400/200" alt="" />
    <p>Lorem ipsum dolor sit amet</p>
    <v-button v-bind="args">Lorem Ipsum</v-button>
  `,
}