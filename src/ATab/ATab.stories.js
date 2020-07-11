import AActionBar from '../AActionBar';
import ATab from './';

export default { title: 'Tab' };

export const tab = () => ({
  components: { ATab },
  template: `
    <div style="display: flex;">
      <a-tab :is-active="true" label="Active Tab" style="margin: 0 20px 0 0;" />
      <a-tab label="Inactive Tab" />
    </div>
  `,
});

export const tabsWithActionBar = () => ({
  components: { AActionBar, ATab },
  template: `
    <a-action-bar>
      <template v-slot:controls-left>
        <a-tab :is-active="true" label="Active Tab" />
        <a-tab label="Inactive Tab" />
      </template>
    </a-action-bar>
  `,
});
