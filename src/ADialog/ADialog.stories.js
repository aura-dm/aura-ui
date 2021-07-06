import ATypography from '../ATypography';
import AButton from '../AButton';
import ADialog from './';

export default { title: 'Dialog' };

export const Default = () => ({
  components: { ADialog, ATypography },
  template: `
    <a-dialog id="example-dialog" title="Example Modal">
      <template v-slot:content>
        <a-typography>Example content in v-slot:content</a-typography>
      </template>
      <template v-slot:footer>
        <a-typography>Example content in v-slot:footer</a-typography>
      </template>
    </a-dialog>
  `,
});

export const ShowAndHide = () => ({
  components: { AButton, ADialog, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <a-button @click="show = true" :is-primary="true">Show Dialog</a-button>
      <a-dialog v-if="show" @close="show = false" id="example-dialog" title="Example Modal">
        <template v-slot:content>
          <a-typography>Example content in v-slot:content</a-typography>
        </template>
        <template v-slot:footer>
          <a-button @click="show = false">Cancel</a-button>
          <a-button @click="show = false" :is-primary="true">Confirm</a-button>
        </template>
      </a-dialog>
    </div>
  `,
});

export const WithTransition = () => ({
  components: { AButton, ADialog, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <a-button @click="show = true" :is-primary="true">Show Dialog</a-button>
      <transition name="dialog">
        <a-dialog v-if="show" @close="show = false" id="example-dialog" title="Example Modal">
          <template v-slot:content>
            <a-typography>Example content in v-slot:content</a-typography>
          </template>
          <template v-slot:footer>
            <a-button @click="show = false">Cancel</a-button>
            <a-button @click="show = false" :is-primary="true">Confirm</a-button>
          </template>
        </a-dialog>
      </transition>
    </div>
  `,
});
