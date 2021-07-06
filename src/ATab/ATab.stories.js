import AActionBar from '../AActionBar';
import ATab from './';

export default { title: 'Tab' };

export const Default = () => ({
  components: { ATab },
  template: `
    <div style="display: flex;">
      <a-tab :is-active="true" label="Active Tab" />
      <a-tab label="Inactive Tab" />
    </div>
  `,
});

export const WithActionBar = () => ({
  components: { AActionBar, ATab },
  template: `
    <a-action-bar>
      <template v-slot:controls-left>
        <div style="display: flex;">
          <a-tab :is-active="true" label="Active Tab" />
          <a-tab label="Inactive Tab" />
        </div>
      </template>
    </a-action-bar>
  `,
});
