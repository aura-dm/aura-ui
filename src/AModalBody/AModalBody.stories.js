import ATypography from '../ATypography';
import AModalBody from './';

export default { title: 'Modal Body' };

export const ModalBody = () => ({
  components: { AModalBody, ATypography },
  template: `
    <a-modal-body id="example-modal-body" title="Example ModalBody">
      <template v-slot:content>
        <div style="padding: 30px;">
          <a-typography>Example content in v-slot:content</a-typography>
        </div>
      </template>
      <template v-slot:footer>
        <a-typography>Example content in v-slot:footer</a-typography>
      </template>
    </a-modal-body>
  `,
});

export const ShowAndHideModal = () => ({
  components: { AModalBody, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <button @click="show = true">Show</button>
      <a-modal-body v-if="show" @close="show = false" id="example-modal-body" title="Example ModalBody">
        <template v-slot:content>
          <a-typography>Example content in v-slot:content</a-typography>
        </template>
        <template v-slot:footer>
          <a-typography>Example content in v-slot:footer</a-typography>
        </template>
      </a-modal-body>
    </div>
  `,
});

export const ModalWithTransition = () => ({
  components: { AModalBody, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <button @click="show = true">Show</button>
      <transition name="modal-body">
        <a-modal-body v-if="show" @close="show = false" id="example-modal-body" title="Example ModalBody">
          <template v-slot:content>
            <a-typography>Example content in v-slot:content</a-typography>
          </template>
          <template v-slot:footer>
            <a-typography>Example content in v-slot:footer</a-typography>
          </template>
        </a-modal-body>
      </transition>
    </div>
  `,
});
