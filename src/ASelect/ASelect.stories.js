import AButton from '../AButton';
import AIconButton from '../AIconButton';
import { AMoreIcon } from '../icons';
import ASelect from './';

export default { title: 'Select Menu' };

export const menuWithButton = () => ({
  components: { AButton, ASelect },
  methods: {
    onSelect(id) {
      console.log(id);
    },
  },
  template: `
    <a-select
      :items="[
        {
          id: 'item1',
          label: 'Item 1',
        },
        {
          id: 'item2',
          label: 'Item 2',
        },
        {
          id: 'item3',
          label: 'Item 3',
        }
      ]"
      @select="onSelect"
    >
      <template slot-scope="{on}">
        <a-button @click="on" :is-primary="true">Options</a-button>
      </template>
    </a-select>
  `,
});

export const menuWithIcon = () => ({
  components: { AIconButton, AMoreIcon, ASelect },
  methods: {
    onSelect(id) {
      console.log(id);
    },
  },
  template: `
    <a-select
      :items="[
        {
          id: 'item1',
          label: 'Item 1',
        },
        {
          id: 'item2',
          label: 'Item 2',
        },
        {
          id: 'item3',
          label: 'Item 3',
        }
      ]"
      @select="onSelect"
    >
      <template slot-scope="{on}">
        <a-icon-button @click="on" variant="plain">
          <a-more-icon />
        </a-icon-button>
      </template>
    </a-select>
  `,
});
