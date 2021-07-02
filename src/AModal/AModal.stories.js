import ATypography from '../ATypography';
import AModal from './';

export default { title: 'Modal' };

export const Modal = () => ({
  components: { AModal, ATypography },
  template: `
    <a-modal id="example-modal" title="Example Modal">
      <template v-slot:content>
        <div style="padding: 30px;">
          <a-typography>Example content in v-slot:content</a-typography>
        </div>
      </template>
      <template v-slot:footer>
        <a-typography>Example content in v-slot:footer</a-typography>
      </template>
    </a-modal>
  `,
});

export const ShowAndHideModal = () => ({
  components: { AModal, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <button @click="show = true">Show</button>
      <a-modal v-if="show" @close="show = false" id="example-modal" title="Example Modal">
        <template v-slot:content>
          <a-typography>Example content in v-slot:content</a-typography>
        </template>
        <template v-slot:footer>
          <a-typography>Example content in v-slot:footer</a-typography>
        </template>
      </a-modal>
    </div>
  `,
});

export const ModalWithTransition = () => ({
  components: { AModal, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <button @click="show = true">Show</button>
      <transition name="modal">
        <a-modal v-if="show" @close="show = false" id="example-modal" title="Example Modal">
          <template v-slot:content>
            <a-typography>Example content in v-slot:content</a-typography>
          </template>
          <template v-slot:footer>
            <a-typography>Example content in v-slot:footer</a-typography>
          </template>
        </a-modal>
      </transition>
    </div>
  `,
});
