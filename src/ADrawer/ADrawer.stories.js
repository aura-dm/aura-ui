import AButton from '../AButton';
import ATextField from '../ATextField';
import ATypography from '../ATypography';
import ADrawer from './';

export default { title: 'Drawer' };

export const Drawer = () => ({
  components: { ADrawer, ATypography },
  template: `
    <a-drawer id="example-drawer" title="Example Drawer">
      <template v-slot:content>
        <a-typography>Example content in v-slot:content</a-typography>
      </template>
      <template v-slot:footer>
        <a-typography>Example content in v-slot:footer</a-typography>
      </template>
    </a-drawer>
  `,
});

export const ShowAndHideModal = () => ({
  components: { AButton, ADrawer, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <a-button @click="show = true" :is-primary="true">Show Drawer</a-button>
      <a-drawer v-if="show" @close="show = false" id="example-drawer" title="Example Drawer">
        <template v-slot:content>
          <a-typography>Example content in v-slot:content</a-typography>
        </template>
        <template v-slot:footer>
          <a-typography>Example content in v-slot:footer</a-typography>
        </template>
      </a-drawer>
    </div>
  `,
});

export const WithTransition = () => ({
  components: { AButton, ADrawer, ATextField, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <a-button @click="show = true" :is-primary="true">Show Drawer</a-button>
      <transition name="drawer">
        <a-drawer v-if="show" @close="show = false" id="example-drawer" title="Example Drawer">
          <template v-slot:content>
            <div style="display: flex; flex-direction: column; width: 100%;">
              <a-text-field :is-large="true" label="Name" style="margin: 0 0 20px;" />
              <a-text-field label="Description" />
            </div>
          </template>
          <template v-slot:footer>
            <a-button @click="show = false">Cancel</a-button>
            <a-button @click="show = false" :is-primary="true">Create</a-button>
          </template>
        </a-drawer>
      </transition>
    </div>
  `,
});
