import AModal from './';

export default { title: 'Modal' };

export const Modal = () => ({
  components: { AModal },
  template: `
    <a-modal id="example-modal" title="Example Modal">
      <template v-slot:content>
        <div style="padding: 30px;">
          Example content in v-slot:content
        </div>
      </template>
      <template v-slot:footer>
        Example content in v-slot:footer
      </template>
    </a-modal>
  `,
});
