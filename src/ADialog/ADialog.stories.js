import ATypography from '../ATypography';
import AButton from '../AButton';
import ADialog from './';

export default {
  component: ADialog,
  title: 'Dialog',
};

const Template = (args, { argTypes }) => ({
  components: { AButton, ADialog, ATypography },
  props: Object.keys(argTypes),
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div style="height: 300px;">
      <a-button @click="show = true" :is-primary="true">Show Dialog</a-button>
      <transition name="dialog">
        <a-dialog v-bind="$props" v-if="show" @close="show = false">
          {{slotContent}}
          <template v-slot:footer>
            <a-button @click="show = false">Cancel</a-button>
            <a-button @click="show = false" :is-primary="true">Confirm</a-button>
          </template>
        </a-dialog>
      </transition>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  id: 'example-dialog',
  maxWidth: '550px',
  slotContent: '<a-typography>Example content in v-slot:content</a-typography>',
  title: 'Example Dialog',
};
