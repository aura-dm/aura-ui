import ATypography from '../ATypography';
import AModal from '../AModal';
import AModalOverlay from './';

export default { title: 'Modal Overlay' };

export const ModalOverlay = () => ({
  components: { AModal, AModalOverlay, ATypography },
  template: `
    <a-modal-overlay>
      <a-modal id="example-modal-overlay" title="Modal Overlay Example">
        Modal Overlay Example Content
      </a-modal>
    </a-modal-overlay>
  `,
});
