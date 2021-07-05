import ATypography from '../ATypography';
import AModalBody from './';

export default { title: 'Modal Body' };

export const Default = () => ({
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
