import ATypography from '../ATypography';
import ADrawer from './';

export default { title: 'Drawer' };

export const Drawer = () => ({
  components: { ADrawer, ATypography },
  template: `
    <a-drawer id="example-drawer" title="Example Drawer">
      <template v-slot:content>
        <div style="padding: 30px;">
          <a-typography>Example content in v-slot:content</a-typography>
        </div>
      </template>
      <template v-slot:footer>
        <a-typography>Example content in v-slot:footer</a-typography>
      </template>
    </a-drawer>
  `,
});

export const ShowAndHideModal = () => ({
  components: { ADrawer, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <button @click="show = true">Show</button>
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

export const ModalWithTransition = () => ({
  components: { ADrawer, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <button @click="show = true">Show</button>
      <transition name="drawer">
        <a-drawer v-if="show" @close="show = false" id="example-drawer" title="Example Drawer">
          <template v-slot:content>
            <a-typography>Example content in v-slot:content</a-typography>
          </template>
          <template v-slot:footer>
            <a-typography>Example content in v-slot:footer</a-typography>
          </template>
        </a-drawer>
      </transition>
    </div>
  `,
});
