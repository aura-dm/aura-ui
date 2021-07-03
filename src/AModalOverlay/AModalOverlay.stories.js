import ATypography from '../ATypography';
import AModalBody from '../AModalBody';
import AButton from '../AButton';
import AModalOverlay from './';

export default { title: 'Modal Overlay' };

export const ModalOverlay = () => ({
  components: { AButton, AModalBody, AModalOverlay, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
  <div>
    <a-button
      @click="show = !show"
      :is-primary="true"
      style="margin: 0 0 10px;"
    >
      Toggle Overlay
    </a-button>
    <div style="background-color: #666666; height: 500px; position: absolute; width: 500px;">
      <a-modal-overlay v-if="show" />
    </div>
  </div>
  `,
});

export const WithTransition = () => ({
  components: { AButton, AModalBody, AModalOverlay, ATypography },
  data() {
    return {
      show: false,
    };
  },
  template: `
    <div>
      <a-button
        @click="show = !show"
        :is-primary="true"
        style="margin: 0 0 10px;"
      >
        Toggle Overlay
      </a-button>
      <div style="background-color: #666666; height: 500px; position: absolute; width: 500px;">
        <transition name="overlay">
          <a-modal-overlay v-if="show" />
        </transition>
      </div>
    </div>
  `,
});
